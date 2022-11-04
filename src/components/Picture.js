const Picture = ({item}, {index}) => {
    return (
        <div className="containeritem">
            <img src={item.download_url} width="400px" height="400px" className="pictureimg" alt = "random"/>
            <div className="picturedata">
                <h2>{item.author}</h2>
                <img src="pictures/insta_heart-removebg-preview.png" className="heart" alt = "heart"/>
            </div>
            <div className="likebar">
                <h2>{Math.ceil(Math.random()*Math.random()*9860+100)}</h2>
            </div>
            <div className="comments">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )}

export default Picture;

