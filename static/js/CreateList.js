var CreatList = function () {

    var initModule = function () {
        document.getElementById("addTaskBtn").addEventListener("click", onAddClicked);
    };

    var onAddClicked = function () {
        if (document.getElementById("taskInput").value != "") {
            addTask();
            document.getElementById("taskInput").value = "";
        }
    };

    function addTask() {
        var taskItem = document.createElement("li");
        var text = document.createTextNode(document.getElementById("taskInput").value);
        taskItem.appendChild(text);
        document.querySelector("ul").appendChild(taskItem);

        var deleteBtn = document.createElement("button");
        var x = document.createTextNode("X");
        deleteBtn.appendChild(x);
        taskItem.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", deleteItem);

        function deleteItem() {
            document.querySelector("ul").removeChild(taskItem);
        }
    }

    return { initModule: initModule};

}();