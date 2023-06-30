import cn from 'classnames';
import styles from './Frame.module.scss';

export const Frame = ({
    children,
    stylesQuestion,
    stylesOption,
    stylesFrameButton,
    stylesModal,
}) => {
    return (
        <div
            className={cn(
                styles.frame,
                styles.skew,
                styles.glow,
                stylesQuestion,
                stylesOption,
                stylesFrameButton,
                stylesModal
            )}
        >
            <div className={styles.text} type='text'>
                {children}
            </div>
        </div>
    );
};
