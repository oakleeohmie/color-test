import React from 'react';
import './GreenDef.css';
import Button from '@material-ui/core/Button';
import LoopIcon from '@material-ui/icons/Loop';

function GreenDef() {
    return (
        <div className="greenSummary">
            <h2 className="greenTitle" >Do you have a green thumb too?</h2>
            <p className="greenDescription">Motivated by peace, greens will do anything to avoid confrontation. Greens are kind, considerate, patient and accepting. They are natural caretakers and peacemakers. When it comes to personal relationships, people with this personality type make loyal, supportive, and loving partners. Green's weaknesses may include indecisiveness, passiveness, oversensitivity and moodiness. Green's strengths may include being sympathetic, warm, communicative, sincere and peaceful. If you're a green, you probably like to help others, be validated, be accepted and be respected. </p>
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


export default GreenDef;