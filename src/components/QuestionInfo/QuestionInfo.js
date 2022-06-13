import React from 'react';
import { useState } from 'react'
import { Button } from 'react-bootstrap'

const QuestionInfo = ({ question }) => {
    const [answer, setAnswer] = useState(false)
    return (
        <div>
            <div class="question-container">
                <h2>Question: {question.question}</h2>
                <h2>Category: {question.category.title}</h2>
                <h3>Points: {question.value}</h3>
            </div>

            {answer ? <h2>Answer: {question.answer}</h2> : null}
            <div class="answer">
                <Button variant="secondary" onClick={() => setAnswer(!answer)}>Click here to reveal answer</Button>
            </div>
        </div>
    );
}

export default QuestionInfo;
