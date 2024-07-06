import MainLayout from "layouts/MainLayout";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<MainLayout/>}>
                    <Route path="*" element={<HomePage/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="register" element={<RegisterPage/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;