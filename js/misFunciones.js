function getInfBoat(){
    $.ajax({
        headers:{
            accept: 'application/json',"Access-Control-Allow-Origin":"*"
        },
        url:"https://gb7bf18b6bc327f-vxq0wy0yvagsfuc7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat",
        type:"GET",
        datatype:"JSON",
        success: function(respuesta){
            console.log(respuesta);
            $("#resultadoBote").empty();
            showBoat(respuesta.items)
        },
        error: function(xhr, status){
            alert("ha sucedido un problema");
            console.log(status);
        },
        complete : function(xhr, status){
            alert("Petición realizada con exito");
            console.log("Todo OK");
        }
    });
}
function obtenerItems(){
    $.ajax({
        headers:{
            accept: 'application/json',"Access-Control-Allow-Origin":"*"
        },
        url:"https://gb7bf18b6bc327f-vxq0wy0yvagsfuc7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat",
        type:"GET",
        datatype:"JSON",
        success: function(respuesta){
            console.log(respuesta);
            verificarIdBoat(respuesta.items)
        },
        error: function(xhr, status){
            alert("ha sucedido un problema");
            console.log(status);
        },
        complete : function(xhr, status){
            alert("Petición realizada");
            console.log("Todo OK");
        }
    });
}


function verificarIdBoat(items){
    verificar=false;
    let idBote = $("#idBote").val();
    let id2 = $("#id").val();
    items.forEach(object =>{
        if((object.id == idBote) || (object.id == id)){
            verificar = true;
        }
    });
    return verificar;
}


function queryByIdBoat(){
    let idBote = $("#idBote").val();
    if(idBote === ""){
        alert("Debe digitar el ID")
    }else{
            $.ajax({
                headers:{
                    accept: 'application/json',"Access-Control-Allow-Origin":"*"
                },
                url:"https://gb7bf18b6bc327f-vxq0wy0yvagsfuc7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat" + "/" + idBote,
                type:"GET",
                datatype:"JSON",
                success: function(respuesta){
                    console.log(respuesta);
                    $("#resultadoBote").empty();
                    if(verificarIdBoat(respuesta.items)){
                        showBoat(respuesta.items);
                    }else{
                        alert("el ID no se encuentra resgistrado")
                    }
                },
                error: function(xhr, status){
                    alert("ha sucedido un problema");
                    console.log(status);
                },
                complete : function(xhr, status){
                    alert("Petición realizada con exito");
                    console.log("Todo OK");
                }
            });
    }
}
                                                                                                
function showBoat(items){
    let myTable = "<table>";
    myTable += "<thead>";
    myTable += "<tr>";
    myTable += "<td>"+"ID"+"</td>";
    myTable += "<td>"+"BRAND"+"</td>";
    myTable += "<td>"+"MODEL"+"</td>";
    myTable += "<td>"+"CATEGORY_ID"+"</td>";
    myTable += "<td>"+"NAME"+"</td>";
    myTable += "<td>"+"BUTTON"+"</td>";
    myTable += "</tr>";
    myTable += "</thead>";
    for(i = 0; i < items.length; i++){
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].brand + "</td>";
        myTable += "<td>" + items[i].model + "</td>";
        myTable += "<td>" + items[i].category_id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td> <button onclick='removeInfBoat("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoBote").append(myTable);
}

function addInfoBoat(){
    let myData = {
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend = JSON.stringify(myData);
        $.ajax({
            headers:{
                accept: 'application/json',"Access-Control-Allow-Origin":"*"
            },
            url:"https://gb7bf18b6bc327f-vxq0wy0yvagsfuc7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat",
            type:"POST",
            data:myData,
            datatype:"JSON",
            success:function(respuesta){
                $("#resultado").empty();
                $("#resultado").empty();
                $("#id").val("");
                $("#brand").val("");
                $("#model").val("");
                $("#category_id").val("");
                $("#name").val("");
                getInfBoat();
            },
            error : function(xhr, status){
                alert("ha sucedido un problema");
                console.log(status);
            },
            complete : function(xhr, status){
                alert("Se ha creado bote exitosamente")
                console.log("Todo OK");
            }
        });
}

function modInfBoat(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    }
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        headers:{
            accept: 'application/json',"Access-Control-Allow-Origin":"*"
        },
        url:"https://gb7bf18b6bc327f-vxq0wy0yvagsfuc7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
                $("#resultado").empty();
                $("#id").val("");
                $("#brand").val("");
                $("#model").val("");
                $("#category_id").val("");
                $("#name").val("");
                getInfBoat();
            },
            error : function(xhr, status){
                alert("ha sucedido un problema");
                console.log(status);
            },
            complete : function(xhr, status){
                alert("Se ha actualizado bote exitosamente");
                console.log("Todo OK");
            }
        });
    }

