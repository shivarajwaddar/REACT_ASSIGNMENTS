const RoleInfo = ({ employee }) => {
    return <div className="RoleInfo">
        <div className="RoleInfoWrapper">
            <div className="Checkbox"></div >
        </div>

        <div className="EmployeeImg">
            <img src={employee.image} alt="employee" />
        </div>
        <div className="RoleDetails">
            <div className="EmployeeRole">{employee.role}</div>
            <div className="EmployeeRole">{employee.summary}</div>
        </div>
    </div>
};
export default RoleInfo;