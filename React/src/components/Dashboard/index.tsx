import OrderBar from "components/Dashboard/elements/OrderBar";
import OrderStatistics from "components/Dashboard/elements/OrderStatistics";


const Dashboard = () => {
    return (
        <div className="flex gap-5">
            <div className="grow">
                <OrderBar/>
            </div>
            <OrderStatistics/>
        </div>
    );
};

export default Dashboard;