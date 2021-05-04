var Usuario;



var Producto;

var onHand = [];


$(document).ready(function () {
    InitSelect();
   var tb = $("#AlumTable").DataTable({
        bPaginate: true,
        bLengthChange: false,
        searching: false,
        info: false,
        bAutoWidth: false,
        columns: [
            { data: 'id' },
            { data: 'Foto' },
            { data: 'Producto' },
            { data: 'c' },
            { data: 'Description' }
        ],
        columnDefs: [
            {
                "targets": [0],
                "visible": false,
                "searchable": false
            }
        ]
    });



    $("#InputUser").focus(function () {
        $(this).keypress(function (e) {
            if (e.which == 13) {
                if ($("#InputUser").val().trim().length > 2) {
                    FindUser($("#InputUser").val());
                }
            }
        });
    });


    
    
    $("#e2").change(function () {
        if ($("#e2").val() != "") {
            GetAlumno();
        }
    });


    function ResetUser() {
        $("#NameAlum").text("-");
        $("#matAlum").text("-");
        $("#GrupoAlum").text("-");
        $("#turnAlum").text("-");
        $("#classAlum").text("-");
        $("#AdvisorAlum").text("-");
    }


    function findProduc(Marbete) {
        var LisProd = Producto.filter((val, ind, arr) => {
            return Marbete == val.id;
        });

        if (LisProd.length > 0) {

            FindOnHand(LisProd);

        } else {
            Swal.fire({
                icon: 'error',
                title: 'El Producto no existente',
                text: "Por favor revisar el marbete"
            });
        }
    }


    function FindOnHand([prod]) {
        var vl = onHand.some((val, ind, arr) => { val.id = prod.id });
        if (vl){
            Swal.fire({
                icon: 'error',
                title: 'El Producto ya fue selecionado',
                text: ""
            });
        } else {
            tb.rows.add(prod).draw();

            console.table(tb.rows().data().toArray());
        }
    }


    function GetAlumno() {
        $.ajax({
            url: "/Usuarios/GetAlumno",
            cache: false,
            type: "POST",
            data: {
                Matricula: $("#e2").val(),
                Grupo: null,
                Status: null
            },
            success: function (response) {
                [Usuario] = response;
                PutInforUser(Usuario);
            }
        });
    }


    function PutInforUser(Usuario) {
        $("#NameAlum").text(`${Usuario.fullname}`);
        $("#matAlum").text(`${Usuario.enrollment}`);
        $("#GrupoAlum").text(`${Usuario.grade}`);
        $("#turnAlum").text(`Vespertino`);
        $("#classAlum").text(`-`);
        $("#AdvisorAlum").text(`${Usuario.createD_BY}`);
        $("#inpMar").prop('disabled', false);
    }


    function GetProduct() {
        $.ajax({
            url: "/Prestamos/GetPrestamo",
            cache: false,
            type: "POST",
            data: {
                Marbete: $("#e2").val(),
                
            },
            success: function (response) {
                [Usuario] = response;
                PutInforUser(Usuario);
            }
        });
    }
    function InitSelect() {
        $('#e2').select2();
    }
});