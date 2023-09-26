import React from 'react'

const Beers = (props) => {

    return (
        <>
            {/* Setting Values for Each elem in beer state */}
            <div className="col-md-4 col-12 mb-4">
                <div className="card">
                    <img src={props.elem.image_url} className="card-img-top mt-2" alt="..." style={{ maxHeight: '30vh', objectFit: "contain" }} />
                    <div className="card-body">
                        <h5 className="card-title fs-4">{props.elem.name}</h5>
                        <p className="card-text fs-6">{props.elem.tagline}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item fs-6">{props.elem.description}</li>
                        <li className="list-group-item fs-6">Pack Size : {props.elem.volume.value} Liters   </li>
                        <li className="list-group-item fs-6">{props.elem.brewers_tips}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Beers
