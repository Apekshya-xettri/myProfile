import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function NavBar (){
    return(
        <header>
        <nav
            className="navbar navbar-expand-md navbar-light bg-black py-4">
            <div className="container">
                <div className="d-flex ">
                <Link className="navbar-brand d-flex align-items-center pt-0" href="#">
                 <img className="logo" src="/images/logo.png" alt="Profile"/>
                </Link>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-white fw-bold px-3" href="/About" aria-current="page"
                                >About
                                <span className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-bold  px-3" href="/Project">Project</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-bold  px-3" href="/Skills">Skills</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link text-white fw-bold  px-3" href="/Contact">Contact</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="dropdownId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >Dropdown</Link>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownId">
                                <Link className="dropdown-item" href="#">Action 1</Link>
                                <Link className="dropdown-item" href="#">Action 2</Link>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
        </header>
    );
}
