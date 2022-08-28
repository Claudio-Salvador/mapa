$(document).ready(function(){

    $("#MapaAngola").bind('mouseover',  function (e) {
        if(e.target.id!="MapaAngola"){
            let id=e.target.id;
            let colorProvince=$('#'+id).attr('fill',"red");
            console.log($('#'+id));
         
        }
    });
   //Mouse 
    $("#MapaAngola").bind('mouseout',  function (e) {
        if(e.target.id!="MapaAngola"){
            let id=e.target.id;
            let colorProvince=$('#'+id).attr('fill',"#99999");
            console.log($('#'+id));
         
        }
    });
   


});