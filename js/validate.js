//Called when the form is submitted
function validate(){
    var newTask = document.getElementById("newTask").value; //Stores submitted newTask value

    if (newTask.includes("<") == true || newTask.includes(">") == true){
        //If the newTask value contains < or >, this makes the error message in the <p id="error"> tag visible
        document.getElementById("error").style.display = "block";
    }
}

//Creates list element, places text in the element, then places the element in the HTML page
var listElement = document.createElement("li");
listElement.innerHTML = "List";
document.getElementById("unorderedList").appendChild(listElement);
