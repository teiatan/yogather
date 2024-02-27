import { useState } from 'react';

const QuizQuestion = ({ question, options, onAnswer }:{ 
    question:string; 
    options:string[], 
    onAnswer:(answer:string)=>void
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOptionChange = (option:any) => {
    setSelectedOption(option);
  };

  const handleAnswer = () => {
    if (selectedOption !== null) {
      onAnswer(selectedOption);
      setSelectedOption(null);
    }
  };

  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map((option) => (
          <li key={option}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleAnswer}>Submit Answer</button>
    </div>
  );
};

export default QuizQuestion;
