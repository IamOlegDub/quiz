import { Card } from '../../components/Card/Card';
import { categories } from '../../data';
import styles from './HomePage.module.scss';

export const HomePage = ({ onStartQuiz }) => {
    return (
        <div className={styles.homePage}>
            <h1>Choose a quiz category</h1>
            <ul>
                {categories.map((category) => (
                    <Card
                        key={category.key}
                        category={category}
                        onStartQuiz={onStartQuiz}
                    ></Card>
                ))}
            </ul>
        </div>
    );
};
