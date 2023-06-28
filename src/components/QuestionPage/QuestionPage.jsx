import { BigFrame } from '../Layout/BIgFrame/BigFrame';
import { Variant } from '../Layout/VariantFrame/Variant';
import styles from './QuestionPage.module.scss';

export const QuestionPage = () => {
    return (
        <div className={styles.questionPage}>
            <BigFrame>
                Vector quiz questions test menu choice for trivia game Vector
                quiz questions test menu choice for trivia game Vector quiz
                questions test menu choice for trivia game Vector quiz questions
                test menu choice for trivia game Vector quiz questions test menu
                choice for trivia game Vector quiz questions test menu choice
                for trivia game Vector quiz questions test menu choice for
                trivia game Vector quiz questions test menu choice for trivia
                game Vector quiz questions test menu choice for trivia game
                Vector quiz questions test menu choice for trivia game Vector
                quiz questions test menu choice for trivia game
            </BigFrame>
            <div className={styles.variants}>
                <Variant>А. Good</Variant>
                <Variant>B. Bad</Variant>
                <Variant>C. Probably</Variant>
                <Variant>D. No</Variant>
            </div>
        </div>
    );
};
