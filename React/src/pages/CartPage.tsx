import Cart from "components/Cart/elements/Cart";
import Breadcrumb from "components/Breadcrumb";

const HomePage = () => {


    return (
        <div
            className="max-w-1200 mx-auto"
        >
            <Breadcrumb
                items={
                    [
                        {
                            label: "Cart",
                            to: "/cart"
                        }
                    ]
                }
            />
            <Cart/>
        </div>
    );
};

export default HomePage;