import cn from 'classnames';
import { Frame } from '../Frame/Frame';
import styles from './FrameButton.module.scss';

export const FrameButton = ({ onAction, name, buttonColor }) => {
    return (
        <button onClick={onAction}>
            <Frame
                stylesFrameButton={cn(styles.frameButton, {
                    [styles.hot]: buttonColor === 'hot',
                    [styles.light]: buttonColor === 'light',
                    [styles.happy]: buttonColor === 'happy',
                })}
            >
                {name}
            </Frame>
        </button>
    );
};
