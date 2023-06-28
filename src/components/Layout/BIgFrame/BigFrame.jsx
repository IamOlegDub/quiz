import styles from './BigFrame.module.scss';

export const BigFrame = ({ children, width, height }) => {
    return (
        <div
            className={styles.bigFrame}
            style={{ width: width, height: height }}
        >
            {children}
        </div>
    );
};
