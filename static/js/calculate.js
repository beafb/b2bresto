$("#crypto").change(function() {
  var curr = $('#crypto').val();
  var visitors = parseInt($("#visitors").val());
  if (curr == '$' || curr == '€') {
    var dev = curr;
    var mult = curr == "$" ? 120000 : 100000;
    console.log('mult --> '+mult)
    console.log('curr --> '+curr)
    var cprice2 = mult*visitors;
    $('#price').text(cprice2 + " " + dev);
  }
  else {
  $.get( "https://api.cryptonator.com/api/ticker/"+curr+"-eur", function( data ) {
    var price = Math.floor(data.ticker.price);
    console.log('price ==> '+price)
    var cprice = (100000*visitors)/price;
    var cprice2 = cprice.toFixed(3)
    $('#price').text(cprice2 + " " + curr);
  });
}
})
$("#visitors").change(function() {
  var curr = $('#crypto').val();
  var visitors = parseInt($("#visitors").val());
  if (curr == '$' || curr == '€') {
    var dev = curr;
    var mult = curr == "$" ? 120000 : 100000;
    var cprice2 = mult*visitors
    $('#price').text(cprice2 + " " + dev);
  }
  else {
  $.get( "https://api.cryptonator.com/api/ticker/"+curr+"-eur", function( data ) {
    var price = Math.floor(data.ticker.price);
    var cprice = (100000*visitors)/price;
    var cprice2 = cprice.toFixed(3)
    $('#price').text(cprice2 + " " + curr);
  });
  }
})
