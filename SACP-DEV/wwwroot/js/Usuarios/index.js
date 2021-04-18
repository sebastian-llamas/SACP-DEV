$(document).ready(function () {

    $('#e2').select2();
    
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
                    DeleteRow();
                }
            }
        ],
        columnDefs: [
            {
                "targets": [0],
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
        $(this).toggleClass('selected');
        
        CheckRow();
    });


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
        $("#ContPass").addclass("hidden");
        $('#NewUsuario').modal('toggle');
        ResetInputs();
        var dataRow = table.rows('.selected').data().toArray();
        console.table(table.rows('.selected').data().toArray());

        $('#InpName').val(dataRow[0][1]);
        $('#InpApellido').val(dataRow[0][2]);
        $('#InpEmail').val(dataRow[0][3]);
        $('#InpPass').val("");
        
    }

    function ResetInputs() {
        $('#InpName').val("");
        $('#InpApellido').val("");
        $('#InpEmail').val("");
        $('#InpPass').val("");
    }
});