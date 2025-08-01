//function to convert binary numbers to decimal
function convertBinaryToDecimal() {

    //get user input
    const binaryInput = document.getElementById('binary-input').value.trim();
    //get the results placeholder
    const resultDiv = document.getElementById('binary-result');

    //if there is no number, return "Please enter a binary number"
    if (!binaryInput) {
        resultDiv.textContent = 'Please enter a binary number';
        return;
    }

    //a regex
    if (!/^[01]+$/.test(binaryInput)) {
        resultDiv.textContent = 'Invalid binary number. Use only 0s and 1s.';
        return;
    }

    //length of a binary
    if (binaryInput.length > 53) {
        resultDiv.textContent = 'Binary number too long (max 53 bits)';
        return;
    }
    try {
        const decimal = parseInt(binaryInput, 2);
        if (isNaN(decimal)) {
            throw new Error('Conversion failed');
        }
        resultDiv.textContent = decimal;
    } catch (error) {
        resultDiv.textContent = 'Conversion error: ' + error.message;
    }
}

//function to convert decimal numbers to binary
function convertDecimalToBinary() {
    const decimalInput = document.getElementById('decimal-input').value.trim();
    const resultDiv = document.getElementById('decimal-result');
    
    //if there is no number, return "Please enter a binary number"
    if (!decimalInput) {
        resultDiv.textContent = 'Please enter a decimal number';
        return;
    }
    
    //a regex
    if (!/^\d+$/.test(decimalInput)) {
        resultDiv.textContent = 'Please enter a valid positive integer';
        return;
    }
    
    const number = parseInt(decimalInput, 10);
    
    if (!Number.isSafeInteger(number)) {
        resultDiv.textContent = 'Number too large (max 2^53-1)';
        return;
    }
    
    if (number < 0) {
        resultDiv.textContent = 'Please enter a positive number';
        return;
    }
    
    try {
        const binary = number.toString(2);
        resultDiv.textContent = binary;
    } catch (error) {
        resultDiv.textContent = 'Conversion error: ' + error.message;
    }
}