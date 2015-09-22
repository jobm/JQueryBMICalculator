$(function(){
  $('#calculate').click(function(e){
    e.preventDefault();
    if(!$("input[type='text']" ).hasClass('class-error')){
      if(isInt($('#feet').val())){
        alert("int");
      }
      else {
        alert("Not Int");
      }
    }
    $('.results').animate({
      opacity:0
    },1000);
    $('.results').animate({
      opacity:1
    },1000);

    //checking whether input is an int
    function isInt(value) {
      var x;
      if (isNaN(value)) {
        return false;
      }
      x = parseFloat(value);
      return (x | 0) === x;
    }
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
