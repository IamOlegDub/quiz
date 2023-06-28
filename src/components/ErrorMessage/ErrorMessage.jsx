import styles from './ErrorMessage.module.scss';

export const ErrorMessage = ({ children }) => {
    return <div className={styles.errorMessage}>{children}</div>;
};
