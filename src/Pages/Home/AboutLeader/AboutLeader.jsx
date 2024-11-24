import leader from '../../../assets/Home/Leader.jpg'
const AboutLeader = () => {
    return (
        <div>
            <div className='grid grid-cols-2 items-center gap-4'>
                <div>
                    <h1 className='font-bold text-3xl mb-2'>About Our Leader</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corporis necessitatibus nemo dolore. Voluptatum repellendus maiores, ratione rerum dignissimos nam? Dicta dolorem magnam obcaecati qui quaerat beatae porro in sunt amet inventore ipsa quam nostrum vel quasi eum, molestias quae! Veritatis facere quaerat dolor sit cumque quidem omnis incidunt architecto error explicabo, qui facilis delectus temporibus modi nisi, cum accusamus.</p>
                    <ul className='mt-4 text-gray-500'>
                        <li>Filet mignon tri-tip pig meatloaf jerky</li>
                        <li>Frankfurter turkey pork belly brisket kevin</li>
                        <li>Pork loin landjaeger t-bone shoulde</li>
                    </ul>
                </div>
                <div>
                    <img src={leader} alt="leader-img" />
                </div>
            </div>
        </div>
    );
};

export default AboutLeader;