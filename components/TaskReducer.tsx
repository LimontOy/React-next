import { useState, useReducer } from 'react'
import { useImmerReducer } from 'use-immer'
function TaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
        <ul>{tasks.map((task) => (
            <li key={task.id}>
                <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask}></Task>
            </li>
        ))}</ul>
    )
}

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false)
    let taskContent
    if (isEditing) {
        taskContent = (
            <>
            <input value={task.text} onChange={e => {
                onChange({
                    ...task,
                    text: e.target.value
                })
            }} />
            <button onClick={() => setIsEditing(false)}>保存</button>
            </>
        )
    } else {
        taskContent = (
            <>
            {task.text}
            <button onClick={() => setIsEditing(true)}>编辑</button>
            </>
        )
    }
    return (
        <label>
            <input type="checkbox"
                checked={task.done}
                onChange={e => {
                onChange({
                    ...task,
                    done: e.target.checked
                })
            }} />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>删除</button>
        </label>
    )
}

function tasksReducer(draft, action) {
    switch(action.type) {
        case 'add': {
            draft.push({
                id: action.id,
                done: false,
                text: action.text
            })
            break
        }
        case 'change': {
             const index = draft.findIndex((t) => t.id === action.task.id)
             draft[index] = action.task
            break
        }
        case 'delete': {
            return draft.filter(i => i.id !== action.id)
        }
        default: {
            throw Error('未知 action: ' + action.type);
        }
    }
}

let nextId = 3;
const initialTasks = [
    {id: 0, text: '参观卡夫卡博物馆', done: true},
    {id: 1, text: '看木偶戏', done: false},
    {id: 2, text: '打卡列侬墙', done: false},
    ];
export default function TaskApp() {
    const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks)
    function handleAddTask(text) {
        dispatch({
            type: 'add',
            text: text,
            id: nextId++
        })
    }
    
    function handleChangeTask(task) {
        dispatch({
            type: 'change',
            task: task
        })
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'delete',
            id: taskId
        })
    }
    
    return (
        <>
        <h3>布拉格的行程安排</h3>
        <AddTask onAddTask={handleAddTask} />
        <hr />
        <TaskList
            tasks={tasks}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
        />
        </>
        )
}

function AddTask({ onAddTask }) {
    const [text, setText] = useState('')
    
    return (
        <>
        <input placeholder="添加任务" value={text} onChange={e => setText(e.target.value)} />
        <button
            onClick={() => {
            setText('');
            onAddTask(text);
        }}>添加</button>
        </>
    )
}