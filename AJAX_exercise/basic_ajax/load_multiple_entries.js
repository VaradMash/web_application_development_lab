let obj = new XMLHttpRequest();
let table = document.getElementById("content_table");

// Open request
obj.open("GET", "./college_names.json", true);

obj.send();

obj.onload = function(){
    let data = JSON.parse(obj.responseText);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let table_row = document.createElement("tr"); 
        let name = document.createElement("td");
        let yoe = document.createElement("td");
        name.innerHTML = data[i].college_name;
        yoe.innerHTML = data[i].year_of_establishment
        table_row.appendChild(name);
        table_row.appendChild(yoe);
        table.appendChild(table_row);
    }
}