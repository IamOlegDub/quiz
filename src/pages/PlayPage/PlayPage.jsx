import { useNavigate, useParams } from 'react-router-dom';
import cn from 'classnames';
import styles from './PlayPage.module.scss';
import { Frame } from '../../components/Layout/Frame';
import { useEffect, useState } from 'react';

export const PlayPage = ({ quizData }) => {
    const [options, setOptions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selected, setSelected] = useState();
    const [userError, setUserError] = useState(false);
    const [score, setScore] = useState(0);
    const params = useParams();

    const navigate = useNavigate();

    const data = quizData.results && quizData.results[currentQuestion];

    useEffect(() => {
        setOptions(
            quizData.results &&
                handleShuffle([...data.incorrect_answers, data.correct_answer])
        );
    }, [quizData.results, data]);

    const onQuit = () => {
        setScore(0);
        navigate('/');
    };

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
    };
    const word = 'ABCD';
    console.log(options);

    const onNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
        setSelected();
    };

    const onSelect = (option) => {
        if (selected === option && selected === data.correct_answer)
            return 'select';
        else if (selected === option && selected !== data.correct_answer)
            return 'wrong';
        else if (option === data.correct_answer) return 'select';
    };

    const onCheck = (option) => {
        setSelected(option);
        if (option === data.correct_answer) setScore(score + 1);
        setUserError(false);
    };

    return (
        <div className={styles.playPage}>
            <h2>{params.id}</h2>
            <h5>Question {currentQuestion + 1}:</h5>
            <div>{score}</div>
            <Frame stylesQuestion={styles.question}>
                {data.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
            </Frame>
            <div className={styles.options}>
                {options &&
                    options.map((option, i) => (
                        <div onClick={() => onCheck(option)}>
                            <Frame
                                key={option}
                                stylesOption={cn(
                                    styles.option,
                                    styles[`${selected && onSelect(option)}`]
                                )}
                            >
                                <div>{word[i]}:</div>
                                <div>{option}</div>
                            </Frame>
                        </div>
                    ))}
            </div>
            <div className={styles.buttons}>
                <div onClick={onQuit}>
                    <Frame stylesQuitButton={styles.quitButton}>Quit</Frame>
                </div>
                <div onClick={onNextQuestion}>
                    <Frame stylesNextButton={styles.nextButton}>
                        Next question
                    </Frame>
                </div>
            </div>
        </div>
    );
};
