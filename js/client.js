window.onload = initialize;
function initialize(){
  $('.footer').html('<footer class="container text-center"><h6>2020 - alexandre belloni alves</h6></footer>')
  $('.about').html(`
  <section class='container'>
  <div class='row'>
      <div class='col-md-6'>
          <h3>Program</h3>

          <div id='nasadatanauts'>
              Datanauts Program is a community within OpenNASA and The Innovation departments by NASA.<br />
              More details: <a target='_blank' href='https://open.nasa.gov/explore/datanauts/'>here</a>
          </div>
      </div>
      <div class='col-md-6'>
          <h3>About</h3>

          <div>I'm Alexandre Belloni Alves, a software developer working as a Datanauts member since the Spring
              class 2017.<br />
              More details: <a href="./stepbystep.html">here</a> | <a target='_blank'
                  href='https://github.com/NASADatanauts/alexbelloni'>github</a> | <a target='_blank'
                  href='https://alexandrebelloni.com'>website</a>
          </div>
      </div>
  </div>
</section>  
  `)
  var bodyId = $('body').attr('id')
  var pages = [
    {id:'projects', file:'index', name:'My Projects over the Program'},
    {id:'member', file:'stepbystep', name:'Being a member'},
    {id:'spaceapps2019', file:'spaceapps2019', name:'Some tips about the NASA Space Apps Challenge'},
  ]
  $('#stories').html(pages.filter(p=>p.id !== bodyId).map(p=>"<a href='./"+p.file+".html'>"+p.name+"</a><br/>"))
}


