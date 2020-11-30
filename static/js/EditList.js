var EditList = function () {

    var initModule = function () {
        document.getElementsByTagName("h1")[0].innerHTML = "Edit your To-Do list";
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id');
        loadData(id);
        document.getElementById("addTaskBtn").addEventListener("click", onAddClicked);

    };

    function loadData(id) {
        axios.get('/api/list',{ params: { id: id }})
            .then((response) => {
                var list = response.data;
                var date = list["dateTime"];
                var titleDate = document.createElement("h2");
                titleDate.innerHTML = "Created at " + date;
                document.querySelector("header").appendChild(titleDate);

                var items = list["list"];
                for (let i = 0; i < items.length; i++) {
                    var text = document.createTextNode(items[i]);
                    createItem(text);
                }

                return true;
            });

    }

    var onAddClicked = function() {
        if (document.getElementById("taskInput").value != "") {
            var text = document.createTextNode(document.getElementById("taskInput").value);
            createItem(text);
            document.getElementById("taskInput").value = "";
            document.getElementById("submit-button").disabled = false;
        }
    };

    function createItem(text){
        var taskItem = document.createElement("li");
        taskItem.appendChild(text);
        document.querySelector("ul").appendChild(taskItem);

        var deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";
        taskItem.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", deleteItem);

        function deleteItem() {
            document.querySelector("ul").removeChild(taskItem);
            document.getElementById("submit-button").disabled = false;
        }
    }


    return { initModule: initModule };

}();