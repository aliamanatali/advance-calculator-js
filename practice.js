let exp = "";
let inputBar = document.getElementById("display");
let outputBar = document.getElementById("show");

let variableStore = {};

function replaceConstants(expression) {
	return expression.replace(/π/g, Math.PI).replace(/e/g, Math.E);
}

function appendExp(str) {
	var inputField = document.getElementById('display');
	var cursorPosition = inputField.selectionStart;
	var currentValue = inputField.value;

	var newValue = currentValue.slice(0, cursorPosition) + str + currentValue.slice(cursorPosition);
	inputField.value = newValue;
	inputField.focus();
	inputField.setSelectionRange(cursorPosition + str.length, cursorPosition + str.length);
}

function clearKardo() {
	exp = "";
	inputBar.value = outputBar.value = "";
}

function backspaceKardo() {
	var inputField = document.getElementById('display');
	var cursorPosition = inputField.selectionStart;
	var currentValue = inputField.value;
	const trigOperations = ['sin(', 'cos(', 'tan(', 'sqrt('];
	let isTrigOperation = false;

	for (let op of trigOperations) {
		let opLength = op.length;
		let start = cursorPosition - opLength;

		if (start >= 0 && currentValue.slice(start, cursorPosition) === op) {
			currentValue = currentValue.slice(0, start) + currentValue.slice(cursorPosition);
			cursorPosition = start;
			isTrigOperation = true;
			break;
		}
	}

	if (!isTrigOperation && cursorPosition > 0) {
		currentValue = currentValue.slice(0, cursorPosition - 1) + currentValue.slice(cursorPosition);
		cursorPosition--;
	}

	inputField.value = currentValue;
	inputField.focus();
	inputField.setSelectionRange(cursorPosition, cursorPosition);
}

function replaceAllOccurrences(inputString, wordToReplace, newWord) {
	const regex = new RegExp("\\b" + wordToReplace + "\\b", "gi");
	return inputString.replace(regex, newWord);
}

function variableValueInput() {
	let Name = document.getElementById("NameBar").value;
	let Value = document.getElementById("ValueBar").value;
	document.getElementById("ValueBar").value = "";
	document.getElementById("NameBar").value = "";

	if (Name != null && Name != undefined && Value != undefined) {
		if (isNaN(Name)) {
			if (Name == 'e')
				alert(`Invalid Variable Name, e is a constant.`);

			else {
				if (!variableStore.hasOwnProperty(Name)) {
					assignValueToVariable(Name, Value);
				} else {
					alert(`Variable ${Name} already exists.`);
				}
			}
		}
		else {
			alert(`Invalid Variable Name, ${Name} is a Number.`);
		}
	}
	else {
		alert(`You must fill both fields, the variable name its value.`);
	}
}

function assignValueToVariable(bName, bValue) {
	const button = document.createElement("button");
	if (bName != null && bName != undefined && bValue != null && bValue != undefined) {
		button.innerText = bName;
		button.value = bValue;
	}

	variableStore[bName] = bValue;

	button.addEventListener("click", function () {
		appendExp(bValue);
	});

	document.body.appendChild(button);
}

function replaceVariables(expression) {
	for (const [variable, value] of Object.entries(variableStore)) {
		const regex = new RegExp("\\b" + variable + "\\b", "g");
		expression = expression.replace(regex, value);
	}
	return expression;
}

function calculate() {
	try {
		exp = inputBar.value;
		exp = replaceAllOccurrences(exp, "sin", "Math.sin");
		exp = replaceAllOccurrences(exp, "tan", "Math.tan");
		exp = replaceAllOccurrences(exp, "cos", "Math.cos");
		exp = replaceAllOccurrences(exp, "sqrt", "Math.sqrt");
		exp = replaceVariables(exp);
		exp = replaceConstants(exp);

		if (exp.includes('/0')) {
			throw new Error("Division by zero");
		}

		exp = exp.replace(/\^/g, '**');
		output = eval(exp).toFixed(4);
		outputBar.value = output;
		saveToHistory(exp, output);
	} catch (error) {
		outputBar.value = error.message;
	}
}

function saveToHistory(expression, result) {
	const history = getHistory();
	history.push({ expression, result });
	localStorage.setItem('calculatorHistory', JSON.stringify(history));
	displayHistory();
}

function getHistory() {
	const history = localStorage.getItem('calculatorHistory');
	return history ? JSON.parse(history) : [];
}

function displayHistory() {
	const history = getHistory();
	const historyList = document.getElementById('history');
	historyList.innerHTML = '';
	
	history.forEach((item, index) => {
		const listItem = document.createElement('li');
		listItem.textContent = `${item.expression} = ${item.result}`;

		const loadButton = document.createElement('button');
		loadButton.textContent = 'Load';
		loadButton.onclick = () => loadHistoryItem(index);
		listItem.appendChild(loadButton);

		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.onclick = () => deleteHistoryItem(index);
		listItem.appendChild(deleteButton);

		historyList.appendChild(listItem);
	});
}


function loadHistoryItem(index) {
	const history = getHistory();
	const item = history[index];
	document.getElementById('display').value = item.expression;
	document.getElementById('show').value = item.result;
}

function displayResult(result) {
	document.getElementById('result').value = result;
}

function deleteHistoryItem(index) {
	let history = getHistory();
	history.splice(index, 1);
	localStorage.setItem('calculatorHistory', JSON.stringify(history));
	displayHistory();
}

document.addEventListener('DOMContentLoaded', displayHistory);