import React from "react";
import TopBar from "../components/TopBar";
import Chains from "../components/Chains";
import FirmCollections from "../components/FirmCollections";
import ItemsDisplay from "../components/ItemsDisplay";
import './UserLandingPage.css'
const UserLandingPage=()=>{
    return (
        <div>
            <TopBar/>
            <div>
                <Chains/>
                <FirmCollections/>
                <ItemsDisplay/>
                
            </div>
        </div>
    )
}
export default UserLandingPage;