import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { Chart } from 'react-google-charts';
import { InfoModal } from '../../components/InfoModal';
import { GameResult } from '../../components/GameResult/GameResult';
import { TotalResults } from '../../components/TotalResults/TotalResults';
import { FrameButton } from '../../components/FrameButton/FrameButton';
import { catCharOptions, chartOptions } from '../../data';
import { merge } from '../../assets/merge';
import { timeConverter } from '../../assets/timeConverter';
import styles from './FinishPage.module.scss';

export const FinishPage = ({
    score,
    setScore,
    correct,
    setCorrect,
    time,
    infoData,
    setInfoData,
    loadData,
    setTime,
    bestCategories,
    correctCategories,
    setLoadedBestCategories,
    setLoadedCorrectCategories,
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
            localStorage.setItem(
                'bestAndCorrectCategories',
                JSON.stringify({
                    bestCategories: bestCategories,
                    correctCategories: correctCategories,
                })
            );
        }
    }, []);

    const correctCategoriesChartOptions = merge(
        Object.entries(bestCategories),
        correctCategories
    );

    const dataOld = [
        ['Category', 'Played times'],
        ...Object.entries(bestCategories),
    ];
    const dataNew = [
        ['Category', 'Correct answers'],
        ...correctCategoriesChartOptions,
    ];
    const categoryChartData = {
        old: dataOld,
        new: dataNew,
    };

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

    const onClearData = () => {
        setScore(0);
        setCorrect(0);
        setTime('');
        localStorage.removeItem('newData');
        localStorage.removeItem('bestAndCorrectCategories');
        setInfoData('');
        setLoadedBestCategories({});
        setLoadedCorrectCategories({});
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
                    <div className={cn(styles.result, styles.catChart)}>
                        <Chart
                            chartType='ColumnChart'
                            width='100%'
                            height='500px'
                            diffdata={categoryChartData}
                            options={catCharOptions}
                        />
                        <div className={styles.chartLabel}>
                            <div className={styles.correctLabel}>
                                Correct answers
                            </div>
                            <div className={styles.totalLabel}>
                                Played times
                            </div>
                        </div>
                    </div>
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
