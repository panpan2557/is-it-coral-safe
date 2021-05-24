import React, { ChangeEvent, FormEvent, useState } from 'react';
import { validate } from '../Utils/Validator';

const ValidationForm = () => {
    const [text, setText] = useState<string>('');
    const onTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        console.log('submit is clicked');
        validate(text);
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={text} onChange={onTextChange}/>
            <div>
                <button>Check</button>
            </div>
        </form>
    );
};

export default ValidationForm;
