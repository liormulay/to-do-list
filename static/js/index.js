var MainMenu = function () {

    var initModule = function () {
        document.getElementById("addNoteBtn").addEventListener("click", onAddClick);
        axios.get('/api/lists')
        .then((response) => {
            console.log(response.data);
        });
    };

    var onAddClick = function () {
        window.location.href = "CreateList.html";
    };

    return { initModule: initModule };
}();