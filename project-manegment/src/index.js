import  ReactDOM  from "react-dom";
import App from "./App";

import './index.css';
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./Companents/Views/Acoung/Context/ContextProvider";



ReactDOM.render(
    <ContextProvider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </ContextProvider>
    , document.getElementById("root"))