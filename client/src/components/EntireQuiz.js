import React, { Component } from 'react';
import update from 'react-addons-update';
import colorQuestions from '../api/colorQuestions';
import Quiz from '../components/quiz/Quiz';
import Result from '../components/result/Result';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class EntireQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            answersCount: {
                blue: 0,
                yellow: 0,
                green: 0,
                red: 0,
            },
            result: ''
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

    componentWillMount() {
        const shuffledAnswerOptions = colorQuestions.map((question) => this.shuffleArray(question.answers));
        this.setState({
            question: colorQuestions[0].question,
            answerOptions: shuffledAnswerOptions[0]
        });
    }

    shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);

        if (this.state.questionId < colorQuestions.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }
    }

    setUserAnswer(answer) {
        const updatedAnswersCount = update(this.state.answersCount, {
            [answer]: { $apply: (currentValue) => currentValue + 1 }
        });

        this.setState({
            answersCount: updatedAnswersCount,
            answer: answer
        });
    }

    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            counter: counter,
            questionId: questionId,
            question: colorQuestions[counter].question,
            answerOptions: colorQuestions[counter].answers,
            answer: ''
        });
    }

    getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
        const maxAnswerCount = Math.max.apply(null, answersCountValues);

        return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
    }

    setResults(result) {
        if (result.length === 1) {
            this.setState({ result: result[0] });
        } else {
            this.setState({ result: 'more than one color' });
        }
    }

    renderQuiz() {
        return (
            <div>
                <Quiz
                    answer={this.state.answer}
                    answerOptions={this.state.answerOptions}
                    questionId={this.state.questionId}
                    question={this.state.question}
                    questionTotal={colorQuestions.length}
                    onAnswerSelected={this.handleAnswerSelected}
                />
            </div>
        );
    }

    renderResult() {
        return (
            <Result quizResult={this.state.result} />
        );
    }

    render() {
        return (
            <div>

                <div className="App">
                    {this.state.result ? this.renderResult() : this.renderQuiz()}
                </div>
            </div>
        );
    }

}

export default EntireQuiz;