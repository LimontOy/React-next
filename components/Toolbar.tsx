
function Button({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation()
            onClick()
        }}>{children}</button>
    )
}

export default function Toolbar({ beginPlay, closePlay}) {
    return (
        <div>
            <Button onClick={beginPlay}>beginPlay</Button>
            <Button onClick={closePlay}>closePlay</Button>
        </div>
        )
}