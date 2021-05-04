Dropzone.autoDiscover = false;
$(document).ready(function () {
    $("#btn-Excel").click(function () {
        $("#modalExcel").modal();
    });

    $("#ExcelDrop").dropzone({ url: "/file/post" });

    $("#btn-save").click(function () {

        if ($("#inpName").val().trim().length > 0 && $("#inpLastName").val().trim().length > 0
            && $("#inpEmail").val().trim().length > 0 && $("#InpPassword").val().trim().length > 0 && $("#TypeUser").val().trim().length > 0) {
            AddUser();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Todos los campos deben de estar llenos',
                text: ""
            });
        }
    });


    function AddUser() {
        $.ajax({
            url: "/Usuarios/AddUserApp",
            cache: false,
            type: "POST",
            data: {
                Name: $("#inpName").val(),
                LastName: $("#inpLastName").val(),
                Email: $("#inpEmail").val(),
                Password: $("#InpPassword").val(),
                Type: $("#TypeUser").val()
            },
            success: function (response) {
                switch (response) {
                    case "OK":
                        Swal.fire({
                            icon: 'success',
                            title: 'Usuario Agregado',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        break;
                    case "Error":
                        Swal.fire({
                            icon: 'error',
                            title: 'No se pudo relizar esta acción',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        break;
                }
            }
        });
    }
});