Dropzone.autoDiscover = false;
$(document).ready(function () {
    $("#btn-Excel").click(function () {
        $("#modalExcel").modal();
    });

    $("#ExcelDrop").dropzone({ url: "/file/post" });
});