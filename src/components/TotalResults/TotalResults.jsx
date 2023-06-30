import styles from './TotalResults.module.scss';

export const TotalResults = ({
    totalScore,
    totalAnsweringTime,
    totalCorrect,
    totalDiffScore,
    timePerGame,
    totalGames,
    scorePerGame,
}) => {
    return (
        <div className={styles.blockResults}>
            <h2 className={styles.total}>Total results:</h2>

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
            <div className={styles.result}>Time per game: {timePerGame}</div>
            <div className={styles.result}>
                Total questions: {totalGames * 10}
            </div>
            <div className={styles.result}>Score per game: {scorePerGame}</div>
            <div className={styles.result}>Total games: {totalGames}</div>
        </div>
    );
};
