var EditList = function () {

    var initModule = function () {
        document.getElementsByTagName("h1")[0].innerHTML = "Edit your To-Do list";
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id');
        loadData(id);
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
            });

    }


    return { initModule: initModule };

}();