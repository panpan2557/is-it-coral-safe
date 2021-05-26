import React, { ChangeEvent, FormEvent, useState } from 'react';
import { MatchSubstance } from '../interfaces/Substance';
import { validate } from '../Utils/Validator';

const ValidationForm = () => {
    const [text, setText] = useState<string>('');
    const [isValidateClicked, setIsValidateClicked] = useState<boolean>(false);
    const [matchSubstances, setMatchSubstances] = useState<MatchSubstance[]>(
        []
    );
    const onTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setMatchSubstances(validate(text));
        setIsValidateClicked(true);
    };
    const harmfulBox = <div>harmful</div>;
    const safeBox = <div>safe</div>;

    return (
        <>
            <form onSubmit={handleSubmit}>
                <textarea value={text} onChange={onTextChange} />
                <div>
                    <button>Check</button>
                </div>
            </form>
            <div className="match-result-container">
                {isValidateClicked && (matchSubstances.length > 0 ? harmfulBox : safeBox)}
            </div>
        </>
    );
};

export default ValidationForm;
