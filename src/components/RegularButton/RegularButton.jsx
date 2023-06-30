import cn from 'classnames';
import styles from './RegularButton.module.scss';

export const RegularButton = ({
    onFunc = '',
    buttonText,
    args = '',
    outlined,
}) => {
    return (
        <button
            className={cn(styles.luckButton, { [styles.outlined]: outlined })}
            onClick={() => onFunc && onFunc(...args)}
        >
            {buttonText}
        </button>
    );
};
