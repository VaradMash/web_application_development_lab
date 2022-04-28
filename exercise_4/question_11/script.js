function authenticate(option) {
    // Capture operands
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let result_element = document.getElementById("result");

    let result = 0;
    if (username === "" || password === "")
    {
        result = "Invalid credentials, fields cannot be empty !";
    }
    else
    {
        if (username.toLowerCase() === "admin" && password === "admin123")
        {
            result = "Authentication successful";
        }
        else
        {
            result = "Incorrect username or password!";
        }
    }
    result_element.innerHTML = result;

}