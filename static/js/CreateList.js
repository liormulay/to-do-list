var CreateList = function() {

    var initModule = function() {
        document.getElementById("addTaskBtn").addEventListener("click", onAddClicked);
        document.getElementById("submit-button").addEventListener("click", onSubmitClicked);
    };

    var onAddClicked = function() {
        if (document.getElementById("taskInput").value != "") {
            addTask();
            document.getElementById("taskInput").value = "";
        }
    };

    var onSubmitClicked = function() {
        var ul = document.getElementById('to-do-list');
        var items = ul.getElementsByTagName("li");
        var array = [];
        for (var i = 0; i < items.length; ++i) {
            array.push(items[i].childNodes.item(0).textContent || items[i].childNodes.item(0).innerText);
        }


        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;

        axios.post('/api/list', {
                dateTime: dateTime,
                list: array
            })
            .then((response) => {
                alert("Your list is saved successfully !");
                window.location.href = "index.html";

            }, (error) => console.log(error));
    };

    function addTask() {
        var taskItem = document.createElement("li");
        var text = document.createTextNode(document.getElementById("taskInput").value);
        taskItem.appendChild(text);
        document.querySelector("ul").appendChild(taskItem);

        var deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";
        taskItem.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", deleteItem);
        document.getElementById("submit-button").disabled = false;

        function deleteItem() {
            document.querySelector("ul").removeChild(taskItem);
            if ($('#to-do-list li').length == 0) {
                document.getElementById("submit-button").disabled = true;
            }
        }
    }

    return { initModule: initModule };

}();