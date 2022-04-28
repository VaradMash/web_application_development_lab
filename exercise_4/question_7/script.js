function calculate_amount() {
    let amount = Number(document.getElementById("amount").value);
    let result_element = document.getElementById("total_amount");

    let result = 0;
    if (amount === "")
    {
        result = "Invalid operands";
    }
    else
    {
       if (amount > 1000)
       {
           result = 0.85 * amount;
       }
       else
       {
        result = 0.95 * amount;
       }      
    }
    result_element.innerHTML = result;

}