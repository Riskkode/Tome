import "./LibrarySidebar.css";
import TomeListItem from "../tomeListItem.tsx";

export function LibrarySidebar() {



    return(
        <>
            <div className="librarySidebar">
                <TomeListItem tomeName="My First Tome" tomePath="C:/Documents/Things/Stuff/Tomes/MyFirstTome"/>
                <TomeListItem tomeName="TomeTwo" tomePath="C:/Documents/Things/S"/>
            </div>
        </>
    )
}

export default LibrarySidebar