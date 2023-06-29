import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import styles from './PlayPage.module.scss';
import { Frame } from '../../components/Layout/Frame';
import { useEffect, useState } from 'react';
import { ErrorMessage } from '../../components/ErrorMessage';

export const PlayPage = ({
    quizData,
    score,
    setScore,
    setCorrect,
    setTime,
}) => {
    const [options, setOptions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selected, setSelected] = useState();
    const [userError, setUserError] = useState(false);

    const navigate = useNavigate();

    const word = 'ABCD';

    const data = quizData.results && quizData.results[currentQuestion];

    useEffect(() => {
        setOptions(
            quizData.results &&
                onShuffle([...data.incorrect_answers, data.correct_answer])
        );
    }, [quizData.results, data]);

    const onQuit = () => {
        setScore(0);
        setCorrect(0);
        navigate('/');
    };

    const onShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
    };

    const onNextQuestion = () => {
        if (currentQuestion > 8) {
            navigate('/finish');
            setTime((prev) => Date.now() - prev);
        } else if (selected) {
            setCurrentQuestion(currentQuestion + 1);
            setSelected();
        } else setUserError('Please select an option');
    };

    const onSelect = (option) => {
        if (selected === option && selected === data.correct_answer)
            return 'selected';
        else if (selected === option && selected !== data.correct_answer)
            return 'wrong';
        else if (option === data.correct_answer) return 'selected';
    };

    const onCheck = (option) => {
        setSelected(option);
        if (option === data.correct_answer) {
            setScore(() => {
                if (data.difficulty === 'easy') return score + 1;
                if (data.difficulty === 'medium') return score + 2;
                if (data.difficulty === 'hard') return score + 3;
            });
            setCorrect((prev) => prev + 1);
        }
        setUserError(false);
    };

    const diffRate =
        data.difficulty === 'easy'
            ? 'Q'
            : data.difficulty === 'medium'
            ? 'QQ'
            : 'QQQ';

    return (
        <div className={styles.playPage}>
            <h2>{data.category}</h2>
            <div className={styles.info}>
                <h5>Question {currentQuestion + 1}:</h5>
                {userError && <ErrorMessage>{userError}</ErrorMessage>}
                <div className={styles.score}>Score: {score}</div>
            </div>
            <Frame stylesQuestion={styles.question}>
                <div className={styles.diffRate}>{diffRate}</div>
                {data.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
            </Frame>
            <div className={styles.options}>
                {options &&
                    options.map((option, i) => (
                        <button
                            key={option}
                            onClick={() => onCheck(option)}
                            disabled={selected}
                        >
                            <Frame
                                key={option}
                                stylesOption={cn(
                                    styles.option,
                                    styles[`${selected && onSelect(option)}`]
                                )}
                            >
                                <div>{word[i]}:</div>
                                <div>
                                    {option
                                        .replace(/&quot;/g, '"')
                                        .replace(/&#039;/g, "'")}
                                </div>
                            </Frame>
                        </button>
                    ))}
            </div>
            <div className={styles.buttons}>
                <div onClick={onQuit}>
                    <Frame stylesQuitButton={styles.quitButton}>Quit</Frame>
                </div>
                <div onClick={onNextQuestion}>
                    <Frame stylesNextButton={styles.nextButton}>
                        {currentQuestion > 8 ? 'Finish' : 'Next question'}
                    </Frame>
                </div>
            </div>
        </div>
    );
};
