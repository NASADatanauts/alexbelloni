window.onload = initialize;

function initialize(){
  
  $('.btn-level').click(function(){
    $('.art-level').hide();
    var value = this.getAttribute('value');
    showGymh(value);
    $('#' + value).show();
  });

  showGymh('easy');
}

function showGymh(div){
  $.ajax({
    url: "https://data.nasa.gov/resource/gymh-eyc2.json",
    data: {},
    success: function(data) {
      var d = JSON.stringify(data, null, "\t");
      $("#"+div+" pre").text(d);
    },
    error: function(msg) {
      //todo: handle error gracefully
    }
  });
}



