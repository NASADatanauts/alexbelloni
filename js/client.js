window.onload = initialize;
function initialize() {
  //Adding the header
  $('#nav-div').html(`
  <div id="nav-container" class="container">
        <nav id="nav-main" class="navbar navbar-light bg-light">
            <div style="display:flex;">
                <div>
                    <a class="navbar-brand" href="../index.html">
                        <img src="logo.png" width="30" height="30" class="d-inline-block align-top"
                            alt="logo">
                    </a>                    
                </div>
                <div class="navbar-name">
                    <span class="name">My Datanaut Journey</span>
                    <span class="blogby">by Alex</span>
                </div>
            </div>
        </nav>
    </div>
    
  `);


  //Pages of the blog (stories)
  var pages = [
    {
      id: 'projects', file: 'projects', name: 'Contribution over the Program', date: 20191031,
      banner: { image: "https://res.cloudinary.com/dnzozanco/image/upload/v1597324808/blogbanners/my_projects_over_the_program_lgsnjk.jpg", caption: "Image by Data Discovery Magazine" },
    },
    {
      id: 'member', file: 'stepbystep', name: 'Being a member', date: 20191030,
      banner: { image: "https://res.cloudinary.com/dnzozanco/image/upload/v1597319757/blogbanners/being_a_member_zonxht.jpg", caption: "Wall at NASA HeadQuarter's facade in Washington, DC" },
    },
    {
      id: 'spaceapps2019', file: 'spaceapps2019', name: 'Space Apps Challenge Tips', date: 20180711,
      banner: { image: "https://res.cloudinary.com/dnzozanco/image/upload/v1597321391/blogbanners/Space_Apps_Challenge_Tips_cy2cty.jpg", caption: "Extravehicular activity (EVA) - Photo by NASA Images" },
    },
    {
      id: 'capsule-websites', file: 'capsule-websites', name: 'Huge list of space websites', date: 20200211,
      banner: { image: "https://res.cloudinary.com/dnzozanco/image/upload/v1597322169/blogbanners/Huge_list_of_space_websites_scibwv.jpg", caption: "Space shuttle Columbia launched from Kennedy Space Center - Photo by NASA Images" },
    },
    {
      id: 'ambassador', file: 'ambassador', name: 'Ambassador of the Challenge', date: 20200603,
      banner: { image: "https://res.cloudinary.com/dnzozanco/image/upload/v1596826466/blogbanners/Ambassador_of_the_Challenge_klef2i.jpg", caption: "COVID-19 Concept Free Stock Photo - Public Domain Pictures" }
    },
    {
      id: 'asteroidnn4', file: 'asteroidnn4', name: 'The Asteroid 2002 NN4', date: 20200606,
      banner: { image: "https://res.cloudinary.com/dnzozanco/image/upload/v1593031312/blogbanners/asteroidnn4_qxnnk5.jpg", caption: "Artist’s impression of a Kuiper Belt object - NASA Image and Video Library" }
    },
    {
      id: 'space-apps-category-or-resources-first', file: 'space-apps-category-or-resources-first', name: 'Space Apps: Category or Resources first?', date: 20200910,
      banner: { image: "https://res.cloudinary.com/dnzozanco/image/upload/v1599834197/blogbanners/space-apps-category-or-resources-first_lh4jfv.jpg", caption: "Composition by using the HD 40307 g coloring page on exoplanets.nasa.gov" }
    },
    {
      id: 'perseverance', file: 'perseverance-curated-list', name: "Perseverance's Curated List", date: 20210221,
      banner: {
        image: "https://res.cloudinary.com/dnzozanco/image/upload/v1613997678/blogbanners/Space_Apps_Challenge_Tips_cy2cty_1_fmxgp9.jpg",
        caption: "Perseverance's First Full-Color Look at Mars by NASA"
      }
    }
  ];

  //Getting the story of the current page
  var bodyId = $('body').attr('id')
  var story = pages.find(p => p.id === bodyId);

  //Adding home button

  if (bodyId !== '0') {
    var button = $('#home-button');
    button.html(`<a href='../'>< blog</a>`);
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

  //Adding info about the program and me
  $('.about').html(`
    <section class='container'>
    <div class='row'>
    <div class='col-md-6'>
    <span class="second-title">Author</span>
    <div class="author">
          <div class="author-bio">
              <div class="author-image">
                  <img src="${bodyId === '0' ? '.' : '..'}/images/author.jpg">
              </div>
              <div class="author-info">
                  <span classhorizontal-item="author-text">
                  I'm Alex, a NASA Datanaut member, Space Apps ambassador, and software developer working for NASA programs since 2017.
                  </span>
                  <br />
        <a href="./stepbystep.html">journey</a> | <a target='_blank'
            href='https://alexandrebelloni.com'>website</a> | <a target='_blank'
            href='https://github.com/NASADatanauts/alexbelloni'>github</a>
              </div>
          </div>
      </div>
</div>
        <div class='col-md-6'>
            <span class="second-title">Datanauts</span>
            <div id='nasadatanauts'>
            <p>NASA Datanauts Program is a community within OpenNASA and The Innovation departments.<br />
                <a target='_blank' href='https://open.nasa.gov/explore/datanauts/'>program</a>
                </p>
            </div>
        </div>
       
    </div>
  </section>  
  `)
  //Adding the footer
  $('.footer').html(`<footer class="container text-center"><h6>2021 - alexandre alves</h6></footer> `);

  function getDisplayDate(d) {
    const date = d.toString();
    const year = parseInt(date.substr(0, 4));
    const month = parseInt(date.substr(4, 2));
    const day = parseInt(date.substr(6, 2));
    return new Date(year, month - 1, day).toDateString().substr(4);
  }

  function getLines(validPages) {
    const layout = (validPages.length % 3);
    let arr;
    if (layout === 0) {
      arr = [350, 350, 350, 350, 350];
    } else if (layout === 1) {
      arr = [525, 525, 350, 350, 350];
    } else {
      arr = [350, 350, 350, 525, 525];
    }

    let item = 0;
    return validPages.map(p => {
      const px = arr[item];
      item++;
      if (item > 4) item = 0;
      return `
          <a href="./pages/${p.file}.html" style="text-decoration:none; color:inherit;">
          <div class="card layout${px}">
              <img src="${p.banner.image.replace("upload", "upload/c_limit,h_100,w_400")}" class="card-img-top" alt="..." />
              <div class="card-body">
                  <h5 class="card-title" style="font-weight:bold;">${p.name}</h5>
                  ${p.summary ? `<p class="card-text"${p.summary}</p>` : ``}
                  <p class="card-text"><small class="text-muted">${getDisplayDate(p.date)}</small></p>
              </div>
            </div>
          </a>`;
    }).join('');
  }

  //Showing stories except the current
  var thumbs = $('#thumbs');
  if (thumbs) {
    thumbs.html(
      `<div class="layout-container"> ${getLines(validPages)} </div>`);
  }
}

function setBoxLink(title, url, descr) {
  return `
<div class="card card-website">
  <div class="card-body">
    <h5 class="card-title"><a href="${url}" class="card-link">${title}</a></h5>
    <p class="card-text">${descr ? descr+'<br/>' : ''}${new URL(url).hostname}</p>
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
