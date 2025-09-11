function calculate() {

    // YOUR CODE GOES HERE
    // console.log("calculate func");

    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);

    var sum = 0;

    for (i = num1; i <= num2; i++) {
        sum += i;
    }

    document.getElementById("result").innerText = "The sum is " + " is: " + sum;
}


