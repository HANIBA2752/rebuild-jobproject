import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar";

export default function Rootlayout() {
    return (
        <div className="">
            <Navbar/>
            <div>
                <Outlet></Outlet>
            </div>
        </div>   
    );
}
