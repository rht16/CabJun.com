import  '../assets/css/serviceCard.css'

const ServiceCard = (data) => {
    return (
        <div className="card" >
            <div className="header">
                <span className="title">{data.title}</span>
                {/* <span className="price">Free</span> */}
            </div>
            <p className="desc">{data.dis}</p>
            
            <button type="button" className="action">Book a ride</button>
        </div>
    );
};

export default ServiceCard;
