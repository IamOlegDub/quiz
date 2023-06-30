import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import { RegularButton } from '../../components/RegularButton';
import { categories } from '../../data';
import styles from './HomePage.module.scss';

export const HomePage = ({ onStartQuiz }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.homePage}>
            <div className={styles.fixed}>
                <h1>Choose a quiz category</h1>
                <RegularButton
                    onFunc={onStartQuiz}
                    buttonText="I'm lucky"
                    args={['random', 'random']}
                />
                <RegularButton
                    onFunc={() => {
                        navigate('/finish');
                    }}
                    buttonText='Results'
                    outlined='outlined'
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
