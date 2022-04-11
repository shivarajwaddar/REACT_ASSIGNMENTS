import ContactInfo from "./contactInfo";
import RoleInfo from "./RoleInfo";
import StatusInfo from "./StatusInfo";

const Content = ({ employee }) => {
    return <div className="content" >
        <ContactInfo employee={employee} />
        <StatusInfo employee={employee} />
        <RoleInfo employee={employee} />
    </div>
};
export default Content;