import "styles/main.css"
import AppRouters from "routers";
import {Toaster} from "sonner";
import {Provider} from "react-redux";
import {store} from "contexts/root";

const App = () => {
    return (
        <Provider store={store}>
            <AppRouters/>
            <Toaster
                position="bottom-right"
                richColors={false}
                duration={3000}
            />
        </Provider>
    );
};

export default App;