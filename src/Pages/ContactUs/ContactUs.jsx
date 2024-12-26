import { Map, Marker } from "pigeon-maps";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const ContactUs = () => {
    return (
        <div className="pt-20 grid grid-cols-1 md:grid-cols-2">
            {/* form */}
            <div className="grid gap-4 w-1/2 mx-auto md:w-3/4">
                <label className="input input-bordered flex items-center gap-2">
                    Name
                    <input type="text" className="grow" placeholder="Daisy" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Email
                    <input type="text" className="grow" placeholder="daisy@site.com" />
                </label>
                <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>

                <button className="bg-[#fe3f00] text-white px-8 py-2 text-lg hover:bg-black" >Send Message</button>
            </div>
            {/* map and location */}
            <div className="mt-8 md:mt-0 w-1/2 mx-auto md:w-2/3">
                <div className="mb-8 md:mb-0">
                    <Map height={300} defaultCenter={[23.815777805337525, 90.41691067949965]} defaultZoom={11}>
                        <Marker width={50} anchor={[23.815777805337525, 90.41691067949965]} />
                    </Map>
                </div>
                <div className="mt-8">
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
            </div>
        </div>
    );
};

export default ContactUs;