import user from '../assets/img/userGhost.avif'
import { Link } from "react-router-dom"; // Use react-router-dom's Link component instead of next/link
import linkdin from '../assets/img/linkedin-logo-footer.png'
import twitter from '../assets/img/twitter-logo-footer.png'
import facebook from '../assets/img/facebook-logo-footer.png'
import instagram from '../assets/img/instagram-logo-footer.png'
import whatsapp from '../assets/img/whatsappLogo.png'
import '../assets/css/footer.css'

export const TeamMember = (data) => {
    console.log('data', data)
    return (
        <div
            className="product-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-[#C7C9EC] flex flex-col items-center justify-center gap-3 transition-all duration-300 group mb-3 mx-auto"
        >
            <div
                className="absolute -left-[40%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150"
            >
                <div className="flex gap-1">
                    <svg
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="1"
                        fill="#5964ec"
                        viewBox="0 0 24 24"
                        // className="fill-[#191c42]-300 rotate-[24deg]"
                        height="200"
                        width="200"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        ></polygon>
                    </svg>
                </div>
            </div>
            <div
                className="absolute rounded-full bg-[#191c42] z-20 left-1/2 top-[40%] h-[200%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"
            ></div>

            <div className="img w-[180px] aspect-square bg-gray-100 z-40 rounded-md">
                <img src={user} alt="user" />
            </div>
            <div className="text-white text-center z-50 mb-[-20px]">
                <p className="font-semibold text-xs font-serif mb-0">{data.position}</p>
                <p className="font-bold ">{data.name}</p>
            </div>
            <div className="flex flex-col items-center mt-0  z-50 h-1">
                <div className="flex gap-2 md:gap-6">
                    <Link to={data.linkdin}>
                        <img
                            className="h-3 w-4"
                            src={linkdin}
                            alt="LinkedIn Logo"
                        />
                    </Link>
                    <Link to={data.twitter}>
                        <img
                            className="h-3 w-4"
                            src={twitter}
                            alt="Twitter Logo"
                        />
                    </Link>
                    <Link to={data.facebook}>
                        <img
                            className="h-3 w-4"
                            src={facebook}
                            alt="Facebook Logo"
                        />
                    </Link>
                    <Link to={data.instagram}>
                        <img
                            className="h-3 w-4"
                            src={instagram}
                            alt="Instagram Logo"
                        />
                    </Link>
                    <Link to={data.whatsapp}>
                        <img
                            className="h-3 w-4"
                            src={whatsapp}
                            alt="WhatsApp Logo"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

