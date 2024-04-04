import { useState } from "react";
import useModel from "./Model";
import './Calculate.css'; // Import CSS file for styling

function Calculate({ onFormClick }) {
    const [first, setFirst] = useState(null);
    const [second, setSecond] = useState(null);
    const [operator, setOperator] = useState('+');
    const output = useModel(first, second, operator);

    const handleInput = (e) => {
        if (e.target.name === 'first') {
            setFirst(parseFloat(e.target.value));
        } else if (e.target.name === 'second') {
            setSecond(parseFloat(e.target.value));
        } else if (e.target.name === 'operator') {
            setOperator(e.target.value);
        }
    }

    const handleClick = () => {
        onFormClick(first, second, output, operator);
    }

    return (
        <div className="calculator-container">
            <input type="text" name="first" aria-label="first" placeholder="Enter the first number" onChange={handleInput} />
            <select name="operator" aria-label="operator" onChange={handleInput} value={operator}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="text" name="second" aria-label="second" placeholder="Enter the second number" onChange={handleInput} />
            <button className="calculate-btn" onClick={handleClick}>Calculate</button>
            <hr />
        </div>
    );
}

export default Calculate;
