import cn from 'classnames';
import { Frame } from '../Layout/Frame';
import styles from './InfoModal.module.scss';
import ReactDOM from 'react-dom';

const Overlay = ({ showModal, onClose }) => {
    return (
        <div
            className={cn(styles.overlay, {
                [styles.showed]: showModal === true,
            })}
            onClick={() => onClose()}
        >
            <div className={styles.infoModal}>
                <Frame stylesModal={styles.modal}>
                    <p>
                        This indicator shows the level of difficulty of the
                        questions answered by the player. The closer it is to 3,
                        the more difficult where questions the player answered.
                        Accordingly, closer to 1 - easier.
                    </p>
                </Frame>
            </div>
        </div>
    );
};

export const InfoModal = ({ showModal, onClose }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Overlay onClose={onClose} showModal={showModal} />,
                document.getElementById('infoModal')
            )}
        </>
    );
};
