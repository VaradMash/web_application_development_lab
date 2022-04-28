function generate_table() {
    let number = Number(document.getElementById("number").value);
    let result_element = document.getElementById("result");

    let result = "";
    if (number === "")
    {
        result = "Invalid operands";
    }
    else
    {
        for (let i = 1; i <= 10; i++) {
            result += number + " X " + i + " = " + (Number(number * i)) + "\n";            
        }
    }
    result_element.innerHTML = result;
}