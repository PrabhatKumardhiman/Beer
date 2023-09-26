import React from 'react'
import Beers from './Beers';

const ImageContainer = (props) => {

    // Function to handle next bttn
    const handleNextClick = () => {
        // Change page nnumber by adding 1
        props.setPage(props.page + 1)
        // Calling function to seacrh with new page number
        props.fetchMoreData()
    }

    const handlePrevClick = () => {
        // Change page nnumber by subtracting 1
        props.setPage(props.page - 1)
        // Calling function to seacrh with new page number
        props.fetchMoreData()
    }

    return (
        <div className='container mt-4'>
            <div className="row">
                {props.beers.length !== 0 && props.beers.map((elem) => {
                    // if there is data in beer state run map function to get each element
                    return <Beers key={elem.id} elem={elem} />
                })}
                <div className='mb-5 d-flex justify-content-between'>
                    {/* Set Btn to disabled if page number is already 1 if within limit call handlePrevClick when Clicked */}
                    {props.page > 1 ? <button className="btn btn-dark" onClick={handlePrevClick}>
                        Prev
                    </button> : <button className="btn btn-dark" disabled>
                        Prev
                    </button>}
                    {/* Set Btn to disabled if page number is more than 1 and greter than 4 as ther are only 5 pages on API  if within limit calll handleNextClick function when clicked*/}
                    {props.page <= 4 ? <button className="btn btn-dark" onClick={handleNextClick}>
                        Next
                    </button> : <button className="btn btn-dark" disabled>
                        Next
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default ImageContainer
