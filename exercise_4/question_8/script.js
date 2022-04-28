function get_capital() {
    // Capture operands
    let result_element = document.getElementById("result");
    let option = document.getElementById("country").value;

    let result = "";
    switch (option) {
        case "India":
            // Typecasting to number for concatenation override
            result = "New Delhi";
            break;
        case "Greece":
            result = "Athens";
            break;
        case "Canada":
            result = "Ottawa";
            break;
        case "Germany":
            result = "Berlin"                            
            break;
        case "Bangladesh":
            result = "Dhaka"                            
            break;
        default:
            break;
    }   
    result_element.innerHTML = result;
}