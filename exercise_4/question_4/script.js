function calculate() {
    // Capture operands
    let operand_1 = document.getElementById("operand_1").value;
    let operand_2 = document.getElementById("operand_2").value;
    let result_element = document.getElementById("result");
    let option = Number(document.getElementById("operator").value);

    let result = 0;
    if (operand_1 === "" || operand_2 === "")
    {
        result = "Invalid operands";
    }
    else
    {
        switch (option) {
            case 1:
                // Typecasting to number for concatenation override
                result = Number(operand_1) + Number(operand_2);
                break;
            case 2:
                result = operand_1 - operand_2;
                break;
            case 3:
                result = operand_1 * operand_2;
                break;
            case 4:
                if(operand_2 === "0")
                {
                    result = "Cannot divide by zero !";
                }
                else
                {
                    result = operand_1 / operand_2;
                }                
                break;
            default:
                break;
        }
    }
    result_element.innerHTML = result;

}