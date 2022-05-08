let xhr = new XMLHttpRequest()

let table = document.getElementById("content_table");

xhr.onload = () => {
    let i = 1;
    let json_data = JSON.parse(xhr.responseText);
    json_data.forEach(user => {
        console.log("User : " + JSON.stringify(user))
        let row = document.createElement("tr");
        let sr_no = document.createElement("td");
        sr_no.innerHTML = i;
        let name = document.createElement("td");
        name.innerHTML = user.username;
        let email = document.createElement("td");
        email.innerHTML = user.email;
        row.appendChild(sr_no);
        row.appendChild(name);
        row.appendChild(email);
        table.appendChild(row);
    });
}
xhr.open("GET", "../users.json", true);
xhr.send();