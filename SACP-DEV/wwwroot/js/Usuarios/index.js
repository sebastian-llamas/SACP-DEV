$(document).ready(function () {

    $('#e2').select2();
    var EditFlag = 0;
    
    var table = $("#UserTable").DataTable({
        dom: 'Bfrtip',
        bPaginate: true,
        bLengthChange: false,
        bInfo: false,
        bAutoWidth: false,
        language: { search: "<b>Buscar</b>" },
        buttons: [
            {
                text: 'Crear',
                className: 'btn-gray mt-10',
                action: function (e, dt, node, config) {
                    EditFlag = 0;
                    WModal();
                }
            },
            {
                text: 'Editar',
                className: 'btn-blue mt-10',
                action: function (e, dt, node, config) {
                    EditFlag = 1;
                    Editar();
                }
            },
            {
                text: 'Eliminar',
                className: 'btn-red mt-10',
                action: function (e, dt, node, config) {
                    Swal.fire({
                        title: 'Seguro?',
                        text: "Eliminacion de Alumno!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#1CB7A0',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si, Eliminar!',
                        cancelButtonText: 'No, cancelar!',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            DeleteRow();
                        }
                    });
                   
                }
            },
            {
                extend: 'excel',
                text: 'Excel',
                className: 'btn-green mt-10'
            }
        ],
        columns: [
            { data: "id" },
            { data: "fullName" },
            { data: "email" },
            { data: "nameStatus" },
            { data: "nameType" },
            { data: "created_by" },
            { data: "created_on" },
            { data: "lastName" },
            { data: "name" },
            { data: "status" },
            { data: "typeUser" }
        ],
        columnDefs: [
            {
                "targets": [0],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [7],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [8],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [9],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [10],
                "visible": false,
                "searchable": false
            }

        ],
        initComplete: function () {
            $.unblockUI();
            $('.btn-red').prop('disabled', true);
            $('.btn-blue').prop('disabled', true);
        }
    });


    $('#UserTable tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
        CheckRow();
    });


    $("#btn-save").click(function () {

        if ($("#InpName").val().trim().length > 3 && $("#InpApellido").val().trim().length > 3 &&
            $("#InpEmail").val().trim().length> 3 && $("#InpPass").val().trim().length > 3 &&
            $("#SlcTipo").val().trim().length > 0) {


            if (EditFlag > 0) {
                UpdateUser();
            } else {
                AddUser();
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Todos los campos deben de estar llenos',
                text: ""
            });
        }

    });

    GetUser();
    function WModal() {
        $("#ContPass").removeClass("hidden");
        ResetInputs();
        $('#NewUsuario').modal('toggle');
    }


    function CheckRow() {
        let lengthRow = $('.selected').length;
        if (lengthRow > 0) {
            if (lengthRow > 1) {
                $('.btn-blue').prop('disabled', true);
            } else {
                $('.btn-red').prop('disabled', false);
                $('.btn-blue').prop('disabled', false);
            }
        } else {
            $('.btn-red').prop('disabled', true);
            $('.btn-blue').prop('disabled', true);
        }
    }

    function DeleteRow() {

        let [dataRow] = table.rows('.selected').data().toArray();
        DeleteUser(dataRow.id);

    }

    function Editar() {
        //$("#ContPass").addClass("hidden");
        $('#NewUsuario').modal('toggle');
        ResetInputs();
        var [dataRow] = table.rows('.selected').data().toArray();
        console.table(table.rows('.selected').data().toArray());

        $("#inpId").val(dataRow.id);
        $('#InpName').val(dataRow.name);
        $('#InpApellido').val(dataRow.lastName);
        $('#InpEmail').val(dataRow.email);
        $('#SlcTipo').val(`${dataRow.typeUser}`);
        
    }

    function ResetInputs() {
        $('#InpName').val("");
        $('#InpApellido').val("");
        $('#InpEmail').val("");
        $('#InpPass').val("");
        $('#SlcTipo').val("");
    }


    function GetUser() {
        $.ajax({
            url: "/Usuarios/GetUser",
            cache: false,
            type: "POST",
            data: {
                Status: 1
            },
            success: function (response) {
                if (response.length > 0) {
                    table.clear();
                    table.rows().remove().draw();
                    table.rows.add(response).draw();
                }
            }
        });
    }

    function DeleteUser(idUser) {
        $.ajax({
            url: "/Usuarios/DeleteUserApp",
            cache: false,
            type: "POST",
            data: {
                Userid: idUser
            },
            success: function (response) {
                if (response == "OK") {
                    table.rows('.selected').remove().draw();
                    Swal.fire({
                        icon: 'success',
                        title: 'Usuario Eliminado',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'No se pudo relizar esta acción',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }


    function UpdateUser() {
        $.ajax({
            url: "/Usuarios/UpdateUserApp",
            cache: false,
            type: "POST",
            data: {
                Userid: $("#inpId").val(),
                Name: $("#InpName").val(),
                LastName: $("#InpApellido").val(),
                Email: $("#InpEmail").val(),
                Password: $("#InpPass").val(),
                typeUser: $("#SlcTipo").val(),
                Status: 1
            },
            success: function (response) {
                switch (response) {
                    case "OK":
                        Swal.fire({
                            icon: 'success',
                            title: 'Usuario Actualizado',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        GetUser();
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

    function AddUser() {
        $.ajax({
            url: "/Usuarios/AddUserApp",
            cache: false,
            type: "POST",
            data: {
                Name: $("#InpName").val(),
                LastName: $("#InpApellido").val(),
                Email: $("#InpEmail").val(),
                Password: $("#InpPass").val(),
                Type: $("#SlcTipo").val()
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
                        GetUser();
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