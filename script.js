function calculate(operation) {
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);

  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = 'Please enter valid numbers';
  } else {
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = 'Cannot divide by zero';
        }
        break;
      case '**':
        result = num1 ** num2;
        break;
        um1 ** num2;
        break;
      default:
        result = 'Invalid operation';
    }
  }

  document.getElementById('result').innerHTML = `<h3> Result: ${result} </h3>`;
}
