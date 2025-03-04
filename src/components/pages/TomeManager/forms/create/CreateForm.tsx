import "../Forms.css";
import { invoke } from "@tauri-apps/api/core";
import { useState, useRef } from "react";

const CreateForm = ({ onBack }: { onBack: any }) => {
    const [targetPath, setTargetPath] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);


    const handleBrowseButtonClick = () => {
        setIsButtonDisabled(true);
        // @ts-ignore
        invoke("get_folder_location").then((path: string) => {
            if (!path) {
                setIsButtonDisabled(false);
                return;
            }
            setTargetPath(path);
            setIsButtonDisabled(false);
        });
    };

    const clearState = () => {
        setTargetPath("");
        setIsButtonDisabled(false);
    };

    const handleBackButtonClick = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
        clearState();
        onBack();
    }

    return (
        <>
            <button className="tertiaryButton" onClick={handleBackButtonClick}>⟵ Back</button>
            <div className="formRow">
                <p className="formTitle">
                    Create local tome
                </p>
            </div>

            <hr className="formDivider" />

            <form
                ref={formRef}
                onSubmit={(e) => {
                    e.preventDefault();
                    if (formRef.current) {
                        formRef.current.reset();
                    }
                    clearState();
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
                    <button type="button" className="secondaryButton formRA formButton" disabled={isButtonDisabled} onClick={handleBrowseButtonClick}>Browse</button>
                </div>
                <div className="centerPrimaryButton">
                    <button type="submit" className="primaryButton formButton" disabled={isButtonDisabled}>Create</button>
                </div>
            </form>
        </>
    );
};

export default CreateForm;