import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import FooterClassCard from "./FooterClassCard";


const Footer = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    const first3Courses = courses.slice(0, 3);
    return (
        <footer className="relative mt-16" style={{
            backgroundImage: "url(" + "https://i.ibb.co.com/NF6TD07/Timer-Section-background.png" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',

        }}>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="grid grid-cols-3 text-white p-10 relative max-w-screen-lg mx-auto  gap-32 items-center" >
                {/* Column 1 */}
                <div className="">
                    <div>
                        <img src="https://i.ibb.co.com/L8DNcxJ/Logo-2.png" alt="logo" className="w-28" />
                        <p className="w-56 mb-4">Our Cooking School features a long and proud history of more than 100 years. Founded at the end of the XIXth century.</p>

                    </div>
                    {/* contacts info */}
                    <div className="w-80">
                        <div className="flex items-center gap-2  mb-2">
                            <div>
                                <FaMapMarkerAlt />
                            </div>
                            <div className="">
                                <p>House 35 Road 11, Sector 04, Uttara, Dhaka</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div>
                                    <FaPhone />
                                </div>
                                <div>
                                    <p>+880-1739104635</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <MdEmail />
                                </div>
                                <div>
                                    <p>smbmunna@gmail.com</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                {/* Column 2 */}
                <div>
                    <h6 className="text-lg font-semibold text-white">Popular Courses</h6>
                    <div>
                        {
                            first3Courses.map(course => <FooterClassCard key={course.id} cls={course} />)
                        }
                    </div>
                </div>
                {/* Column 3 */}
                <div>
                    <nav className="grid grid-cols-1 mb-8">
                        <h6 className="text-lg font-semibold text-white mb-2">Explore</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                    </nav>
                    <nav className=" mb-8">

                        <h6 className="text-lg font-semibold text-white mb-2">Find Us On</h6>
                        <div className="grid grid-flow-col gap-4  mb-4">
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </a>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </a>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                        </div>
                    </nav>

                    <div>
                        <h6 className="text-lg font-semibold text-white mb-2">Send Us Email</h6>
                        <div className="join">
                            <input className="input input-bordered join-item" placeholder="Your Message" />
                            <button className="btn bg-[#fe3f00] ">Send Mail</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer footer-center bg-black text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>

                </aside>
            </div>
        </footer>
    );
};

export default Footer;