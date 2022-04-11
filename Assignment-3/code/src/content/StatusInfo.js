import { timeStampFormatter } from "..utilities/formatDate";

const StatusInfo = ({ employee }) => {
    const StatusDetail = ({ detailName, detail }) => {
        return (
            <div className="StatusDetailWrapper">
                <div className="StatusDetailName" >{detailName + " "}</div>
                <div className="StatusDetail">{detail}</div>
            </div>
        );
    };
    const status = (
        <>
            <span className="statusIcon">
                {employee.status}</span>
        </>
    );
    return <div className="StatusInfo">
        <StatusDetail
            detailName={"Status"}
            detail={(employee.Status)}
        />
        <StatusDetail
            detailName={"Door"}
            detail={employee.door}
        />
        <StatusDetail
            detailName={"Time"}
            detail={employee.time}
        />

    </div>
};
export default StatusInfo;


