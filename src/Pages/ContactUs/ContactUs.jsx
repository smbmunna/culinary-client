

const ContactUs = () => {
    return (
        <div className="pt-20">
            {/* form */}
            <div className="grid gap-4 w-1/2 mx-auto">
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
        </div>
    );
};

export default ContactUs;