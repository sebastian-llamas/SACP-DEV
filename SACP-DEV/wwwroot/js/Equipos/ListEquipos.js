$(document).ready(function () {

    $('.default-date-picker').datepicker({
        format: 'mm-dd-yyyy'
    });
    var table = $("#EquipoTable").DataTable({
        dom: 'Bfrtip',
        bPaginate: true,
        bLengthChange: false,
        bInfo: false,
        bAutoWidth: false,
        buttons: [
            {
                text: 'Crear',
                className: 'btn-gray',
                action: function (e, dt, node, config) {
                    ResetInputs();
                    $("#EquipoModal").modal('toggle');
                }
            },
            {
                text: 'Editar',
                className: 'btn-blue',
                action: function (e, dt, node, config) {
                    Edit();
                    $("#EquipoModal").modal('toggle');
                }
            },
            {
                text: 'Eliminar',
                className: 'btn-red',
                action: function (e, dt, node, config) {
                    alert('Button activated');
                }
            },
            {
                extend: 'excel',
                text: 'Excel',
                className: 'btn-green'
            }
        ],
        initComplete: function () {
            
            $('.btn-red').prop('disabled', true);
            $('.btn-blue').prop('disabled', true);
        }
    });

    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);


    $('#EquipoTable tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
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


    function Edit() {
        ResetInputs();
        var [dataRow] = table.rows('.selected').data().toArray();
        console.log(dataRow);
        $('#InpProduct').val(dataRow[1]);
        $('#InpDescript').val(dataRow[2]);
        $('#InpBrand').val(dataRow[3]);
        $('#InpModel').val(dataRow[4]);
        $('#InpStock').val(dataRow[5]);
        $('#InpProveedor').val(dataRow[6]);
        $('#InpUbicacion').val(dataRow[7]);

    }


    function ResetInputs() {
        $('#InpProduct').val("");
        $('#InpDescript').val("");
        $('#InpBrand').val("");
        $('#InpModel').val("");
        $('#InpStock').val("");
        $('#InpProveedor').val("");
        $('#InpUbicacion').val("");
    }
});