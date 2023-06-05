"use client"
import Profile from '@/components/about/Profile'
import ChangeBg from '@/components/Change'
import Sculpture from '@/components/Sculpture'
import Order from '@/components/Order'
import Form from '@/components/Form'
import Score from '@/components/Score'
import Send from '@/components/Send'
import Panel from '@/components/Panel'
import Food from '@/components/Food'
import TaskReducer from '@/components/TaskReducer'
import VideoPlayer from '@/components/VideoPlayer'
export default function About() {
    return <div style={{paddingBottom: '1rem', fontSize: '.16rem'}}>
        <div>about</div>
        <Profile />
        <ChangeBg /><br></br>
        <Sculpture />
        <Order />
        <Form />
        <Score />
        <Send />
        <Panel />
        <Food />
        <VideoPlayer />
        <TaskReducer />
    </div>
}