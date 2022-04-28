let current_value = "";
let previous_value = "";
let operator = "";

function update(value) 
{
    /*
     *  Input   :   String value
     *  Utility :   Update input value
     *  Output  :   None
     */
    let input_window = document.getElementById("input_window");
    let is_operator
    switch (value)
    {
        case 10:
            value = " + ";
            break;
        case 20:
            value = " - ";
            break;
        case 30:
            value = " X ";
            break;
        case 40:
            value = " / ";
            break;
        default:
            break;
    }
    console.log(input_window.innerHTML);
    if (input_window.innerHTML === "0")
    {
        input_window.innerHTML = value.toString();
        
    }
    else
    {        
        let previous_data = input_window.innerHTML;
        input_window.innerHTML = previous_data + value.toString();
    }
}

function clear()
{
    /*
     *  Input   :   None
     *  Utility :   Clear Input field
     *  Output  :   None
     */
    console.log("clear");
    let input_window = document.getElementById("input_window");
    input_window.innerHTML = "0";
    current_value = "";
    previous_value = "";
}

