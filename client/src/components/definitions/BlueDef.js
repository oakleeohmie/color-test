import React from 'react';
import './BlueDef.css';
import Button from '@material-ui/core/Button';
import LoopIcon from '@material-ui/icons/Loop';

function BlueDef() {
    return (
        <div className="blueSummary">
            <h2 className="blueTitle">This is out of the blue!</h2>
            <p className="blueDescription">Blues are highly demanding perfectionists. They strive to be the best they can be. Blues are highly analytical and can be judgemental, hard to please, worry-prone and unforgiving. But they can also be organized, intuitive, philosophical, and dependable. If you're a blue, you probably like to be autonomous, appreciated and understood. </p>
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


export default BlueDef;