"use client"
import Profile from 'components/about/Profile'
import Toolbar from 'components/Toolbar'
import ChangeBg from 'components/ChangeBg' 
import Sculpture from 'components/Sculpture' 
import Order from 'components/Order' 
import Dot from 'components/Dot' 
import Form from 'components/Form' 
import Score from 'components/Score' 
import List from 'components/List' 
import Send from 'components/Send' 
import Panel from 'components/Panel' 
import Food from 'components/Food' 
import TaskReducer from 'components/TaskReducer' 
import VideoPlayer from 'components/VideoPlayer' 
export default function About() {
    return <div style={{paddingBottom: '1rem', fontSize: '.16rem'}}>
        <div>about</div>
        <Profile />
        <Toolbar beginPlay={() => alert('beginPlay!')} />
        <Toolbar closePlay={() => alert('closePlay!')} />
        <ChangeBg /><br></br>
        <Sculpture />
        <Order />
        {/*<Dot />*/}
        <Form />
        <Score />
        <Send />
        <Panel />
        <Food />
        <VideoPlayer />
        <TaskReducer />
    </div>
}