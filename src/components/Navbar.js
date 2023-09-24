import React, {useState} from 'react'

const Navbar = (props) => {

    const [value, setValue] = useState("")

    const handleClick = async (e) => {
        if(value.length !== 0){
        e.preventDefault();
        try{
        const resp = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${value}`)
        const json = await resp.json()
        console.log(json)
        if(json.length !== 0){
        props.setBeers(json)
        }
        else {
            alert('No result Found')
        }
        }
        catch (error){
            alert('No result Found')
        }
    }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Navbar
                        </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Link
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="/"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            Action
                                </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            Another action
                                </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            Something else here
                                </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit = {handleClick}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange = {(e) => setValue(e.target.value)}
                            />
                            <button className="btn btn-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