function removeInfBoat(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb7bf18b6bc327f-vxq0wy0yvagsfuc7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            getInfBoat();
        },
        error : function(xhr, status){
            alert("ha sucedido un problema");
            console.log(status);
        },
        complete : function(xhr, status){
            alert("Se ha eliminado bote exitosamente")
            console.log("Todo OK");
        }
    });
}
//==============================================================================================
//                                  CLIENTE
//==============================================================================================
function traerInfCliente(){
    $.ajax({
        headers:{
            accept: 'application/json',"Access-Control-Allow-Origin":"*"
        },
        url:"https://gb7bf18b6bc327f-vxq0wy0yvagsfuc7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success: function(respuesta){
            console.log(respuesta);
            $("#resultadoCliente").empty();
            pintarRespuestaCliente(respuesta.items)
        },
        error : function(xhr, status){
            alert("ha sucedido un problema");
            console.log(status);
        },
        complete : function(xhr, status){
            console.log("Todo OK");
        }
    });
}
function verificarIdClient(items){
    verificar=false;
    let idClient = $("#idClient").val();
    items.forEach(object =>{
        if(object.id == idClient){
            verificar = true;
        }
    });
    return verificar;
}
function queryByIdClient(){
    let idClient = $("#idClient").val();
    if(idClient === ""){
        alert("Debe digitar el ID")
    }else{
            $.ajax({
                headers:{
                    accept: 'application/json',"Access-Control-Allow-Origin":"*"
                },
                url:"https://gb7bf18b6bc327f-vxq0wy0yvagsfuc7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client" + "/" + idClient,
                type:"GET",
                datatype:"JSON",
                success: function(respuesta){
                    console.log(respuesta);
                    $("#resultadoCliente").empty();
                    $("#idCliente").val("");
                    $("#nombreCliente").val("");
                    $("#email").val("");
                    $("#age").val("");
                    if(verificarIdClient(respuesta.items)){
                        pintarRespuestaCliente(respuesta.items);
                    }else{
                        alert("el ID no se encuentra resgistrado")
                    }
                },
                error: function(xhr, status){
                    alert("ha sucedido un problema");
                    console.log(status);
                },
                complete : function(xhr, status){
                    alert("Petición realizada exitosamente")
                    console.log("Todo OK");
                }
            });
    }
}

