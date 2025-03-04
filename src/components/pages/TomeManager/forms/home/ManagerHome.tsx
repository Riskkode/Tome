import "../Forms.css";

interface HomeFormProps {
    onCreate: () => void;
}


export function HomeForm({ onCreate }: HomeFormProps) {
    return (
        <>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >

                    <div className="formRow">
                        <label>
                            <p className="formLabel">Create</p>
                            <p className="subtext">Create a new Tome</p>
                        </label>
                        <div className="formRA">
                            <button className="primaryButton formButton" onClick={ onCreate }>Create</button>
                        </div>
                    </div>

                    <hr className="formDivider"/>

                    <div className="formRow">
                        <label>
                        <p className="formLabel">Open</p>
                            <p className="subtext">Open an existing Tome</p>
                        </label>
                        <button className="secondaryButton formRA formButton">Browse</button>
                    </div>
                </form>
        </>

    )
}

export default HomeForm;