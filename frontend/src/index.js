async function calculatePlus() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    try {
        const response = await fetch(`http://localhost:8000/add?num1=${num1}&num2=${num2}`);
        const data = await response.json();
        document.getElementById('result').innerHTML = data.result;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function calculateMinus() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    try {
        const response = await fetch(`http://localhost:8000/sub?num1=${num1}&num2=${num2}`);
        const data = await response.json();
        document.getElementById('result').innerHTML = data.result;
    } catch (error) {
        console.error('Error:', error);
    }
}

function resetFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerHTML = 'Result: ';
}
