import OrderBar from "components/Dashboard/elements/OrderBar";
import OrderStatistics from "components/Dashboard/elements/OrderStatistics";


const Dashboard = () => {
    return (
        <div className="space-y-5">
            <OrderStatistics/>
            <OrderBar/>
        </div>
    );
};

export default Dashboard;