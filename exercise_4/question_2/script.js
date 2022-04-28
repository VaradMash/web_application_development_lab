function calculate(option) {
    // Capture operands
    let operand_1 = document.getElementById("operand_1").value;
    let operand_2 = document.getElementById("operand_2").value;
    let result_element = document.getElementById("result");

    let result = 0;
    if (operand_1 === "" || operand_2 === "")
    {
        result = "Invalid operands";
    }
    else
    {
        if (document.getElementById("add").checked)
        {
            // Typecasting to number for concatenation override
            result = Number(operand_1) + Number(operand_2);
        }
        else if (document.getElementById("subtract").checked)
        {
            result = operand_1 - operand_2;
        }
        else if (document.getElementById("multiply").checked)
        {
            result = operand_1 * operand_2;
        }   
        else if (document.getElementById("divide").checked)
        {
            if(operand_2 === "0")
            {
                result = "Cannot divide by zero !";
            }
            else
            {
                result = operand_1 / operand_2;
            }   
        }  
    }
    result_element.innerHTML = result;
}