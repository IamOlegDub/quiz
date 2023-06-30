import cn from 'classnames';
import { Frame } from '../Frame';
import { WORD, symConverter } from '../../data';
import styles from './Option.module.scss';

export const Option = ({ option, selected, data, i, onCheck }) => {
    const onSelect = (option) => {
        if (selected === option && selected === data.correct_answer)
            return 'selected';
        else if (selected === option && selected !== data.correct_answer)
            return 'wrong';
        else if (option === data.correct_answer) return 'selected';
    };

    const variantOption = symConverter(option);

    return (
        <button onClick={() => onCheck(option)} disabled={selected}>
            <Frame
                key={option}
                stylesOption={cn(
                    styles.option,
                    styles[`${selected && onSelect(option)}`]
                )}
            >
                <div>{WORD[i]}:</div>
                <div>{variantOption}</div>
            </Frame>
        </button>
    );
};
