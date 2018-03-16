$("#crypto").change(function() {
  var curr = $('#crypto').val();
  var visitors = parseInt($("#visitors").val())/10;
  $.get( "https://api.cryptonator.com/api/ticker/"+curr+"-eur", function( data ) {
    var price = Math.floor(data.ticker.price);
    var cprice = (900*visitors)/price;
    var cprice2 = cprice.toFixed(3)
    $('#price').text(cprice2 + " " + curr);
  });
})
$("#visitors").change(function() {
  var curr = $('#crypto').val();
  var visitors = parseInt($("#visitors").val())/10;
  console.log(visitors)
  $.get( "https://api.cryptonator.com/api/ticker/"+curr+"-eur", function( data ) {
    var price = Math.floor(data.ticker.price);
    var cprice = (900*visitors)/price;
    var cprice2 = cprice.toFixed(3)
    $('#price').text(cprice2 + " " + curr);
  });
})
