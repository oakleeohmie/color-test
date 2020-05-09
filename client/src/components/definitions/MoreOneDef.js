import React from 'react';
import './MoreOneDef.css'
import Button from '@material-ui/core/Button';
import LoopIcon from '@material-ui/icons/Loop';

function MoreDef() {
    return (
        <div className="moreSummary">
            <h2 className="moreTitle">Well this is awkward...</h2>
            <p className="moreDescription">We know this is lame, but unfortunately our quiz isn't accurate enough to decipher between somebody's personality that resonates with more than one color. Come back later and try again!</p>
            <div className="takeAgainButton">
                <Button onClick={e => { e.preventDefault(); window.location.href = '/quiz' }}
                    variant="contained"
                    color="inherit"
                    size="large"
                >
                    TAKE AGAIN <LoopIcon />
                </Button>
            </div>
        </div >
    );
}


export default MoreDef;