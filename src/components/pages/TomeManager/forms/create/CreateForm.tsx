import "../Forms.css";
import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";

const CreateForm = ({ onBack }: { onBack: any }) => {
    const [targetPath, setTargetPath] = useState("");

    const handleBrowseButtonClick = () => {
        // @ts-ignore
        invoke("get_folder_location").then((path: string) => {
            setTargetPath(path);
        });
    };

    return (
        <>
            <button className="tertiaryButton" onClick={onBack}>⟵ Back</button>
            <div className="formRow">
                <p className="formTitle">
                    Create local tome
                </p>
            </div>

            <hr className="formDivider" />

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <div className="formRow">
                    <label>
                        <p className="formLabel">Tome Name</p>
                        <p className="subtext">Chose a name for your Tome</p>
                    </label>
                    <input className="formInput formRA" placeholder="Tome Name" />
                </div>

                <hr className="formDivider" />

                <div className="formRow">
                    <label>
                        <p className="formLabel">Browse</p>
                        <p className="subtext">Chose a save location for your new tome</p>
                        {targetPath && (
                            <p className="subtext">Selected Path: {targetPath}</p>
                        )}

                    </label>
                    <button type="button" className="secondaryButton formRA formButton" onClick={handleBrowseButtonClick}>Browse</button>
                </div>
                <div className="centerPrimaryButton">
                    <button className="primaryButton formButton">Create</button>
                </div>
            </form>
        </>
    );
};

export default CreateForm;