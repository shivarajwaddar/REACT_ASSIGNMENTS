
const ContactInfo = ({ employee }) => {
    const ContactDetail = ({ detailName, detail }) => {
        return (
            <div className="ContactDetailWrapper">
                <span className="ContactDetailName" >{detailName + " "}</span>
                <span className="ContactDetail">{detail}</span>
            </div>
        );
    };
    return <div className="ContactInfo">
        <ContactDetail
            detailName={"Email"}
            detail={employee.email}
        />
        <ContactDetail
            detailName={"Phone"}
            detail={employee.phone}
        />
        <ContactDetail
            detailName={"Appoingment"}
            detail={employee.appointmentedOn}
        />
    </div>
};
export default ContactInfo;