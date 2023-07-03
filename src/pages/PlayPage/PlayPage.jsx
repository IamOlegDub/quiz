import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info } from '../../components/Info/Info';
import { Question } from '../../components/Question/Question';
import { Option } from '../../components/Option/Option';
import { FrameButton } from '../../components/FrameButton/FrameButton';
import { onShuffle } from '../../assets/onShuffle';
import { getCategories } from '../../assets/getCategories';
import styles from './PlayPage.module.scss';

export const PlayPage = ({
    quizData,
    score,
    setScore,
    setCorrect,
    setTime,
    setBestCategories,
    loadedBestCategories,
    setCorrectCategories,
    loadedCorrectCategories,
}) => {
    const [options, setOptions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selected, setSelected] = useState();
    const [userError, setUserError] = useState(false);
    const [correctData, setCorrectData] = useState([]);

    const navigate = useNavigate();

    const data = quizData && quizData.results[currentQuestion];

    useEffect(() => {
        setOptions(
            quizData &&
                onShuffle([...data.incorrect_answers, data.correct_answer])
        );
    }, [quizData, data]);

    const onQuit = () => {
        setScore(0);
        setCorrect(0);
        setTime('');
        navigate('/');
        setBestCategories({});
    };

    const onNextQuestion = () => {
        if (currentQuestion > 8) {
            setTime((prev) => Date.now() - prev);
            setCorrectCategories(
                getCategories(correctData, loadedCorrectCategories)
            );
            setBestCategories(
                getCategories(quizData.results, loadedBestCategories)
            );
            navigate('/finish');
        } else if (selected) {
            setCurrentQuestion(currentQuestion + 1);
            setSelected();
        } else setUserError('Please select an option');
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
            setCorrectData((prev) => [...prev, data]);
        }
        setUserError(false);
    };

    return (
        <div className={styles.playPage}>
            <h2>{data.category}</h2>
            <Info
                score={score}
                userError={userError}
                currentQuestion={currentQuestion}
            />
            <Question data={data} />
            <div className={styles.options}>
                {options &&
                    options.map((option, i) => (
                        <Option
                            key={option}
                            option={option}
                            i={i}
                            data={data}
                            onCheck={onCheck}
                            selected={selected}
                        />
                    ))}
            </div>
            <div className={styles.buttons}>
                <FrameButton onAction={onQuit} name='Quit' buttonColor='hot' />
                <FrameButton
                    onAction={onNextQuestion}
                    name={currentQuestion > 8 ? 'Finish' : 'Next question'}
                    buttonColor='light'
                />
            </div>
        </div>
    );
};
