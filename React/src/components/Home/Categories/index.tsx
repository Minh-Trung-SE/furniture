const Categories = () => {
    return (
        <div className="max-w-1200 mx-auto pb-16">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">

                <div className="relative group rounded-sm overflow-hidden">
                    <img
                        src="/images/category/category-1.jpg"
                        className="w-full"
                        alt="category"

                    />
                    <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white
                    font-roboto font-medium tracking-wide transition">
                        Bedroom
                    </a>
                </div>

                <div className="relative group rounded-sm overflow-hidden">
                    <img
                        src="/images/category/category-5.jpg"
                        className="w-full"
                        alt="category"
                    />
                    <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white
                    font-roboto font-medium tracking-wide transition">
                        Sofa
                    </a>
                </div>

                <div className="relative group rounded-sm overflow-hidden">
                    <img src="/images/category/category-3.jpg" className="w-full"/>
                    <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white
                    font-roboto font-medium tracking-wide transition">
                        Office
                    </a>
                </div>

                <div className="relative group rounded-sm overflow-hidden">
                    <img src="/images/category/category-4.jpg" className="w-full"/>
                    <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white
                    font-roboto font-medium tracking-wide transition">
                        Outdoor
                    </a>
                </div>

                <div className="relative group rounded-sm overflow-hidden">
                    <img src="/images/category/category-2.jpg" className="w-full"/>
                    <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white
                    font-roboto font-medium tracking-wide transition">
                        Mattress
                    </a>
                </div>

                <div className="relative group rounded-sm overflow-hidden">
                    <img src="/images/category/category-6.jpg" className="w-full"/>
                    <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white
                        font-roboto font-medium tracking-wide transition">
                        Dinings
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Categories;