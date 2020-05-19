window.onload = initialize;
function initialize(){
  $('#nav-div').html(`
    <div id="nav-container" class="container">
      <nav id="nav-main" class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="../index.html">
          <img src="logo.png" width="30" height="30" class="d-inline-block align-top" alt="logo">&nbsp;&nbsp;&nbsp;My Datanaut Journey
        </a>
      </nav>
    </div>
  `);
  $('.about').html(`
    <section class='container'>
    <div class='row'>
        <div class='col-md-6'>
            <span class="second-title">Program</span>
            <div id='nasadatanauts'>
            <p>NASA Datanauts Program is a community within OpenNASA and The Innovation departments.<br />
                <a target='_blank' href='https://open.nasa.gov/explore/datanauts/'>here</a>
                </p>
            </div>
        </div>
        <div class='col-md-6'>
            <h3>About</h3>
            <div>
            <p>I'm Alex, a software developer working as a member since 2017 in the Spring
                class.<br />
                <a href="./stepbystep.html">here</a> | <a target='_blank'
                    href='https://github.com/NASADatanauts/alexbelloni'>github</a> | <a target='_blank'
                    href='https://alexandrebelloni.com'>website</a>
                    </p>
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
    //{id:'capsule01', file:'capsule01', name:'Introducing Datanaut Capsule', date: 20200131},
    {id:'capsule-websites', file:'capsule-websites', name:'Huge list of space websites', date: 20200211},
    //Blog that guides into NASA Open Data, Open Code resources and others, levels in beginner intermediate advanced categories, and shares knowledge on social medias.
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

function setBoxLink(title, url, comment){
  // return `<div class="alert alert-light" role="alert"> <a href="${url}" class="alert-link">${title}</a><br/>${comment} </div>`
  return `
<div class="card">
  <div class="card-body">
    <h5 class="card-title"><a href="${url}" class="card-link">${title}</a></h5>
    ${comment ? `<p class="card-text">${comment}</p>` : ""}
  </div>
</div>
`
}

/**
covering data science, APIs, videos, different datasets (what datasets are best for your use case)
NASA Open Data and Open Code
- suggestions: 
  -how to setup a github repository and  host pages on github 
  -what is mentor and mentorship
actions outside the program and spaceapps
social media
level (beginner intermediate advanced)

produce a standard brief biography / Share anything we’re doing
 */
