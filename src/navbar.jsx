export default function Navbar(){
    return (
    <>
    <nav className = "nav font-bold text-2xl">
        <a href = "/" className = "home">Peter Vaichus</a>
        <ul>
            <li >
                <a href ="/about">About</a>
            </li>
            <li>
                <a href ="/experience">Experience</a>
            </li>
            <li>
                <a href ="/projects">Projects</a>
            </li>
            <li>
                <a href ="/contact">Contact</a>
            </li>

        </ul>
    </nav>
    </>
    )
}