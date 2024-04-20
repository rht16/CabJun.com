import { Footer } from './footer';
import { NavBar } from './navbar';

export const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* NavBar at the top */}
            <NavBar />

            {/* Main content in the middle */}
            <main className="flex-grow">
                {children} {/* This will render the child components passed to Layout */}
            </main>

            {/* Footer at the bottom */}
            <Footer />
        </div>
    );
};
