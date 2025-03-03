import TomeLogo from "../../common/logo/TomeLogo.tsx";
import CreateForm from "./forms/create/CreateForm.tsx";
import LibrarySidebar from "../../common/sidebars/library/LibrarySidebar.tsx";
import HomeForm from "./forms/home/ManagerHome.tsx";

import React, { useState } from "react";

import "./TomeManager.css";

function tomeManager() {

    const [showCreateForm, setShowCreateForm] = useState(false);

    const handleCreateButtonClick = () => {
        setShowCreateForm(true);
    }

    const handleBackButtonClick = () => {
        setShowCreateForm(false);
    }







    return (
        <>
            <div className="ManagerBase">
                <div className="ManagerBaseSidebar">
                    <LibrarySidebar/>
                </div>
                <div className="ManagerBaseContent">
                    <TomeLogo/>
                    <div className="formContainer">
                        <div className={`form main ${showCreateForm ? 'slide-out' : 'slide-in'}`}>
                            <HomeForm onCreate={handleCreateButtonClick}/>
                        </div>
                        <div className={`form secondary ${showCreateForm ? 'slide-in' : 'slide-out'}`}>
                            <CreateForm onBack={handleBackButtonClick}/>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default tomeManager;