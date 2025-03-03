import "../Forms.css";
import {Component} from "react";

export class CreateForm extends Component<{ onBack: any }> {
    render() {
        let {onBack} = this.props;
        return (
            <>
                <button className="tertiaryButton" onClick={onBack}>⟵ Back</button>
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
                        <input className="formInput formRA" placeholder="Tome Name">
                        </input>
                    </div>

                    <hr className="formDivider"/>

                    <div className="formRow">
                        <label>
                            <p className="formLabel">Browse</p>
                            <p className="subtext">Chose a save location for your new tome</p>
                        </label>
                        <button className="secondaryButton formRA formButton">Browse</button>
                    </div>
                    <div className="centerPrimaryButton">
                        <button className="primaryButton formButton">Create</button>
                    </div>
                </form>


            </>


        )
    }
}

export default CreateForm;