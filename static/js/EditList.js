var EditList = function () {

    var initModule = function () {
        document.getElementsByTagName("h1")[0].innerHTML = "Edit your To-Do list";
        loadData();
    };

    function loadData() {
        var list = localStorage.getItem('_list');
        if (!list) return false;
        localStorage.removeItem('_list');
        //decodes a string data encoded using base-64
        list = atob(list);
        //parses to Object the JSON string
        list = JSON.parse(list);
        var date = list["dateTime"];
        var titleDate = document.createElement("h2");
        titleDate.innerHTML = "Created at " + date;
        document.querySelector("header").appendChild(titleDate);

        var items = list["list"];
        for (let i = 0; i < items.length; i++) {
            var taskItem = document.createElement("li");
            var text = document.createTextNode(items[i]);
            taskItem.appendChild(text);
            document.querySelector("ul").appendChild(taskItem);

            var deleteBtn = document.createElement("button");
            deleteBtn.innerText = "X";
            taskItem.appendChild(deleteBtn);
            deleteBtn.addEventListener("click", deleteItem);

            function deleteItem() {
                document.querySelector("ul").removeChild(taskItem);
            }
        }

        return true;
    }

    return { initModule: initModule };

}();