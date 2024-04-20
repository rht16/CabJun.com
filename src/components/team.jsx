import { TeamMember } from "./teamMember";

export const Team = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="mb-8 text-center max-w-lg">
                <h3 className="text-xl font-semibold">Great things in business are never done by one person; they are done by a team of people. Our team is hard at work bringing you the best.</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                <TeamMember name="Mohit" position="CTO" />
                <TeamMember name="Shishal" position="Finance" />
                <TeamMember name="Satush" position="COO" />
                <TeamMember name="Muraj" position="Sales" />
                <TeamMember name="Salash" position="COO" />
            </div>
        </div>
    );
};
