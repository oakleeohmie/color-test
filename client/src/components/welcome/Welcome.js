import React from 'react';
import Button from '@material-ui/core/Button';
import './Welcome.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Welcome() {
    return (
        <div className="welcome">
            <h2 className="title" >Color Personality Quiz</h2>
            <p className="description">Answer honestly.</p>
            <div className="startButton">
                <Button onClick={e => { e.preventDefault(); window.location.href = '/quiz' }}
                    variant="contained"
                    color="inherit"
                    size="large"
                >
                    START <ArrowForwardIcon />
                </Button>
            </div>
        </div >
    );
}


export default Welcome;