import ServiceCard from "./service";

export const SCards = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                <ServiceCard title="Ride Booking" dis='You can book rides through our Mobile app by specifying their pickup and drop-off location' />
                <ServiceCard title="Vehicle Options" dis='Variety of vehicle options to suit different needs and preferences, such as standard sedans, SUVs, luxury cars, and even options for larger groups.' />
                <ServiceCard title="Real-Time Tracking" dis='You can track the location of your assigned vehicle in real-time through the app, providing transparency and peace of mind.' />
                <ServiceCard title="Fare Estimation" dis='We provide fare estimates upfront, allowing users to know the approximate cost of their ride before booking.'/>
<ServiceCard title='Cashless Payments' dis='YOu can make payments for your rides electronically through the app using credit/debit cards, mobile wallets, or other digital payment methods.' />
                <ServiceCard title="Reviews and Ratings" dis='You can rate the drivers and provide feedback about their ride experience, helping to maintain service quality and accountability. ' />
                <ServiceCard title='Loyalty Programs' dis='We offer loyalty programs or reward schemes for frequent users, providing incentives for continued usage.' />

                {/* Add more ServiceCard components as needed */}
            </div>
        </div>
    );
};
