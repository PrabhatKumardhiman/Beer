import React from 'react'
import Beers from './Beers';

const ImageContainer = (props) => {

    const handleNextClick = () => {
        props.setPage(props.page + 1)
        props.fetchMoreData()
    }

    const handlePrevClick = () => {
        props.setPage(props.page - 1)
        props.fetchMoreData()
    }
    return (
        <div className='container mt-4'>
            <div className="row">
                {props.beers.length !== 0 && props.beers.map((elem) => {

                    return <Beers key={elem.id} elem={elem} />
                })}
                <div className='mb-5 d-flex justify-content-between'>
                    {props.page > 1 ? <button className="btn btn-primary" onClick={handlePrevClick}>
                        Prev
                    </button> : <button className="btn btn-primary" disabled>
                        Prev
                    </button>}
                    {props.page <= 4 ? <button className="btn btn-primary" onClick={handleNextClick}>
                        Next
                    </button> : <button className="btn btn-primary" disabled>
                        Next
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default ImageContainer
