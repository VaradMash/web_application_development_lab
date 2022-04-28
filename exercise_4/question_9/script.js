function translate_day() {
    let number = Number(document.getElementById("number").value);
    let result_element = document.getElementById("day_result");

    let result = 0;
    if (number === "")
    {
        result = "Invalid operands";
    }
    else
    {
      switch (number) {
            case 1:
                result = "It is Monday";
                break;
            case 2:
              result = "It is Tuesday";
              break;
            case 3:
                result = "It is Wednesday";
                break;
            case 4:
                result = "It is Thursday";
                break;
            case 5:
                result = "It is Friday";
                break;
            case 6:
                result = "It is Saturday";
                break;
            case 7:
                result = "It is Sunday";
                break;            
            default:
                result = "Invalid number to translate Day !";
                break;
      }  
    }
    result_element.innerHTML = result;

}