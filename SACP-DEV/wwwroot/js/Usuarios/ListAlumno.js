$(document).ready(function () {

    $('#e2').select2();
    $('#e3').select2();
    var table = $("#AlumTable").DataTable({
        dom: 'Bfrtip',
        bPaginate: true,
        bLengthChange: false,
        bInfo: false,
        bAutoWidth: false,
        language: {search:"<b>Buscar</b>"},
        buttons: [
            {
                text: 'Crear',
                className: 'btn-gray mt-10',
                action: function (e, dt, node, config) {
                    WModal();
                }
            },
            {
                text: 'Editar',
                className: 'btn-blue mt-10',
                action: function (e, dt, node, config) {
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
        initComplete: function () {
            $.unblockUI();
            $('.btn-red').prop('disabled', true);
            $('.btn-blue').prop('disabled', true);
        }
    });

    

    $('#AlumTable tbody').on('click', 'tr', function () {
        $(this).toggleClass('selected');
        CheckRow();
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
       
        console.log(table.rows('.selected').data().toArray());
        table.rows('.selected').remove().draw();

        Swal.fire({
            icon: 'success',
            title: 'Alumno Eliminado',
            showConfirmButton: false,
            timer: 1500
        });
    }

    function Editar() {
        $('#NewAlumno').modal('toggle');
        ResetInputs();
        var dataRow = table.rows('.selected').data().toArray();
        console.table(table.rows('.selected').data().toArray());

        $('#InpMatricula').val(dataRow[0][0]);
        var name = dataRow[0][1];
        var arrName = name.split(" ");
        $('#InpNombre').val(arrName[0]);
        $('#InpApellido').val(arrName[1] + " " + arrName[2]);
        $('#InpEmail').val(dataRow[0][3]);
        $('#InpTelefono').val(dataRow[0][3]);
        $('#SlcGroup').val(dataRow[0][2 ]);
        $('#SlcDocente').val(dataRow[0][5]);
    }

    function ResetInputs() {
        $('#InpMatricula').val("");
        $('#InpNombre').val("");
        $('#InpApellido').val("");
        $('#InpEmail').val("");
        $('#InpTelefono').val("");
        $('#SlcGroup').val("");
        $('#SlcDocente').val("");
    }
});