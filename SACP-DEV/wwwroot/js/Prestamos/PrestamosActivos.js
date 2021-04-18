$(document).ready(function () {

    $('#InpFecha').datepicker({
        format: 'mm-dd-yyyy'
    });
    $('#e2').select2();

    var table = $("#PrestamoTable").DataTable({
        dom: 'Bfrtip',
        bPaginate: true,
        bLengthChange: false,
        bInfo: false,
        bAutoWidth: false,
        language: { search: "<b>Buscar</b>" },
        buttons: [
            {
                text: 'Editar',
                className: 'btn-blue mt-10',
                action: function (e, dt, node, config) {
                    $("#SetItems").modal('toggle');
                }
            },
            {
                text: 'Terminar',
                className: 'btn-red mt-10',
                action: function (e, dt, node, config) {
                   
                }
            }
        ],
        initComplete: function () {
            $('.btn-red').prop('disabled', true);
            $('.btn-blue').prop('disabled', true);
        }
    });


    $('#PrestamoTable tbody').on('click', 'tr', function () {
        $(this).toggleClass('selected');
        CheckRow();
    });

    $("#PrestamoTable tbody").on('dblclick', 'tr', function (e) {
        $("#SetItems").modal('toggle');
        CheckRow();
    });

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
});