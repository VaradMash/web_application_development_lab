let obj = new XMLHttpRequest();
let button = document.getElementById("button_2");

// Open request
obj.open("GET", "./content.json", true);

obj.send();

// Method 1
function display() {
    let data = JSON.parse(obj.responseText);
    console.log(data.college_name);
    let placeholder = document.getElementById("content");
    placeholder.innerHTML = data.college_name;
}

// Method 2
button.addEventListener("click", function(){
    let data = JSON.parse(obj.responseText);
    console.log(data.college_name);
    // let placeholder = document.getElementById("content");
    // placeholder.innerHTML = data.college_name;
})