function pintarRespuestaCliente(items){
    let myTable = "<table>";
    myTable += "<thead>";
    myTable += "<tr>";
    myTable += "<td>"+"ID"+"</td>";
    myTable += "<td>"+"NAME"+"</td>";
    myTable += "<td>"+"EMAIL"+"</td>";
    myTable += "<td>"+"AGE"+"</td>";
    myTable += "<td>"+"BUTTON"+"</td>";
    myTable += "</tr>";
    myTable += "</thead>";
    myTable += "<tr>";
    for(i = 0; i < items.length; i++){
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable += "<td> <button onclick='borrarCliente("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoCliente").append(myTable);
}
function guardarInfCliente(){
    let myData = {
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        headers:{
            accept: 'application/json',"Access-Control-Allow-Origin":"*"
        },
        url:"https://gb7bf18b6bc327f-vxq0wy0yvagsfuc7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoCliente").empty();
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#email").val("");
            $("#age").val("");
            traerInfCliente();
        },
        error : function(xhr, status){
            alert("ha sucedido un problema");
            console.log(status);
        },
        complete : function(xhr, status){
            alert("Se ha creado cliente exitosamente")
            console.log("Todo OK");
        }
    });
}
function editarInfCliente(){
    let myData = {
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        headers:{
            accept: 'application/json',"Access-Control-Allow-Origin":"*"
        },
        url:"https://gb7bf18b6bc327f-vxq0wy0yvagsfuc7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoCliente").empty();
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#email").val("");
            $("#age").val("");
            traerInfCliente();
        },
        error : function(xhr, status){
            alert("ha sucedido un problema");
            console.log(status);
        },
        complete : function(xhr, status){
            alert("Se ha Actualizado Cliente exitosamente");
            console.log("Todo OK");
        }
    });
}
function borrarCliente(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        headers:{
            accept: 'application/json',"Access-Control-Allow-Origin":"*"
        },
        url:"https://gb7bf18b6bc327f-vxq0wy0yvagsfuc7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoCliente").empty();
            traerInfCliente();
            
        },
        error : function(xhr, status){
            alert("ha sucedido un problema");
            console.log(status);
        },
        complete : function(xhr, status){
            alert("Se ha eliminado cliente exitosamente");
            console.log("Todo OK");
        }
    });
}
//=======================================================================================================
//                              MENSAJES
//=======================================================================================================
function traerMensaje(){
    $.ajax({
        headers:{
            accept: 'application/json',"Access-Control-Allow-Origin":"*"
        },
        url:"https://gb7bf18b6bc327f-vxq0wy0yvagsfuc7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success: function(respuesta){
            console.log(respuesta);
            pintarMensaje(respuesta.items)
        },
        error : function(xhr, status){
            alert("ha sucedido un problema");
            console.log(status);
        },
        complete : function(xhr, status){
            alert("Petición realizada");
            console.log("Todo OK");
        }
    });
}
function pintarMensaje(items){
    let myTable = "<table>";
    myTable += "<thead>";
    myTable += "<tr>";
    myTable += "<td>"+"ID"+"</td>";
    myTable += "<td>"+"MESSAGETEXT"+"</td>";
    myTable += "<td>"+"BUTTON"+"</td>";
    myTable += "</tr>";
    myTable += "</thead>";
    myTable += "<tr>";
    for(i = 0; i < items.length; i++){
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].messagetext + "</td>";
        myTable += "<td> <button onclick='borrarMensaje("+items[i].id+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoMensaje").append(myTable);
}
function guardarMensaje(){
    let myData = {
        id:$("#idMensaje").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        headers:{
            accept: 'application/json',"Access-Control-Allow-Origin":"*"
        },
        url:"https://gb7bf18b6bc327f-vxq0wy0yvagsfuc7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMensaje").empty();
            $("#idMensaje").val("");
            $("#messagetext").val("");
            traerMensaje();
        },
        error : function(xhr, status){
            alert("ha sucedido un problema");
            console.log(status);
        },
        complete : function(xhr, status){
            console.log("Todo OK");
        }
    });
}
function editarMensaje(){
    let myData = {
        id:$("#idMensaje").val(),
        messagetext:$("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        headers:{
            accept: 'application/json',"Access-Control-Allow-Origin":"*"
        },
        url:"https://gb7bf18b6bc327f-vxq0wy0yvagsfuc7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMensaje").empty();
            $("#idMensaje").val("");
            $("#messagetext").val("");
            traerMensaje();
        },
        error : function(xhr, status){
            alert("ha sucedido un problema");
            console.log(status);
        },
        complete : function(xhr, status){
            console.log("Todo OK");
        }
    });
}
function borrarMensaje(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        headers:{
            accept: 'application/json',"Access-Control-Allow-Origin":"*"
        },
        url:"https://gb7bf18b6bc327f-vxq0wy0yvagsfuc7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMensaje").empty();
            traerMensaje();
        },
        error : function(xhr, status){
            alert("ha sucedido un problema");
            console.log(status);
        },
        complete : function(xhr, status){
            console.log("Todo OK");
        }
    });
}