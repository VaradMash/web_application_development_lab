function submit_data()
{
    /*
     *  Input   :   None
     *  Utility :   Get data from form and send data to API for storage.
     *  Output  :   None
     */
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let user_data = {
        "username" : username.value,
        "email" : email.value
    }

    // Initializing request handler.
    let xhr = new XMLHttpRequest();

    // Opening connection to route (API)
    xhr.open("POST", "/add_user", true);

    // Setting request header to match data format.
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    // Sending data to server.
    xhr.send(JSON.stringify(user_data));

    // Prompt user after sending data to server.
    xhr.onload = () => {
        alert("New user added !");
    }
}