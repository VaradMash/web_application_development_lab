let obj = new XMLHttpRequest();

// Open request
obj.open("GET", "./content.json", true);

obj.send();

obj.onload = function(){
    let placeholder = document.getElementById("content");
    placeholder.innerHTML = data.college_name;
}