import cn from 'classnames';
import styles from './GameResult.module.scss';

export const GameResult = ({
    time,
    score,
    answeringTime,
    correct,
    diffScore,
    onShowModal,
}) => {
    return (
        <div
            className={cn(styles.blockResult, {
                [styles.totalOnly]: !time,
            })}
        >
            <h2 className={styles.total}>Result:</h2>

            <div className={styles.result}>Score: {score}</div>
            <div className={styles.result}>Time: {answeringTime}</div>
            <div className={styles.result}>Correct answers: {correct}</div>
            <div className={styles.result}>
                <div className={styles.diffScore}>
                    Difficulty score: {diffScore}
                    <span onClick={() => onShowModal()} className={styles.i}>
                        i
                    </span>
                </div>
            </div>
        </div>
    );
};
