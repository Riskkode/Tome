export function CreateNoteBookForm() {
    return (
        <div>
            <div className="formContainer">
                <button className="tertiaryButton">⟵ Back</button>
                <div className="formRow">
                    <p className="formTitle">
                        Create local tome
                    </p>

                </div>


                <hr className="formDivider"/>

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
                        <input className="formInput" placeholder="Tome Name">
                        </input>
                    </div>

                    <hr className="formDivider"/>

                    <div className="formRow">
                        <label>
                            <p className="formLabel">Browse</p>
                            <p className="subtext">Chose a save location for your new tome</p>
                        </label>
                        <button className="formInput secondaryButton">Browse</button>
                    </div>
                    <div className="centerPrimaryButton">
                        <button className="primaryButton">Create</button>
                    </div>
                </form>
            </div>


        </div>


    )
}

export default CreateNoteBookForm;