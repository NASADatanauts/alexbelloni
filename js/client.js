window.onload = initialize;

function initialize(){
  
  //Configures click event for each btn-level
  $('.btn-level').click( function(){
    var level = this.getAttribute('value');
    show(level);
  });

$('#btnGo').click( function () {
  //This button is in advanced level only.
  show('advanced');
});

  //Initialize with easy level.
  show('easy');
}

//Prepares page for new level. Before data
function preparePage(){
    $('.art-level').hide();
    $('.btn-level').attr('disabled', true);
    $('.panel').empty();
    $('#paginationTabs').empty();    
}

//After data
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
      loadGymhEyc2(level, showBootstrapData, true);
    }
    else{
      loadAlternativeFuelLocations(level, showBootstrapData, true, showSearchOptions);
    }
}

function loadGymhEyc2(level, showData, isPaged){
  $.ajax({
    url: "https://data.nasa.gov/resource/gymh-eyc2.json",
    data: {},
    success: function(data) {
      showData(level, data, isPaged);
      $('.countIndicator').text("[total of lines: " + data.length + "]");      
    },
    error: function(msg) {
      //todo: handle error gracefully
      presentPage(level);
    }
  });
}

function loadAlternativeFuelLocations(level, showData, isPaged, callback){

  var column = $('#textColumn').val();
  var text = $('#textSearch').val();

  //default search
  var search = 'fuel_type_code=LPG';

  if(column && text){
    search = column + "=" + text;
  }

  var url = "https://data.cityofchicago.org/resource/alternative-fuel-locations.json?" + search;
  console.log(url);

  $.ajax({
    url: url,
    data: {},
    success: function(data) {
      showData(level, data, isPaged, callback);
      $('.countIndicator').text("[total of lines: " + data.length + "]");
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

function showBootstrapData(level, data, isPaged, callback){

      if((data)&&(data.length > 0)){

        if(isPaged){
          localStorage.setItem("data", JSON.stringify(data));
          createPagination(level, data);
          showPage(level, 1);
        }
        else{
          showData(level, data);          
        }

        if(callback){
          callback(data);
        }
      }

      presentPage(level);
}

function createPagination(level, data){
  var pages = getPageIndications(data.length);

  for(var i=1; i <= pages; i++){
    $('#paginationTabs').append('<li><a href="javascript:void(0);" onclick="showPage(' + "'" + level + "'" + ',' + i +');">'+ i +'</a></li>');
  }
}

var MAX_PER_PAGE = 25;

function getPageIndications(length){
  var pages = length / MAX_PER_PAGE;
  if(length % MAX_PER_PAGE > 0)
    pages++;
  return pages;
}

function getData(paginationId){
  var data = JSON.parse(localStorage.getItem("data"));

  var length = data.length;

  var offset = (paginationId-1) * MAX_PER_PAGE;
  if(offset > length)
    return;

console.log('paginationId: ' + paginationId + ', total length: ' + length + ', offset: ' + offset);

  var newData = [];

  var max = (offset+MAX_PER_PAGE) <= length ? (offset+MAX_PER_PAGE) : offset + (length - offset);

  for(var i=offset; i < max; i++){
    newData.push(data[i]);
  }

  return newData;
}

function showData(level, data){
      var tblName = "tbl"+level;

      $("#" + tblName).empty();

      $("#"+ level + " .panel").append('<table id="'+ tblName +'" class="table table-striped table-bordered"></table>');   
      $("#" + tblName).append("<thead><tr></tr></thead>");

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
          $("#" + rowName).append("<td>"+ (item[col] ? item[col] : '-')  + '</td>');
        }, item);

      }, columns);
}

function showPage(level, paginationId){

        var partialData = getData(paginationId);
        showData(level, partialData);

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

