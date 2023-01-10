const ExploreCard = () => {
    return (
        <>
            <div className="ecContainer">
                <div className="ecCard eCard">
                    <i className="fa-solid fa-tv"></i>
                    <p>ENTERTAINMENT</p>
                </div>
                <div className="ecCard sCard">
                    <i className="fa-solid fa-basketball"></i>
                    <p>SPORT</p>
                </div>
                <div className="ecCard tCard">
                    <i className="fa-solid fa-code"></i>  
                    <p>TECHNOLOGY</p>
                </div>
                <div className="ecCard lCard">
                    <i className="fa-solid fa-leaf"></i>  
                    <p>NATURE</p>
                </div>
            </div>
        </>
    )
}

export default ExploreCard