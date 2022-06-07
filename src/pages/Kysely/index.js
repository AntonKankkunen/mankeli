import { Question } from './components/Page';
import { Result } from './components/Result';
import { useState } from 'react';

const ekatKysymykset = ["ketkä", "hane", "lele"];
const tokatKysymykset = ["mikä nro", "1-2", "3-4", "5-6"];
const kolmetKysymykset = [ "mitkä", "se", "tuo", "tämä"];
const neljatKysymykset = ["kuinka", "mutkalla", "mankelissa"];

export function Page() {

    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [answers, setAnswers] = useState([]);
    const [radioValue, setRadioValue] = useState("");
    const [checkboxValue, setCheckboxValue] = useState([]);

    function setQuestionPage()  {
        if (currentQuestion === 1) {
            return <Question kysymykset={ekatKysymykset} checkboxOnChange={checkboxOnChange} isRadio={false} isCheckbox={true} />
        }
        else if (currentQuestion === 2) {
            return <Question kysymykset={tokatKysymykset} radioOnChange={radioOnChange} isRadio={true} isCheckbox={false} />
        }
        else if (currentQuestion === 3) {
            return <Question kysymykset={kolmetKysymykset} checkboxOnChange={checkboxOnChange} isRadio={false} isCheckbox={true} />
        }
        else if (currentQuestion === 4) {
            return <Question kysymykset={neljatKysymykset} radioOnChange={radioOnChange} isRadio={true} isCheckbox={false} />
        }
        else {
            return <Result answers={answers} />
        }
    }    

    const radioOnChange = (e) => {
        setRadioValue(e.target.value);
    }

    const checkboxOnChange = (e) => {
        var c = checkboxValue.slice();
        console.log(e.target.value);
        if (e.target.checked) {
            c.push(e.target.value);
        }
        else if (!e.target.checked && c.includes(e.target.value)) {
            c.slice(c.indexOf(e.target.value), 1);
        }
        setCheckboxValue(c);
    }

    const handleBackClick = () => {
        setCurrentQuestion(currentQuestion-1);
    }

    const handleForwardClick = () => {
        setCurrentQuestion(currentQuestion+1);
        let a = answers.slice();
        if (currentQuestion % 2 == 0) {
            a.push(radioValue);
        }
        else {
            a.push(checkboxValue);
        }
        setAnswers(a);
        setRadioValue("");
        setCheckboxValue([]);
        console.log(answers);
    }

    var currentPage = setQuestionPage();
    var backDisplay = currentQuestion == 1 ? {"display": "none"} : {};
    var forwardDisplay = currentQuestion == 5 ? {"display": "none"} : {};
    return (
        <div className="App1">
            {currentPage}
            <div>
                <button style={backDisplay} onClick={handleBackClick}>Taakse</button>
                <button style={forwardDisplay} onClick={handleForwardClick}>Eteen</button>
            </div>
        </div>
    );
}