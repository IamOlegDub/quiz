import { symConverter } from '../../assets/symConverter';
import { Frame } from '../Frame';
import styles from './Question.module.scss';

export const Question = ({ data }) => {
    const diffRate =
        data.difficulty === 'easy'
            ? 'Q'
            : data.difficulty === 'medium'
            ? 'QQ'
            : 'QQQ';
    const question = symConverter(data.question);
    return (
        <Frame stylesQuestion={styles.question}>
            <div className={styles.diffRate}>{diffRate}</div>
            {question}
        </Frame>
    );
};
