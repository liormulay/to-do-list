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


        return true;
    }

    return { initModule: initModule };

}();