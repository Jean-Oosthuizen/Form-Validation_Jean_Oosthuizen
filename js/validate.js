//Called when form is submitted
function validate(){
    var newTask = document.getElementById("newTask").value; //Stores submitted newTask value

    if (newTask.includes("<") == true || newTask.includes(">") == true){
        //If the newTask value contains < or > this makes the error message in the <p id="error"> tag visible
        document.getElementById("error").style.display = "block";
    }
}

//Creates list element
var listElement = document.createElement("li");
//Places text within the element
listElement.innerHTML = "List";
//Adds the element to the unordered list in the HTML document
document.getElementById("unorderedList").appendChild(listElement);
