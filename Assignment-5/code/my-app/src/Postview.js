import './Postview.css';
function Postview() {
    return (
        <div className="container">
            {/* Start your React code here */}
            <div className="info">
                < div className="imag">
                    <img className="image" src="https://www.w3schools.com/howto/img_avatar.png" alt="profile-pic"></img>
                </div>
                <div className="data">
                    <h2>Tom</h2>
                    <p>Location</p>
                    <h3>New York</h3>
                    <p>bloodGroup</p>
                    <h4>O+</h4>
                    <p>Age</p>
                    <h4>27</h4>
                </div>
            </div>
        </div>
    )
};

export default Postview;
