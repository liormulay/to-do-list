var MainMenu = function () {

    var initModule = function () {
        document.getElementById("addNoteBtn").addEventListener("click", onAddClick);
        axios.get('/api/lists')
        .then((response) => {
            var data = response.data;
            const container = document.getElementById("gridNotes");
            for (let i = 0; i < data.length; i++) {
                var list = data[i];
                var date = list.dateTime;
                const button = document.createElement("button");
                button.innerText = date;
                button.addEventListener("click", function () {
                    saveData(list);
                    window.location.href = "EditList.html";
                })
                container.appendChild(button);
            }
        });
    };

    var onAddClick = function () {
        window.location.href = "CreateList.html";
    };

    function saveData(list) {
        //converts to JSON string the Object
        list = JSON.stringify(list);
        //creates a base-64 encoded ASCII string
        list = btoa(list);
        localStorage.setItem('_list', list);
    }

    return { initModule: initModule };
}();