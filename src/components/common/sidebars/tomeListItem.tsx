import {Tooltip} from 'react-tooltip';

import './library/LibrarySidebar.css';
interface tomeListItemProps {
    tomeName: string;
    tomePath: string;
}


function tomeListItem({tomeName, tomePath}: tomeListItemProps) {

    let pathClamped = clampText(tomePath, 30);
    const uniqueId = `tooltip-${tomeName.replace(/\s+/g, '-')}`;

    return (
        <>
            <a className="listItem secondaryButton" id={uniqueId}>
                <div>
                    <p className="formLabel">{tomeName}</p>
                    <p className="subtext">{pathClamped}</p>
                </div>
                <a className="tertiaryButton formRA listDetails">...</a>
                <Tooltip className="formItemTooltip"  anchorSelect={`#${uniqueId}`} place="right">{tomePath}</Tooltip>
            </a>

        </>
    )
}



function clampText(text: string, maxLength: number)   {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}


export default tomeListItem;
