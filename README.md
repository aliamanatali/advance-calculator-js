# Calculator Web Application

This project is a web-based calculator application that allows users to perform various mathematical calculations. The calculator supports basic arithmetic operations, trigonometric functions, and variables. It also maintains a history of expressions and their outputs using JavaScript and localStorage.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Trigonometric functions: sine, cosine, tangent, and square root.
- Variable support: users can define variables and use them in expressions.
- History feature: maintains a history of expressions and their results.
- Load and delete history items.

## Technologies Used

- HTML
- CSS (Bootstrap for styling)
- JavaScript (with localStorage for persistence)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have a modern web browser installed.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/aliamanatali/advance-calculator-js.git
   ```
2. Open the `index.html` file in your web browser.

## Usage

1. **Calculator Interface**: The main interface includes input fields for expressions and outputs, buttons for various operations, and a history section.

2. **Entering Variables**: 
   - Enter a variable name in the "Enter variable name" field.
   - Enter a value in the "Enter value" field.
   - Click the "Enter" button to save the variable.

3. **Performing Calculations**:
   - Enter an expression in the "Enter expression" field.
   - Use the provided buttons for operations or directly type in the expression.
   - Click the "=" button to compute the result.
   - The output will be displayed in the "Output value" field.

4. **History Management**:
   - The history of calculations is displayed on the right side.
   - Each history item includes the expression and the result, along with "Load" and "Delete" buttons.
   - Clicking "Load" will load the expression and result back into the input fields.
   - Clicking "Delete" will remove the history item.

## Code Overview

### JavaScript Functions

- `replaceConstants(expression)`: Replaces constants like π and e in the expression.
- `appendExp(str)`: Appends a string to the current expression.
- `clearKardo()`: Clears the input and output fields.
- `backspaceKardo()`: Handles backspace functionality, including special handling for trigonometric functions.
- `replaceAllOccurrences(inputString, wordToReplace, newWord)`: Replaces all occurrences of a word in a string with a new word.
- `variableValueInput()`: Handles variable input from the user.
- `assignValueToVariable(bName, bValue)`: Assigns a value to a variable and creates a corresponding button.
- `replaceVariables(expression)`: Replaces variables in the expression with their values.
- `calculate()`: Performs the calculation of the expression and handles errors like division by zero.
- `saveToHistory(expression, result)`: Saves the expression and result to the history in localStorage.
- `getHistory()`: Retrieves the history from localStorage.
- `displayHistory()`: Displays the history items in the UI.
- `loadHistoryItem(index)`: Loads a history item back into the input fields.
- `deleteHistoryItem(index)`: Deletes a history item from localStorage.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Ali Amanat Ali - [aliamanatali](https://www.linkedin.com/in/aliamanatali) - aliamanatali218@gmail.com

Project Link: [https://github.com/aliamanatali/advance-calculator-js](https://github.com/aliamanatali/advance-calculator-js)

## Acknowledgments

- Bootstrap for styling
- MDN Web Docs for JavaScript and web development references

---

Feel free to customize this README file according to your project details and personal information.
