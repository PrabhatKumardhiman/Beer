import React from 'react'
import Beers from './Beers';

const ImageContainer = (props) => {
    
    return (
        <div className = 'container mt-4'>
            <div className="row">
            {props.beers.length !== 0 && props.beers.map((elem) => {
                
                return <Beers key = {elem.id} elem = {elem}/>
            })}
            
            </div>
        </div>
    )
}

export default ImageContainer
