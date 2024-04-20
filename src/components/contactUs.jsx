import im from '../assets/img/contact_bg_1.png';

export const ContactUs = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${im})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                minHeight: '100vh',
            }}
            className="bg-smoke space"
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="title-area mb-35 text-xl-start text-center">
                            <span className="sub-title">
                                <div className="icon-masking me-2">
                                    <span
                                        className="mask-icon"
                                        data-mask-src="assets/img/theme-img/title_shape_2.svg"
                                    ></span>
                                    <img
                                        src="assets/img/theme-img/title_shape_2.svg"
                                        alt="shape"
                                    />
                                </div>
                                contact with us!
                            </span>
                            <h2 className="sec-title">Have Any Questions?</h2>
                            <p className="sec-text">
                                Enthusiastically disintermediate one-to-one leadership via business e-commerce. Dramatically reintermediate compelling process improvements rather than empowered relationships.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-full max-w-md bg-customColor rounded-lg shadow-md p-6">
                                <form className="flex flex-wrap">
                                    <input
                                        type="text"
                                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                                        placeholder="Full Name"
                                    />
                                    <input
                                        type="email"
                                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                                        placeholder="Email"
                                    />
                                    <input
                                        type="number"
                                        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                                        placeholder="Phone Number"
                                    />
                                    <input
                                        type="text"
                                        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                                        placeholder="Purpose"
                                    />

                                    <textarea
                                        name="message"
                                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-full md:min-h-[100px] md:max-h-[100px] focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                        placeholder="Message"
                                    ></textarea>

                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
