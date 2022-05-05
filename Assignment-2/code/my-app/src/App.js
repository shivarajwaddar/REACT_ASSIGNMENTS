
import './App.css';

function App(props) {
  const { employee } = props;

  return (
    <div className="container">
      {/* Start your React code here */}
      <div className="info">
        <div className="image">
          <img src={employee.profileImg} alt="profile-pic"></img>
        </div>
        <div className="data">
          <h2>{employee.name}</h2>
          <p>Location</p>
          <h4>{employee.location}</h4>
          <p>bloodGroup</p>
          <h4>{employee.bloodgroup}</h4>
          <p>Age</p>
          <h4>{employee.age}</h4>

        </div>

      </div>

    </div>
  )
}



export default App;
