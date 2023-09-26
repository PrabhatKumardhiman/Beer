import React, { useState } from 'react'

const Navbar = (props) => {

    const [value, setValue] = useState("")

    // Function to handle Search Button 
    const handleClick = async (e) => {
        e.preventDefault(); // prevent Reload or move to link on click
        // Do not Sarch when there is no Data
        if (value.length !== 0) {
            try {
                const resp = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${value}`)
                const json = await resp.json()
                // If Match Found
                if (json.length !== 0) {
                    props.setBeers(json)
                }
                // If no match is found
                else {
                    alert('No result Found')
                }
            }
            // Any Other Error 
            catch (error) {
                alert('No result Found')
            }
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        BeerPedia
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
                        <form className="d-flex ms-auto" role="search" onSubmit={handleClick}> {/* onsubmit function to handle the submission od form and call handleClick function */}
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={(e) => setValue(e.target.value)} // onchange function to change value whenever the input is change i.e user type something
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
