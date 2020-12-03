var MainMenu = function () {

    var initModule = function () {
        document.getElementById("addNoteBtn").addEventListener("click", onAddClick);
        axios.get('/api/lists')
            .then((response) => {
                var data = response.data;
                const container = document.getElementById("gridNotes");
                for (let i = 0; i < data.length; i++) {
                    var list = data[i];
                    const date = document.createElement("p");
                    date.innerHTML = list.dateTime;
                    let id = list.id;
                    const div = document.createElement("div");
                    const deleteBtn = document.createElement("button");
                    deleteBtn.innerHTML = "X";
                    deleteBtn.addEventListener("click", function (e) {
                        if (confirm("Are you sure you want to delete this list?")) {

                        }
                        e.stopPropagation();
                    });
                    div.addEventListener("click", function () {
                        window.location.href = "EditList.html?id=" + id;
                    });
                    div.appendChild(deleteBtn);
                    div.appendChild(date);
                    container.appendChild(div);
                }
            });
    };

    var onAddClick = function () {
        window.location.href = "CreateList.html";
    };

    return { initModule: initModule };
}();