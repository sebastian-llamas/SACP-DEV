var Usuarios = [{ id: "031711", Nombre: "Sebastian Llamas", Grupo: "10-B", Tutor: "Florecio Lopez", Tutor: "Jose Reyes", cls: "Ingles", Tur:"Matutino" },
    { id: "031712", Nombre: "Andres Flores", Grupo: "10-B", Tutor: "Florecio Lopez", Tutor: "Jose Reyes", cls: "Programcion", Tur: "Matutino"},
    { id: "031713", Nombre: "Benjamin Ramirez", Grupo: "10-C", Tutor: "Jose Reyes", cls: "Redes", Tur: "Matutino"}];



var Producto = [{ id: "1234", Foto: "photo1", Producto: "Mac 2012", Description: "Mac 2012 Late", c:1 },
                { id: "1243", Foto: "photo2", Producto: "Mac 2012", Description: "Mac 2012 Late",c:1 },
                { id: "1235", Foto: "photo3", Producto: "Mouse Logitech", Description: "Mouse", c:1 },
                { id: "123", Foto: "photo4", Producto: "Teclado Dell", Description: "Teclado 2020", c:1 }];

var onHand = [];

$(document).ready(function () {
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


    $("#inpMar").focus(function () {
        $(this).keypress(function (e) {
            if (e.which == 13) {
                if ($("#inpMar").val().trim().length > 2) {
                    findProduc($("#inpMar").val());
                }
            }
        });
    });



    function FindUser(Id) {
        let valor = Usuarios.filter((val, index, array) => {
            return val.id == Id; 
        });
        if (valor.length > 0) {
            $("#NameAlum").text(`${valor[0].Nombre}`);
            $("#matAlum").text(`${valor[0].id}`);
            $("#GrupoAlum").text(`${valor[0].Grupo}`);
            $("#turnAlum").text(`${valor[0].Tur}`);
            $("#classAlum").text(`${valor[0].cls}`);
            $("#AdvisorAlum").text(`${valor[0].Tutor}`);
            $("#inpMar").prop('disabled', false);

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Alumno no existente',
                text:"Por favor revisar la matricula"
            });
        }
  
    }

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
});