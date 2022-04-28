let obj = new XMLHttpRequest();
let dropdown_menu = document.getElementById("dropdown_menu");
let placeholder = document.getElementById("placeholder");

// Open request
obj.open("GET", "./college_names.json", true);

obj.send();

obj.onload = function(){
    let data = JSON.parse(obj.responseText);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let new_option = document.createElement("option", value=data[i].college_name); 
        new_option.innerHTML = data[i].college_name;
        new_option.onselect = function() {
            placeholder.innerHTML = data[i].college_name + " was established in " + data[i].year_of_establishment;
        }
        dropdown_menu.appendChild(new_option);
    }
}