$(document).ready(function(){

    $("button[aria-controls='collapse_one']").click(function(){
      $("#collapse_one").slideToggle("slow");
    });
    $("button[aria-controls='collapse_two']").click(function(){
      $("#collapse_two").slideToggle("slow");
    });
    $("button[aria-controls='collapse_three']").click(function(){
      $("#collapse_three").slideToggle("slow");
    });

    $("button[onclick='tru']").click(function(){
      if($("#detail_quantity").val() > 1){
        $("#detail_quantity").val( $("#detail_quantity").val() - 1)
      }
    });

    $("button[onclick='cong']").click(function(){
      
        $("#detail_quantity").val( Number($("#detail_quantity").val()) + 1)

    });


    $('input[type=file]').change(function(){
      s=$('input[type=file]').val().replace('C:\\fakepath\\', '');
      moveupload("'input[type=file]').val()","../image/"+s)
    })


  });