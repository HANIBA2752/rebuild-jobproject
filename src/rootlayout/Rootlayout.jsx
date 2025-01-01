import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar";
import '/src/rootlayout/Rootlayout.css'

export default function Rootlayout() {

    return (
        <div>
            <div className="fixed">
                {/* <Navbar/> */}
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>   
    );
}
