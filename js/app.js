$(function(){
  $(calculate).click(function(e){
    e.preventDefault();
    $('.results').animate({
      opacity:0
    },1000);
    $('.results').animate({
      opacity:1
    },1000);

    //error handling
    $("input[type='text']").each(function(){
      if($(this).val() === ""){
        $(this).addClass('class-error');
      }
      else if($(this).val() !== "") {
        $(this).removeClass('class-error');
      }
    });

    $("input[type='text']" ).change(function() {
      //$(this).removeClass('class-error');
      if($(this).val() !== ""){
        $(this).removeClass('class-error');
      }
      else{$(this).addClass('class-error');}
      //else{$(this).removeClass('class-error');}
    });



      // if($('#feet').text() === ""){
      //   $('#feet').addClass('class-error');
      // }
      // else if($('#inches').text() === ""){
      //   $('#inches').addClass('class-error');
      // }
      // else if($('#pound').text() === ""){
      //   $('#pound').addClass('class-error');
      // }
      // else if($('#kgs').text() === ""){
      //   $('#kgs').addClass('class-error');
      // }
      // else{
      //     $('#feet').removeClass('class-error');
      //     $('#inches').removeClass('class-error');
      //     $('#pound').removeClass('class-error');
      //     $('#kgs').removeClass('class-error');
      // }
    });
});
