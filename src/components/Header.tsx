function Header(){
    return (
        <header className="site-header">
            {/* Add a brand link containing your name*/}
            <a className="site-brand" href="#top">
                David Solano
            </a>
            <nav className="site-nav" aria-label="Primary navigation">
                <ul className="nav-list">
                    {/* Add the 4 list items and links*/}
                    <li>
                        <a href="#projects">
                        Projects
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header