import { useHref, useLocation, useNavigate } from 'react-router-dom';
import { Frame } from '../../components/Layout/Frame';
import styles from './FinishPage.module.scss';
import { useEffect, useState } from 'react';

export const FinishPage = ({
    score,
    correct,
    time,
    setScore,
    setCorrect,
    infoData,
    loadData,
    quizData,
}) => {
    const navigate = useNavigate();
    useEffect(() => {
        const newData = {
            score: infoData.score ? score + infoData.score : score,
            correct: infoData.correct ? correct + infoData.correct : correct,
            time: infoData.time ? time + infoData.time : time,
            games: infoData.games ? 1 + infoData.games : 1,
        };
        console.log('dataSaved');
        localStorage.setItem('newData', JSON.stringify(newData));
    }, []);

    const onBackHome = () => {
        setScore(0);
        setCorrect(0);
        navigate('/');
        loadData();
    };

    const timeConverter = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        const hours = ((minutes % 60) / 60).toFixed(0);
        return `${hours}h ${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`;
    };

    const totalScore = infoData.score + score || score;
    const totalCorrect = infoData.correct + correct || correct;
    const diffScore = (score / correct || 1).toFixed(2);
    const totalDiffScore = (totalScore / totalCorrect || 1).toFixed(2);
    const totalGames = infoData.games + 1 || 1;
    const answeringTime = timeConverter(time);
    const totalAnsweringTime = timeConverter(infoData.time + time || time);

    return (
        <div className={styles.finishPage}>
            {/* <Frame> */}
            <div className={styles.total}>Result:</div>

            <div className={styles.result}>Score: {score}</div>
            <div className={styles.result}>Time: {answeringTime}</div>
            <div className={styles.result}>Correct answers: {correct}</div>
            <div className={styles.result}>Difficulty score: {diffScore}</div>

            <div className={styles.total}>Total results:</div>

            <div className={styles.result}>Total score: {totalScore}</div>
            <div className={styles.result}>
                Total time: {totalAnsweringTime}
            </div>
            <div className={styles.result}>
                Total amount of correct answers: {totalCorrect}
            </div>
            <div className={styles.result}>
                Total difficulty score: {totalDiffScore}
            </div>
            <div className={styles.result}>Total games: {totalGames}</div>
            {/* </Frame> */}
            <button className={styles.home} onClick={onBackHome}>
                <Frame>Back to Home</Frame>
            </button>
        </div>
    );
};
