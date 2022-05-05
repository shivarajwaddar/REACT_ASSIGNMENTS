const Header = ({ employee }) => {
    return <div className="Header">
        <div className="HeaderNavigator"><div className="BackButton">{"<"}</div></div>
        <div className="HeaderContent">
            <div className="EmployeeName" >{employee.name}</div>
            <div className="EmployeeId">{employee.Id}</div>
        </div>
        <div className="PrintWrapper">
            <button>print</button>
        </div>
    </div>
};
export default Header;