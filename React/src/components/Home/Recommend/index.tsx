import Item from "components/Item";

const Recommend = () => {
    const furnitureItems: Item[] = [
        {
            name: "Ghế sofa",
            price: 15000000,
            discount: 10,
            image: "/images/products/0f35c4be-e682-46b2-a816-2d019295db2d.jpg"
        },
        {
            name: "Bàn ăn",
            price: 8500000,
            discount: 15,
            image: "/images/products/0f35c4be-e682-46b2-a816-2d019295db2d.jpg"
        },
        {
            name: "Tủ quần áo",
            price: 12000000,
            discount: 20,
            image: "/images/products/0f35c4be-e682-46b2-a816-2d019295db2d.jpg"
        },
        {
            name: "Đèn trần",
            price: 2500000,
            discount: 5,
            image: "/images/products/0f35c4be-e682-46b2-a816-2d019295db2d.jpg"
        }
    ];
    return (
        <div
            className="max-w-1200 mx-auto py-16"
        >
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">Recommend for you</h2>
            <div
                className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6"
            >
                {
                    furnitureItems.map((item, index) => <Item key={index} item={item}/>)
                }

            </div>
        </div>
    );
};

export default Recommend;