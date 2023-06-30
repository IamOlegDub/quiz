import { ErrorMessage } from '../ErrorMessage';
import styles from './Info.module.scss';

export const Info = ({ userError, score, currentQuestion }) => {
    return (
        <div className={styles.info}>
            <h5>Question {currentQuestion + 1}</h5>
            {userError && <ErrorMessage>{userError}</ErrorMessage>}
            <div className={styles.score}>Score: {score}</div>
        </div>
    );
};
