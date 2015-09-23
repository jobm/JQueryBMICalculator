$(function(){

  $("input[id='pound']").on('change',function(){
    $('#kgs').val(0);
    if($(this).val() !== ""){  $('#kgs').attr('disabled',true); }
    else{ $('#kgs').attr('disabled',false); }
  });

  $("input[id='kgs']").on('change',function(){
    $('#pound').val(0);
    if($(this).val() !== ""){  $('#pound').attr('disabled',true); }
    else{ $('#pound').attr('disabled',false); }
  });

  $('#calculate').click(function(e){
    e.preventDefault();
    //animating the results section after calculate button click
    $('.results').animate({
      opacity:0
    },500);
    $('.results').animate({
      opacity:1
    },500);
    //checking whether input is valid for calculations
    if(!$("input[type='text']" ).hasClass('class-error')){
      if(isInt($('#feet').val())&& isInt($('#inches').val()) && isInt($('#pound').val()) && isInt($('#kgs').val())){

        var feetToInches = toInches(Number($('#feet').val()));
        var totalOfInches = feetToInches + Number($('#inches').val());

        var squareHeight = Math.pow(totalOfInches,2);

        var devidebySquareHeight = 0;
        if(Number($('#kgs').val()) !== 0){
          devidebySquareHeight = toPounds(Number($('#kgs').val())) / squareHeight;
        }
        else{
          devidebySquareHeight = $('#pound').val() / squareHeight;
        }
        var toBmi= devidebySquareHeight * 703;
        var bmi = toBmi.toFixed(2);
        $('#bmi_results').text(bmi);
      }
    }

    //error handling
    $("input[type='text']").each(function(){
      if($(this).val() === "" || !isInt($(this).val())){
        $(this).addClass('class-error');
      }
      else if($(this).val() !== "" || isInt($(this).val())) {
        $(this).removeClass('class-error');
      }
    });

    //checking whether the input changed to not null
    $("input[type='text']" ).change(function() {
      if($(this).val() !== "" || isInt($(this).val())){
        $(this).removeClass('class-error');
      }
      else{$(this).addClass('class-error');}

    });
  });
  $('#reset').click(function(){
    $('#kgs').show();
    $('#pound').show();
  });
  //checking whether input is an int
  function isInt(value) {
    var x;
    if (isNaN(value)) {
      return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
  }

  //convert to inches
  function toInches(value){
    return value * 12;
  }

  //convert to pounds
  function toPounds(value){
    return value * 2.20462;
  }
});
