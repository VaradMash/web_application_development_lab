function calculate(option) {
    // Capture operands
    let operand_1 = Number(document.getElementById("operand_1").value);
    let operand_2 = Number(document.getElementById("operand_2").value);
    let operand_3 = Number(document.getElementById("operand_3").value);
    let result_element = document.getElementById("result");

    let result = 0;
    if (operand_1 === "" || operand_2 === "" || operand_3 === "")
    {
        result = "Invalid operands";
    }
    else
    {
        if (operand_1 > operand_2)
        {
            if (operand_1 > operand_3)
            {
                result = operand_1;
            }
            else
            {
                result = operand_3;
            }
        }
        else
        {
            if (operand_2 > operand_3)
            {
                result = operand_2;
            }
            else
            {
                result = operand_3;
            }
        }
    }
    result_element.innerHTML = result;

}