import styles from './Spinner.module.scss';

export const Spinner = () => {
    let items = [];
    for (let i = 0; i < 9; i++) {
        items.push(<div key={i}></div>);
    }
    return (
        <div className={styles.container}>
            <div className={styles['lds-grid']}>{items}</div>
        </div>
    );
};
