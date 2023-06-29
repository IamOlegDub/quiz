import { Card } from '../../components/Card/Card';
import { RegularButton } from '../../components/RegularButton';
import { categories } from '../../data';
import styles from './HomePage.module.scss';

export const HomePage = ({ onStartQuiz }) => {
    return (
        <div className={styles.homePage}>
            <div className={styles.fixed}>
                <h1>Choose a quiz category</h1>
                <RegularButton
                    onStartQuiz={onStartQuiz}
                    buttonText="I'm lucky"
                />
            </div>
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
