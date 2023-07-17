import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl } from '@mui/base';
import { useState, useEffect } from 'react';
import { lightGreen, red, lightBlue } from '@mui/material/colors';


const INITIAL_CHOICE_ID = "A";

const getNextUnicodeString = (currentString: string, next: number): string => {
  const codePoint = currentString.codePointAt(0)!;
  const nextCodePoint = codePoint + next;
  const nextString = String.fromCodePoint(nextCodePoint);
  return nextString;
}

const makeStyle = (showAnswer: boolean, currentString: string, corrects?: string[], answers?: string[]): React.CSSProperties | undefined => {
  if (!showAnswer || !corrects || !answers) return;

  const selected = answers.includes(currentString);
  const correct = corrects.includes(currentString);

  if (selected) {
    if (correct) return ({
        backgroundColor: lightGreen[100],
        border: "3px solid",
        borderColor: lightBlue[500],
    });
    // wrong
    else return ({
        backgroundColor: red[100],
        border: "3px solid",
        borderColor: lightBlue[500],
    });
  }

  if (correct) return ({
      backgroundColor: lightGreen[100],
  });

  return;

}

interface ChoicesProps {
  options: string[];
  showAnswer: boolean;
  corrects?: string[];
  submitedAnswers?: string[];
}

const Choices: React.FC<ChoicesProps> = ({ options, showAnswer, corrects, submitedAnswers }) => {
  const [ answers, setAnswers ] = useState([false]);

  useEffect(() => {
    const initialAnswers = new Array(options.length).fill(false);
    setAnswers(initialAnswers);

    if (!showAnswer) return;

    // Load checked answers to the page
    // Convert "A", "B", "C" to boolean array
    const chosenIndices = submitedAnswers?.map((answer) => answer.codePointAt(0)! - INITIAL_CHOICE_ID.codePointAt(0)!);
    chosenIndices?.forEach((idx) => { initialAnswers[idx] = true });
    setAnswers(initialAnswers);
  }, [options, submitedAnswers, showAnswer]);

  const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedAnswers = answers.map((answer, idx) =>
      idx === index ? event.target.checked : answer
    );
    console.log("answers: " + answers.length);
    setAnswers(updatedAnswers);
  };

  const renderOption = (option: string, index: number) => {
    const nextOptionName = getNextUnicodeString(INITIAL_CHOICE_ID, index);
    return (
      <React.Fragment key={index}>
        <FormControlLabel
          control={
            <Checkbox
              key={index}
              value={answers[index]}
              onChange={handleChange(index)}
              disabled={showAnswer}
            />
          }
          value={index}
          label={`${nextOptionName}: ${option}`} 
          style={makeStyle(showAnswer, nextOptionName, corrects, submitedAnswers)}
        />
        <br/>
      </React.Fragment>
    );
  }

  return (
    <FormControl required>
      <FormGroup>
        { options.map((option, index) => renderOption(option, index)) }
      </FormGroup>
    </FormControl>
  );
}

export default Choices;
