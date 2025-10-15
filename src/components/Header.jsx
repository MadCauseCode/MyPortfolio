import "./Header.css";

const Header = () => {
    const scrolltoElement = (id) => {
        const element = document.getElementById(id);
        if (!element) {
            console.log(`Element with id ${id} not found`);
            return;
        }
        console.log(`Scrolling to ${id}`);
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
        <>
            <header className="header">
                <h1 className="header-title">Oran Gal</h1>
                <nav className="header-nav">
                    <button 
                        className="nav-button"
                        onClick={() => scrolltoElement("MyWork")}
                    >
                        My Work
                    </button>
                    <button 
                        className="nav-button"
                        onClick={() => scrolltoElement("about")}
                    >
                        About Me
                    </button>
                    <button 
                        className="nav-button"
                        onClick={() => scrolltoElement("contact")}
                    >
                        Contact Me
                    </button>
                </nav>
            </header>
        </>
    );
};

export default Header;      