
function validate(){
    var newTask = document.getElementById("newTask").value;
    console.log(newTask);
    if (newTask.includes("<") == true || newTask.includes(">") == true){
        document.getElementById("error").style.display = "block";
    }
}
var listElement = document.createElement("li");
listElement.innerHTML = "List";
document.getElementById("unorderedList").appendChild(listElement);
