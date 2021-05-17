
$('#ajax').click(function (e) { 
    e.preventDefault();
    $.ajax({
            url:'empleados.json',
            type:'get',
            dataType:'json',
            success:function(data){
                console.log(data);
                $.each(data.empleados, function (i, item) { 
                    $('#listaEmpleados').html($('#listaEmpleados').html()+`
                    <li> ${item.nombre} </li>
                    `);
                });
            },
            error:function(xhr,status,error){
                console.log(xhr);
                console.log(status);
                console.log(error);
            }
        });
    });