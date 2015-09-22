$(function(){
  $('#calculate').click(function(e){
    e.preventDefault();
    //alert('');
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
      if($(this).val() !== ""){
        $(this).removeClass('class-error');
      }
      else{$(this).addClass('class-error');}
    });
  });
});
