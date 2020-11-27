var MainMenu = function () {

    var initModule = function () {
        document.getElementById("addNoteBtn").addEventListener("click", onAddClick);
        axios.get('/api/lists')
        .then((response) => {
            var data = response.data;
            const container = document.getElementById("gridNotes");
            for (let i = 0; i < data.length; i++) {
                var date = (data[i]).dateTime;
                const button = document.createElement("button");
                button.innerText = date;
                button.addEventListener("click", function () {
                    console.log(i);
                })
                container.appendChild(button);
            }
        });
    };

    var onAddClick = function () {
        window.location.href = "CreateList.html";
    };

    return { initModule: initModule };
}();