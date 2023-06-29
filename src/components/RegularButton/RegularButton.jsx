import styles from './RegularButton.module.scss';

export const RegularButton = ({ onStartQuiz = '', buttonText }) => {
    return (
        <button
            className={styles.luckButton}
            onClick={() => onStartQuiz && onStartQuiz('random', 'random')}
        >
            {buttonText}
        </button>
    );
};
