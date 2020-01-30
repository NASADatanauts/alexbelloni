window.onload = initialize;
function initialize(){
  $('nav').html(`
    <div class="container-fluid">
      <div class="navbar-header">
          <a class="navbar-brand" href="../index.html">
              <img src="../images/logo.png" alt="alexandre belloni" class="d-inline-block align-top">
          </a>
          <h2 class="navbar-text">My journey as a NASA Datanaut</h2>
      </div>
    </div>
  `);
  $('.about').html(`
    <section class='container'>
    <div class='row'>
        <div class='col-md-6'>
            <h3>Program</h3>
            <div id='nasadatanauts'>
                NASA Datanauts Program is a community within OpenNASA and The Innovation departments.<br />
                More details: <a target='_blank' href='https://open.nasa.gov/explore/datanauts/'>here</a>
            </div>
        </div>
        <div class='col-md-6'>
            <h3>About</h3>
            <div>I'm Alexandre Belloni Alves, a software developer working as a member since the Spring
                class 2017.<br />
                More details: <a href="./stepbystep.html">here</a> | <a target='_blank'
                    href='https://github.com/NASADatanauts/alexbelloni'>github</a> | <a target='_blank'
                    href='https://alexandrebelloni.com'>website</a>
            </div>
        </div>
    </div>
  </section>  
  `)
  $('.footer').html('<footer class="container text-center"><h6>2020 - alexandre belloni alves</h6></footer>')

  var bodyId = $('body').attr('id')
  var pages = [
    {id:'projects', file:'projects', name:'My Projects over the Program', date: 20191031},
    {id:'member', file:'stepbystep', name:'Being a member', date: 20191030},
    {id:'spaceapps2019', file:'spaceapps2019', name:'Some tips about the NASA Space Apps Challenge', date: 20180711},
  ]
  var idxStories = $('#index-stories');
  if(idxStories){
    idxStories.html(pages.filter(p=>p.id !== bodyId).sort((a,b)=>b.date - a.date).map(p=>"<a href='pages/"+p.file+".html'>"+p.name+"</a><br/>"))
  }  
  var stories = $('#stories');
  if(stories){
    stories.html(pages.filter(p=>p.id !== bodyId).sort((a,b)=>b.date - a.date).map(p=>"<a href='./"+p.file+".html'>"+p.name+"</a><br/>"))
  }
}


