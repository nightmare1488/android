jQuery(function(){
  var app = $('#appetize');
  
  $("#setkey").on('click', function(){
    var key = $( '#key' ).val();
    var src = app.attr('src');
    var replaced = src.replace( /\<PRIVATEKEY\>/g, key );
    app.attr( 'src', replaced );
  });
});