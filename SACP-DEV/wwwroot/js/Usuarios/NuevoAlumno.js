Dropzone.autoDiscover = false;
$(document).ready(function () {
    $("#btn-Excel").click(function () {
        $("#modalExcel").modal();
    });

    $("#ExcelDrop").dropzone({ url: "/file/post" });





    $("#btn-save").click(function ()) {

        if ($('#inpMatri').val().trim().length > 3 && $('#inpName').val().trim().length > 3
            && $('#inpLast').val().trim().length > 3 && $('#inpEmail').val().trim().length > 3
            && $('#inp-phone").').val().trim().length > 3 && $('#e3').val().length > 0) {
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
        url: "/Usuarios/AddUser",
        type: "POST`",
        cache: false,
        data: {
            Matricula: $("#inpMatri").val(),
            Name: $("#inpName").val(),
            LastName: $("#inpLast").val(),
            Email: $("#inpEmail").val(),
            Grupo: $("#e3").val(),
            Phone: $("#inp-phone").val()
        },
        success: function (response) {
            switch (response) {
                case "OK":
                    getAlumno();
                    Swal.fire({
                        icon: 'success',
                        title: 'Alumno Agregado',
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
                case "FOUND":
                    Swal.fire({
                        icon: 'error',
                        title: 'Este Alumno Ya Existe',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    break;
            }
        }
    });
}
});

