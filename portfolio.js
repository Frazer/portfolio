let displayPortfolio = (repositoryArray) => {
  var ol = document.getElementById("repositoryList");

  repositoryArray.forEach(repObj => {
    let li = document.createElement("LI");
    li.classList ="pinned-repo-item  p-3 mb-3 border border-gray-dark rounded-1 js-pinned-repo-list-item public source reorderable sortable-button-item";
    let div = document.createElement("DIV");
    div.classList = "pinned-repo-item-content";
    li.appendChild(div);

    let span = document.createElement("SPAN");
    span.classList = "d-block position-relative";
    div.appendChild(span);

      let repoLink = document.createElement("A");
      repoLink.classList = "text-bold";
      repoLink.target="viewProj"+repObj.name;
      repoLink.href = "https://github.com/"+repObj.href;
      span.appendChild(repoLink);

      //<span class="repo js-repo" title="d3Presentation">d3Presentation</span>
      let linkSpan = document.createElement("SPAN");
      linkSpan.classList = "repo js-repo";
      linkSpan.title = repObj.title;
      linkSpan.innerHTML = repObj.name;
      repoLink.appendChild(linkSpan);

    if(repObj.forked){
      let forkP = document.createElement("P");
      forkP.classList = "text-gray text-small mb-2";
      forkP.innerHTML = "Forked from <a class='muted-link' href='"+repObj.forked +"''>"+repObj.forked +"</a>"
      div.appendChild(forkP);
    }
    
    let descP = document.createElement("P");
    descP.classList = "pinned-repo-desc text-gray text-small d-block mt-2 mb-3";
    descP.innerHTML = repObj.desc;
    div.appendChild(descP);
    
    if(repObj.demo){
      let demoP = document.createElement("P");
      demoP.classList = "pinned-repo-desc text-gray text-small d-block mt-2 mb-3";
      demoP.innerHTML = "<a href='"+repObj.demo+"' target='demo"+repObj.name+"'>Demo</a>";
      div.appendChild(demoP);      
    }

    // <p class="mb-0 f6 text-gray">
    //         <span class="repo-language-color pinned-repo-meta" style="background-color:#f1e05a;"></span>
    //         JavaScript
    //             <a href="/Frazer/dynamicallyAccessCSS.js/stargazers" class="pinned-repo-meta muted-link">
    //           <svg aria-label="stars" class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
    //           3
    //         </a>
    //     </p>
    let langP = document.createElement("P");
    langP.classList = "mb-0 f6 text-gray";
    div.appendChild(langP);

      let langSpanDot = document.createElement("SPAN");
      langSpanDot.classList = "repo-language-color pinned-repo-meta";
      langSpanDot.style = "background-color:"+repObj.backgroundColor;
      langP.appendChild(langSpanDot);

      let langnode = document.createTextNode(" "+repObj.lang);
      langP.appendChild(langnode);

      let starFetch = fetch('https://api.github.com/repos/Frazer/'+repObj.name).then(response =>{
        response.json().then(data => { 

          if (data.description) {descP.innerHTML = data.description;}
          let stars = data.stargazers_count || repObj.stars;
          if(stars){
            let starLink = document.createElement("A");
            starLink.classList = "pinned-repo-meta muted-link";
            starLink.href = "https://github.com/"+repObj.href+"/stargazers";
            starLink.target="viewProj"+repObj.name;
            starLink.innerHTML = '<svg aria-label="stars" class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg> '+stars;
            langP.appendChild(starLink);
          }

        });;
      });


    // Append the created <li> element to <ol>
    ol.appendChild(li);
  });
};

  var repositoryArray = [

  {href:"Frazer/cvFeatures",
  title:"cvFeatures",
  name:"cvFeatures",
  desc:"publishing the main features from http://frazerk.net/resume.html",
  backgroundColor:"#f1a0aa;",
  lang:"React css-transitions",
  demo:"http://frazerk.net/resume.html"}
  ,
  {
    href:"Frazer/PhyllotaxisFlowerOnCanvasWithD3",
    title:"PhyllotaxisFlowerOnCanvasWithD3",
    name:"PhyllotaxisFlowerOnCanvasWithD3",
    desc:"An interactive exploration of color and patterns",
    backgroundColor:"#f1e05a;",
    lang:"D3.js",
    demo:"https://frazer.github.io/PhyllotaxisFlowerOnCanvasWithD3/flyingFalafels.html"
  },
  {
    href:"Frazer/d3Presentation",
    title:"d3Presentation",
    name:"d3Presentation",
    desc:"teaching d3",
    backgroundColor:"#f1e05a;",
    lang:"D3.js",
    demo:"https://frazer.github.io/d3Presentation/"
  },
  {href:"Frazer/d3-context-menu",
  title:"d3-context-menu",
  name:"d3-context-menu",
  desc:"d3.js context-menus that I aligned towards the screen center. For my company, I also implemented multiple level submenus.",
  backgroundColor:"#f1e05a;",
  lang:'D3.js',
  },
  {href:"Frazer/d3-profile" ,
  title:"d3-profile",
  name:"d3-profile",
  desc:"just me learning d3.js - but made some nice visuals",
  backgroundColor:"#f1e05a;",
  lang:'D3.js',
  demo:"https://frazer.github.io/d3-profile/"}
  ,
  {href:"Frazer/lowLevelJSColorBlender" ,
  title:"lowLevelJSColorBlender",
  name:"lowLevelJSColorBlender",
  desc:"a web based color blender, reads and encodes from base64 from dropped images.  Exploring not using canvas or filters.",
  backgroundColor:"#f1e05a;",
  lang:"JavaScript",
  demo:'https://frazer.github.io/lowLevelJSColorBlender/source/index.html'}
  ,
  {href:"Frazer/cssVariables" ,
  title:"cssVariables",
  name:"cssVariables",
  desc:"A beautiful dynamic Radial Gradient controlled with the mouse and css variables",
  backgroundColor:"#563d7c;",
  lang:'CSS-variables',
  demo:'https://frazer.github.io/cssVariables/index.html'}
  ,
  { href:"Frazer/dynamicallyAccessCSS.js",
    title:"dynamicallyAccessCSS.js",
    name: "dynamicallyAccessCSS.js",
    desc:  "edit rules in your css",
    backgroundColor:"#f1e05a;",
    lang: "JavaScript",
    stars: 4
  },      
   {href:"Frazer/CarTimeGame",
  title:"CarTimeGame",
  name:"CarTimeGame",
  desc:"2 player game, Use wasd and arrows. Written using copilot.",
  backgroundColor:"#f1e05a;",
  lang:'Javascript',
  demo:'https://frazer.github.io/CarTimeGame/game.html'},
  {href:"Frazer/chaseMeInReactVR",
  title:"chaseMeInReactVR",
  name:"chaseMeInReactVR",
  desc:"a simple VR experience",
  backgroundColor:"#f1e05a;",
  lang:'ReactVR',
  demo:'https://frazer.github.io/chaseMeInReactVR/vr/build/'},
  {href:"Frazer/pc-daily-motivation-scripts",
  title:"daily-motivation-scripts",
  name:"pc-daily-motivation-scripts",
  desc:"Our tools to make our productivity better.",
  backgroundColor:"#f1e05a;",
  lang:'cron'
  },
  {href:"Frazer/reactMaterialUICommentBoard",
  title:"reactMaterialUICommentBoard",
  name:"reactMaterialUICommentBoard",
  desc:"A simple multi threaded comment board built on react, with material-ui",
  backgroundColor:"#f1e05a;",
  lang:'React.js',
  demo:'https://frazer.github.io/reactMaterialUICommentBoard/'}
  ,
  {
    href:"Frazer/vuejsbookingdemo",
    title:"vuejsbookingdemo",
    name:"vuejsbookingdemo",
    desc:"Vue.js demo using jquery.ajax, autocomplete and date pickers",
    backgroundColor:"#f1e05a;",
    lang:"Vue.js",
    demo:"http://frazerk.net/booking/index.html"
  },
  {href:"Frazer/angularTodoWithCssSlide",
  title:"angularTodoWithCssSlide",
  name:"angularTodoWithCssSlide",
  desc:"simple todo list practicing css transitions",
  backgroundColor:"#f1a0aa;",
  lang:"angularjs css-transitions",
  demo:"https://frazer.github.io/angularTodoWithCssSlide/todo.html"}
  ,
  {href:"Frazer/scss_spritemap" ,
  title:"scss_spritemap",
  name:"scss_spritemap",
  desc:"scss to make classes for each of your sprites from a sprite map.",
  backgroundColor:"#563d7c;",
  lang:'CSS SCSS'}
  ,
   { href:"Frazer/meteor-react-sprite-field",  //full_name
  title:"meteor-react-sprite-field",  //
  name: "meteor-react-sprite-field",  //name
  desc: "A simple react 'game' that uses sprites, scss, and smooth key listening",  //description
  backgroundColor:"#f1e05a;",
  lang:"Meteor React"},
  { href:"Frazer/smoothVolumeTransitionVimeo",  
  title:"smoothVolumeTransitionVimeo",
  name: "smoothVolumeTransitionVimeo",  
  desc: "Smooth Volume Hover using Vimeo's player.js to set the volume on hover. ",  
  backgroundColor:"#f1e05a;",
  lang:"JavaScript",
  demo:"https://frazer.github.io/smoothVolumeTransitionVimeo/index.html"}
  ,
  { href:"Frazer/codeFirstGame",  
  title:"codeFirstGame",
  name: "codeFirstGame",  
  desc: "an html/canvas template for making games based on https://www.youtube.com/watch?v=KoWqdEACyLI&t=1s",  
  backgroundColor:"#f1e05a;",
  lang:"JavaScript",
  },
  { href:"Frazer/8192",  
  title:"8192",
  name: "8192",  
  desc: "This game is a modification from 2048, play here: http://frazer.github.io/8192/ - see original at https://github.com/gabrielecirulli/2048",
  backgroundColor:"#f1e05a;",
  lang:"JavaScript",
  demo:"http://frazer.github.io/8192/"
  },
  { href:"Frazer/CodeCombatMathKingdom",  
  title:"CodeCombatMathKingdom",
  name: "CodeCombatMathKingdom",  
  desc: "CodeCombat levels I designed during the 2019 DeveloperWeek hackathon",  
  backgroundColor:"#f1e05a;",
  lang:"JavaScript",
  },
  {href:"Frazer/reveal.js",
  title:"reveal.js",
  name:"reveal.js",
  forked:"hakimel/reveal.js",  //source.full_name
  desc:"Ported 'Reveal.js - The HTML Presentation Framework' to Meteor_react.",
  backgroundColor:"#f1e05a;",
  lang:"Meteor React"}
  ,
  {href:"Frazer/react-meteor-modal",
  title:"react-meteor-modal",
  name:"react-meteor-modal",
  desc:"a react modal dialog for meteor 1.4 ",
  backgroundColor:"#f1e05a;",
  lang:'Meteor React',
  stars: 1
  },
  {href:"Frazer/react-nav",
  title:"react-nav",
  name:"react-nav",
  desc:"a Nav bar that loads and renders page components",
  backgroundColor:"#f1e05a;",
  lang:'React.js',
  demo:'https://frazer.github.io/react-nav/build/'}
  ,
  {href:"Frazer/expressReact",
  title:"expressReact",
  name:"expressReact",
  desc:"a random message board practicing Express interacting with React",
  backgroundColor:"#f1e05a;",
  lang:'React.js, Express',
  }
  ,
  {href:"Frazer/adjustable-speed-slideshow",
  title:"adjustable-speed-slideshow",
  name:"adjustable-speed-slideshow",
  desc:"Slide show for displaying family photos or party scenes",
  backgroundColor:"#f1305a;",
  lang:'HTML js',
  demo:"https://frazer.github.io/adjustable-speed-slideshow/all.html"
  },
  {href:"Frazer/learning-three.js",
  title:"learning-three.js",
  name:"learning-three.js",
  desc:"me toying with three.js ",
  backgroundColor:"#f1e05a;",
  lang:'three.js',
  demo:'https://frazer.github.io/learning-three.js/index.html'}
  ,
  {href:"Frazer/primeplay" ,
  title:"primeplay",
  name:"primeplay",
  desc:"A tool for investigating and finding primes",
  backgroundColor:"#563dfc;",
  lang:'C'}
  ,
  { href:"Frazer/hashSort",  
  title:"hashSort",
  name: "hashSort",  
  desc: "A sorting algorithm that is faster than ShellSort when the range of values is smaller than the number of elements",  
  backgroundColor:"#f1e05a;",
  lang:"JavaScript",
  },
  
];

displayPortfolio(repositoryArray);
