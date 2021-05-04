$(document).ready(function () {
    var EditLflag = 0;
    InitSelect();
    var table = $("#AlumTable").DataTable({
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
                    EditLflag = 0;
                    $('#InpMatricula').prop('disabled', false);
                    WModal();
                }
            },
            {
                text: 'Editar',
                className: 'btn-blue mt-10',
                action: function (e, dt, node, config) {
                    EditLflag = 1;
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
            { data: "enrollment" },
            { data: "fullname" },
            { data: "grade" },
            { data: "email" },
            { data: "phone" },
            { data: "createD_BY" },
            { data: "createD_ON" },
            { data: "lasT_NAME" },
            { data: "name" }
        ],
        columnDefs: [
            {
                "targets": [7],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [8],
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

    
    getAlumno();
    $('#AlumTable tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
        CheckRow();
    });

    $("#btn-query").click(function () {
        getAlumno();
    });

    $("#btn-save").click(function () {

        if ($('#InpMatricula').val().trim().length > 3 && $('#InpNombre').val().trim().length > 3
            && $('#InpApellido').val().trim().length > 3 && $('#InpEmail').val().trim().length > 3
            && $('#InpTelefono').val().trim().length > 3 && $('#SlcGroup').val().length > 0) {

            if (EditLflag > 0) {
                EditUser();
            } else {
                
                AddUser();
            }


        }else {
            Swal.fire({
                icon: 'error',
                title: 'Todos los campos deben de estar llenos',
                text: ""
            });
        }



    });

    function WModal() {
        ResetInputs();
        $('#NewAlumno').modal('toggle');
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
       
        let [user] = table.rows('.selected').data().toArray();
        
        
        DeleteUser(user.enrollment);
        
        
    }

    function Editar() {
        $('#InpMatricula').prop('disabled', true);
        $('#NewAlumno').modal('toggle');

        ResetInputs();
        var [dataRow] = table.rows('.selected').data().toArray();
        console.table(table.rows('.selected').data().toArray());

        $('#InpMatricula').val(dataRow.enrollment);
        $('#InpNombre').val(dataRow.name);
        $('#InpApellido').val(dataRow.lasT_NAME);
        $('#InpEmail').val(dataRow.email);
        $('#InpTelefono').val(dataRowphone);
        $('#SlcGroup').val("1").trigger("change");
        //$('#SlcDocente').val(dataRow[0][5]);
    }

    function ResetInputs() {
        $('#InpMatricula').val("");
        $('#InpNombre').val("");
        $('#InpApellido').val("");
        $('#InpEmail').val("");
        $('#InpTelefono').val("");
        $('#SlcGroup').val("").trigger("change");
        $('#SlcDocente').val("");
    }


    function getAlumno() {
        $.ajax({
            url: "/Usuarios/GetAlumno",
            cache: false,
            type: "POST",
            data: {
                Matricula: $("#e2").val(),
                Grupo: $("#e3").val(),
                Status: $("#sltcEstatus").val()
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

    function DeleteUser(UserID) {
        $.ajax({
            url: "/Usuarios/DeleteUser",
            cache: false,
            type: "POST",
            data: {
               User: UserID
            
            },
            success: function (response) {
                if (response == "OK") {
                    table.rows('.selected').remove().draw();
                    Swal.fire({
                        icon: 'success',
                        title: 'Alumno Eliminado',
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

    function AddUser() {
        $.ajax({
            url: "/Usuarios/AddUser",
            cache: false,
            type: "POST",
            data: {
                Matricula: $("#InpMatricula").val(),
                Name: $("#InpNombre").val(),
                LastName: $("#InpApellido").val(),
                Email: $("#InpEmail").val(),
                Grupo: $("#SlcGroup").val(),
                Phone: $("#InpTelefono").val()
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

    function EditUser() {
        $.ajax({
            url: "/Usuarios/UpdateUser",
            cache: false,
            type: "POST",
            data: {
                Matricula: $("#InpMatricula").val(),
                Name: $("#InpNombre").val(),
                LastName: $("#InpApellido").val(),
                Email: $("#InpEmail").val(),
                Grupo: $("#SlcGroup").val(),
                Phone: $("#InpTelefono").val()
            },
            success: function (response) {
                switch (response) {
                    case "OK":
                        getAlumno();
                        Swal.fire({
                            icon: 'success',
                            title: 'Alumno Actualizado',
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

    function InitSelect() {
        $('#e2').select2();
        $('#e3').select2();
        $('#SlcGroup').select2(); 
        $('#sltcEstatus').select2();
    }
});