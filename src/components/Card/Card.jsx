import cn from 'classnames';
import { difficulties } from '../../data';
import styles from './Card.module.scss';

export const Card = ({ category, onStartQuiz }) => {
    return (
        <li className={cn(styles.card, styles.skew, styles.glow)}>
            <div className={styles.content}>
                <h2>Q</h2>
                <h3>{category.title}</h3>
                <p>10 questions about {category.title}</p>
                {difficulties.map((diff) => (
                    <button
                        key={diff}
                        onClick={() => onStartQuiz(category, diff)}
                    >
                        {diff}
                    </button>
                ))}
            </div>
        </li>
    );
};
