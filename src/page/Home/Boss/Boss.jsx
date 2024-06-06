import logo from '../../../assets/home/chef-service.jpg'
const Boss = () => {
    return (
        <div className='mt-20'>
                <img src={logo} alt="" />
            <div className="font-mono lg:w-[600px] lg:h-[200px] py-8 px-20 bg-white text-center text-black lg:relative lg:bottom-[280px] mx-auto">
                <h2 className="text-4xl">Bistro Boss</h2>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Boss;