import styles from './Frame.module.scss';
import cn from 'classnames';

export const Frame = ({
    children,
    stylesQuestion,
    stylesOption,
    stylesNextButton,
    stylesQuitButton,
}) => {
    return (
        <div
            className={cn(
                styles.frame,
                styles.skew,
                styles.glow,
                stylesQuestion,
                stylesOption,
                stylesNextButton,
                stylesQuitButton
            )}
        >
            <p>{children}</p>
        </div>
    );
};
