function calculatePlus(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    let result = parseInt(num1) + parseInt(num2);

    document.getElementById('result').innerHTML = 'Result: ' + result;
}
// function calculateMinus(){
//     const num1 = document.getElementById('num1').value;
//     const num2 = document.getElementById('num2').value;

//     let result = parseInt(num1) - parseInt(num2);

//     document.getElementById('result').innerHTML = 'Result: ' + result;
// }

function resetFields(){
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerHTML = 'Result: ';
}   

