import React from 'react';
import './RedDef.css';
import Button from '@material-ui/core/Button';
import LoopIcon from '@material-ui/icons/Loop';

function RedDef() {
    return (
        <div className="redSummary">
            <h2 className="redTitle" >Roll out the red carpet!</h2>
            <p className="redDescription">Reds are the power wielders of the world. Reds use logic, vision and determination. From a Red perspective, emotion has nothing to do with completing tasks. Reds are action-oriented, assertive, confident, decisive, determined, independent, logical, proactive, and task-dominant. Reds can be controlling, insensitive, aggressive and impatient. Reds can also be very focused, pragmatic, disciplined, and responsible. If you're a red, you probably like to be right, be respected, be a leader and be productive.</p>
            <div className="takeAgainButton">
                <Button onClick={e => { e.preventDefault(); window.location.href = '/quiz' }}
                    variant="contained"
                    color="inherit"
                    size="large"
                >
                    TAKE AGAIN  <LoopIcon />
                </Button>
            </div>
        </div >
    );
}


export default RedDef;