import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { Chart } from 'react-google-charts';
import { InfoModal } from '../../components/InfoModal';
import { GameResult } from '../../components/GameResult/GameResult';
import { TotalResults } from '../../components/TotalResults/TotalResults';
import { FrameButton } from '../../components/FrameButton/FrameButton';
import { chartOptions } from '../../data';
import styles from './FinishPage.module.scss';

export const FinishPage = ({
    score,
    correct,
    time,
    setScore,
    setCorrect,
    infoData,
    loadData,
    setTime,
}) => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (time) {
            const newData = {
                score: infoData.score ? score + infoData.score : score,
                correct: infoData.correct
                    ? correct + infoData.correct
                    : correct,
                time: infoData.time ? time + infoData.time : time,
                games: infoData.games ? 1 + infoData.games : 1,
            };
            localStorage.setItem('newData', JSON.stringify(newData));
        }
    }, []);

    const onBackHome = () => {
        setScore(0);
        setCorrect(0);
        navigate('/');
        loadData();
        setTime('');
    };

    const onShowModal = () => {
        setShowModal(!showModal);
    };

    const timeConverter = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        const hours = ((minutes % 60) / 60).toFixed(0);
        return `${hours}h ${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`;
    };

    const onClearData = () => {
        console.log('works');
        setScore(0);
        setCorrect(0);
        setTime('');
        localStorage.removeItem('newData');
    };

    const totalScore = infoData.score + score || score;
    const totalCorrect = infoData.correct + correct || correct;
    const diffScore = (score / correct || 1).toFixed(2);
    const totalDiffScore = (totalScore / totalCorrect || 1).toFixed(2);
    const totalGames = !time ? infoData.games : infoData.games + 1 || 1;
    const answeringTime = timeConverter(time);

    const totalTime = !time ? infoData.time : infoData.time + time || time;
    const totalAnsweringTime = timeConverter(totalTime);
    const timePerGame = timeConverter(totalTime / totalGames);
    const scorePerGame = (totalScore / totalGames).toFixed(2);

    const chartData = [
        ['Answers', '% of all answers'],
        ['Correct answers', totalCorrect],
        ['Wrong answers', totalGames * 10 - totalCorrect],
    ];

    return (
        <div
            className={cn(styles.finishPage, {
                [styles.totalOnly]: !time,
            })}
        >
            <InfoModal
                onClose={() => setShowModal(false)}
                showModal={showModal}
            />
            {time && (
                <GameResult
                    time={time}
                    score={score}
                    answeringTime={answeringTime}
                    correct={correct}
                    diffScore={diffScore}
                    onShowModal={onShowModal}
                />
            )}
            {totalGames ? (
                <>
                    <TotalResults
                        totalScore={totalScore}
                        totalAnsweringTime={totalAnsweringTime}
                        totalCorrect={totalCorrect}
                        totalDiffScore={totalDiffScore}
                        totalGames={totalGames}
                        timePerGame={timePerGame}
                        scorePerGame={scorePerGame}
                    />
                    <div className={cn(styles.result, styles.chartWrapper)}>
                        <Chart
                            chartType='PieChart'
                            width='100%'
                            height='300px'
                            data={chartData}
                            options={chartOptions}
                        />
                    </div>
                </>
            ) : (
                <h2>No plays - no results:-)</h2>
            )}
            <div className={styles.buttons}>
                {totalGames && (
                    <FrameButton
                        onAction={onClearData}
                        name='Clear RESULTS'
                        buttonColor='hot'
                        position='center'
                    />
                )}

                <FrameButton
                    onAction={onBackHome}
                    name='Back Home'
                    buttonColor='happy'
                    position='center'
                />
            </div>
        </div>
    );
};
