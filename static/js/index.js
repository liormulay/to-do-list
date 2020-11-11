var MainMenu = function () {

    var initModule = function () {
        document.getElementById("addNoteBtn").addEventListener("click", onAddClick);
    };

    var onAddClick = function () {
        window.location.href = "CreateList.html";
    };

    return { initModule: initModule };
}();