import { Link, useParams } from 'react-router-dom';
import styles from './Page404.module.scss';

export const Page404 = () => {
    return (
        <div className={styles.page404}>
            <h2>This page was not found</h2>
            <Link to='/'>Back to Home</Link>
        </div>
    );
};
