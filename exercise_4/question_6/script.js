function check() {
    // Capture operands
    let age = Number(document.getElementById("age").value);
    let result_element = document.getElementById("result");

    let result = 0;
    if (age === "")
    {
        result = "Invalid operands";
    }
    else
    {
       if (age > 18)
       {
           result = "Greater than 18";
       }
       else if (age === 18)
       {
        result = "Equal to 18";
       }
       else
       {
        result = "Less than 18";
       }        
    }
    result_element.innerHTML = result;

}