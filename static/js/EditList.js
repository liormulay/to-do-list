var EditList = function() {

    var initModule = function() {
        document.getElementsByTagName("h1")[0].innerHTML  = "Edit your To-Do list";
    };

    return { initModule: initModule };

}();