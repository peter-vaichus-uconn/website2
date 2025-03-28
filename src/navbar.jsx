import styles from "./navstyle.module.css"

export default function Navbar({NavHeight}){
    return (
    <>
    <nav className = {(NavHeight == 100 ? "nav font-bold text-5xl" : "nav font-bold text-2xl")} style={{ "--nav-height": `${NavHeight}px` }}>
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
            {/* <li>
                <label class="hamburger-menu">
                    <input type="checkbox"></input>
                </label>
            </li> */}
        </ul>
    </nav>
    </>
    )
}