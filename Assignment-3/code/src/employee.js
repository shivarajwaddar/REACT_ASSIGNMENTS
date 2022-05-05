import Header from './Header';
import Content from './content/content';

const Employee = ({ employee }) => {
    return <div className="Employee" >
        <Header employee={employee} />
        <Content employee={employee} />
    </div>
};
export default Employee;