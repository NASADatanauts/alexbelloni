window.onload = initialize;
function initialize() {
  //Adding the header
  $('#nav-div').html(`
    <div id="nav-container" class="container">
      <nav id="nav-main" class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="../index.html">
          <img src="logo.png" width="30" height="30" class="d-inline-block align-top" alt="logo">&nbsp;&nbsp;&nbsp;My Datanaut Journey
        </a>
      </nav>      
    </div>    
  `);
  //Adding info about the program and me
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
  //Adding the footer
  $('.footer').html('<footer class="container text-center"><h6>2020 - alexandre belloni alves</h6></footer>')

  //Pages of the blog (stories)
  var pages = [
    { id: 'projects', file: 'projects', name: 'My Projects over the Program', date: 20191031 },
    { id: 'member', file: 'stepbystep', name: 'Being a member', date: 20191030 },
    { id: 'spaceapps2019', file: 'spaceapps2019', name: 'NASA Space Apps Challenge tips', date: 20180711 },
    { id: 'capsule-websites', file: 'capsule-websites', name: 'Huge list of space websites', date: 20200211 },
    //Blog that guides into NASA Open Data, Open Code resources and others, levels in beginner intermediate advanced categories, and shares knowledge on social medias.
    {
      id: 'ambassador', file: 'ambassador', name: 'Ambassador of the Challenge', date: 20200603,
      banner: { image: "https://res.cloudinary.com/dnzozanco/image/upload/v1596826466/blogbanners/Ambassador_of_the_Challenge_klef2i.jpg", caption: "COVID-19 Concept Free Stock Photo - Public Domain Pictures" }
    },
    {
      id: 'asteroidnn4', file: 'asteroidnn4', name: 'The Asteroid 2002 NN4', date: 20200606,
      banner: { image: "https://res.cloudinary.com/dnzozanco/image/upload/v1593031312/blogbanners/asteroidnn4_qxnnk5.jpg", caption: "Artist’s impression of a Kuiper Belt object. font: NASA Image and Video Library" }
    },
  ];

  //Getting the story of the current page
  var bodyId = $('body').attr('id')
  var story = pages.find(p => p.id === bodyId);

  //Adding home button
  
  if (bodyId !== '0') {
    var button = $('#home-button');
    button.html(`<a href='../'>home</a>`);
  }

  //Adding the banner to the story if necessary
  var idBanner = $('#banner');
  if (story && story.banner && idBanner) {
    idBanner.html(`
    <div style="text-align: center;margin:0">
            <img src="${story.banner.image}" style="width:100%;border-radius:3px;" />
        </div>
        <div >
            <span style="font-size:small">${story.banner.caption}</span>
        </div>
    `)
  }

  validPages = pages.filter(p => p.id !== bodyId).sort((a, b) => b.date - a.date);

  //Showing stories except the current
  var stories = $('#stories');
  if (stories) {
    stories.html(validPages.map(p => {
      return `<a href='./${bodyId === '0' ? "pages/" : ""}${p.file}.html'>${p.name}</a><br/>`;
    }))
  }

function getDisplayDate(d){
  const date = d.toString();
  const year = parseInt(date.substr(0,4));
  const month = parseInt(date.substr(4,2));
  const day = parseInt(date.substr(6,2));
  return new Date(year, month-1, day).toDateString().substr(4);
}

  //Showing stories except the current
  var thumbs = $('#thumbs');
  if (thumbs) {
    thumbs.html(
      `<div style='display: flex;justify-content: space-between;flex-wrap:wrap;'>` +
      validPages.map(p => {
      return `
        <a href="./pages/${p.file}.html" style="text-decoration:none; color:inherit;">
          <div class="card" style='width:350px'>
            ${p.banner ?
              `<img src="${p.banner.image.replace("upload","upload/c_limit,h_100,w_400")}" class="card-img-top" alt="..." />` :
              "<div style='width:350px;height: 80px;background:grey;'></div>"
            }
            <div class="card-body">
                <h5 class="card-title" style="font-weight:bold;">${p.name}</h5>
                ${p.summary ? 
                  `<p class="card-text"${p.summary}</p>` :
                ``}
                <p class="card-text"><small class="text-muted">${getDisplayDate(p.date)}</small></p>
            </div>
          </div>
        </a>`;
    }).join('')+`</div>`)
  }
}

function setBoxLink(title, url, comment) {
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
