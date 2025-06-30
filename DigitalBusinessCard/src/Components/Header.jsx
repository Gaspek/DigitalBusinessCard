import portrait  from '../assets/me (1).jpg'
import {Mail, Linkedin} from 'lucide-react'

export default function Header(){
    return(
        <header>
            <img src={portrait} className='portrait' alt='My portrait'/>
            <section className='heder-section'>
                <h1>Dawid Mierzjewski</h1>
                <h2>Fullstack Developer</h2>
                <a href='https://github.com/Gaspek' className='github-link'><h3>github.com/Gaspek</h3></a>
            </section>
            <nav className='header-navbar'>
                <a href='mailto:mierzdaw@gmail.com' target='new'><button className='header-btn mail-btn' ><Mail/> Email</button></a>
                <a href='https://www.linkedin.com' target='new'><button className='header-btn linkedin-btn'><Linkedin/> LinkedIn</button></a>
            </nav>
        </header>
    )
}