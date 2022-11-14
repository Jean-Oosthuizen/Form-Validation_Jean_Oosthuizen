//Called when the form is submitted
function validate(){
    var newTask = document.getElementById("newTask").value; //Stores submitted newTask value

    if (newTask.includes("<") == true || newTask.includes(">") == true){
        //If the newTask value contains < or >, displays error message, hides success message
        document.getElementById("error").style.display = "block";
        document.getElementById("success").style.display = "none";
    }else{
        //If value is valid, displays success message, hides error message, creates list element with that value
        document.getElementById("success").style.display = "block";
        document.getElementById("error").style.display = "none";
        var listElement = document.createElement("li");
        listElement.innerHTML = newTask;
        document.getElementById("unorderedList").appendChild(listElement);
    }
}

//Creates list element, places text in the element, then places the element in the HTML page
