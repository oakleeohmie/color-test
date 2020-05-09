import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function Result(props) {
    return (
        <div>
            <div >
                <h1 className="quizResult">You are {props.quizResult}! </h1>
                <h6 className="clickDef"> What does being {props.quizResult} mean? Click below!</h6>
            </div>
            <div className="color-def">
                <Button onClick={e => { e.preventDefault(); window.location.href = '/blue' }} variant="primary" className="button">BLUE</Button>
                <Button onClick={e => { e.preventDefault(); window.location.href = '/green' }} variant="success" className="button">GREEN</Button>
                <Button onClick={e => { e.preventDefault(); window.location.href = '/yellow' }} variant="warning" className="button">YELLOW</Button>
                <Button onClick={e => { e.preventDefault(); window.location.href = '/red' }} variant="danger" className="button">RED</Button>
                <Button onClick={e => { e.preventDefault(); window.location.href = '/more' }} variant="dark" className="button">MORE THAN ONE</Button>
            </div>
        </div >
    );

}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
};

export default Result;	