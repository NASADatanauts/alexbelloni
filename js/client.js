window.onload = initialize;

function initialize(){
  
  //Configures click event for each btn-level
  $('.btn-level').click( function(){
    var level = this.getAttribute('value');
    show(level);
  });

$('#btnGo').click( function () {
  show('advanced');
});

  //Initialize with easy level.
  show('easy');
}

//Prepares page for new level
function preparePage(){
    $('.art-level').hide();
    $('.btn-level').attr('disabled', true);
    $('.panel').empty();
}

function presentPage(level){
    $('.btn-level').attr('disabled', false);
    $('#' + level).show(); 
}

function show(level){

    preparePage(level);

    if(level == 'easy'){
      loadGymhEyc2(level, showDefaultData);
    }
    else if(level == 'intermediate'){      
      loadGymhEyc2(level, showBootstrapData);
    }
    else{
      loadAlternativeFuelLocations(level, showBootstrapData, showSearchOptions);
    }
}

function loadGymhEyc2(level, showData){
  $.ajax({
    url: "https://data.nasa.gov/resource/gymh-eyc2.json",
    data: {},
    success: function(data) {
      showData(level, data);
    },
    error: function(msg) {
      //todo: handle error gracefully
      presentPage(level);
    }
  });
}

function loadAlternativeFuelLocations(level, showData, callback){

  var column = $('#textColumn').val();
  var text = $('#textSearch').val();

  var search = 'fuel_type_code=LPG';

  if(column && text){
    search = column + "=" + text;
  }

  $.ajax({
    url: "https://data.cityofchicago.org/resource/alternative-fuel-locations.json?" + search,
    data: {},
    success: function(data) {
      showData(level, data, callback);
    },
    error: function(msg) {
      //todo: handle error gracefully
      presentPage(level);
    }
  });
}

function showDefaultData(level, data){

      $("#"+ level + " .panel").append("<pre></pre>");

      var d = JSON.stringify(data, null, "\t");
      $("#"+ level + " .panel" +" pre").text(d);

      presentPage(level);
}

function showBootstrapData(level, data, callback){

      var tblName = "tbl"+level;

      $("#"+ level + " .panel").append('<table id="'+ tblName +'" class="table table-striped table-bordered"></table>');   
      $("#" + tblName).append("<thead><tr></tr></thead>");

      if((data)&&(data.length > 0)){

        //Writes all columns
        var columns = Object.keys(data[0]);
        columns.forEach(function(col){
          $("#" + tblName + " thead tr").append("<td>"+ col +"</td>");
        });

        //Writes all items
        data.forEach(function(item, i){

          var rowName = tblName + "tblrow"+ i;

          $("#" + tblName).append("<tr id='"+ rowName +"'></tr>");

          columns.forEach(function(col){
            $("#" + rowName).append("<td>"+ item[col] + '</td>');
          }, item);

        }, columns);

        if(callback){
          callback(data);
        }
      }

      presentPage(level);
}

function showSearchOptions(data){

      $("#dropdownSearch").empty();

      //Writes all columns
      var columns = Object.keys(data[0]);
      columns.forEach(function(col){
        $("#dropdownSearch").append('<li><span class="option" href="'+col+'">'+ col +'</span></li>');
      });

    $('.option').click(function( eventObject ) {
      var elem = $( this );
      var text = elem.attr( "href" );
      console.log(text);
      $('#textColumn').val(text);
    });


}

