import './firstpage.css';
import { Link } from "react-router-dom";
function Firstpage() {

    return (
        <div className="App">
            <div className="Fisrtpage">
                <div className="image">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.M0XOHhSTsY91uANaAprk3gHaE8&pid=Api&P=0&w=267&h=178" alt="img" />
                    <h2 className="textdiv">Dubai city</h2>
                </div>
                <div className="enter">
                    <Link to="/Postview">
                        <button className="btn">ENTER</button>
                    </Link>
                </div>

            </div>
        </div>


    )
}

export default Firstpage;
