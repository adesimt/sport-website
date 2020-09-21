
const colors = ['#ffffff', ' #E9EBEC', '#928D82', '#081F2C', '#4A697C', '#92CBEB','#EAE5DA'];//An array of all the colors present in the document.
//clicking the intro buttom

// this function, when called scroll the screen to the specified height from the top
function post(top, left){
    return {
        top,
        left,
        behavior: 'smooth'
      }
    }



let connectBtn = document.getElementById('connect');

connectBtn.addEventListener('click', pageDrop);// The button gets a click then the page drops to 550px height

 function pageDrop(){
      
    let media = [
        matchMedia('screen and (max-width: 1720px) and (min-width: 1272px)'),
        matchMedia('screen and (max-width: 1272px) and (min-width: 1024px)'),
        matchMedia('screen and (max-width: 1024px) and (min-width: 866px)'),
        matchMedia('screen and (max-width: 866px) and (min-width: 768px)'),
        matchMedia('screen and (max-width: 768px)'),
        matchMedia('screen and (max-width: 488px)'),
        matchMedia('screen and (max-width: 375px)')
    ]
    
    function mediaPage (m){
        if(media[0].matches || media[1].matches || media[2].matches){
            scrollTo(post(640, 0));
        }
    
        // if(media[1].matches){
        //     scrollTo(post(640, 0));    }
    
        // if(media[2].matches){
        //     scrollTo(post(640, 0));    }
    
        if(media[3].matches){
            scrollTo(post(500, 0));    }
    
        if(media[4].matches){
            scrollTo(post(370, 0));    }
    
        if(media[5].matches || media[6].matches){
            scrollTo(post(230, 0));    }
    
        // if(media[6].matches){
        //     scrollTo(post(230, 0));    }
    
    
    }
    
    for(let i = 0; i < media.length; i++){
        mediaPage(media[i]);
        media[i].addEventListener('change', mediaPage);
        
    }

  }


  const navigationSlide = () =>{
    const menuOpen = document.querySelector('.mobile_menu');
    const nav = document.querySelector('#nav-links');
    const navLinks = document.querySelectorAll('#nav-links li')
    
    
    // toggle navigation
    menuOpen.addEventListener('click', () =>{
       nav.classList.toggle('nav-active');
       // mobile menu animation
    menuOpen.classList.toggle('menuClose');
    
    // animate the nav links
    navLinks.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation = '';
        } else{
            link.style.animation = `navanimate 0.5s ease forwards ${index / 7 + .3}s`;
        }
    }
    )
    
    
    })
    
    }
    
    navigationSlide();



//function to choose differnet tabs
function chooseTabs(){
    // get the nav links
    const links = document.querySelectorAll('.nav-links li');
    const linkSize = document.querySelector('.nav-links');

    const navOption1 = document.querySelector('.nav-options.nav-option1');
    const navOption2 = document.querySelector('.nav-options.nav-option2');
    const navOption = document.querySelector('.nav-links li');

    
    
    
    const navLinks = Array.from(links);
    
    navLinks.forEach(link => {
        link.addEventListener('mouseover', hoverOn)

        
        link.addEventListener('mouseleave',hoverOut)
    })



}

chooseTabs();


function hoverOn(e){

    const mainHeading = document.querySelector('#text');

    if(e.target.classList.contains('soccer-link')){
        mainHeading.classList.add('move-heading');
    }

    if(e.target.classList.contains('football-link')){
        mainHeading.classList.add('move-heading');
    }
}

function hoverOut(e){

    const mainHeading = document.querySelector('#text');

    if(!e.target.classList.contains('soccer-link')){
        mainHeading.classList.remove('move-heading');
    }

    if(!e.target.classList.contains('football-link')){
        mainHeading.classList.remove('move-heading');
    }
}


//toggle between different for options
function formToggle(){
    const findpTab = document.querySelector('.option1');
    const hostpTab = document.querySelector('.option2');
    const findgTab = document.querySelector('.option3');
    const hostgTab = document.querySelector('.option4');

    const findpContainer = document.querySelector('#findAPartyContainer1');
    const hostpContainer = document.querySelector('#hostAPartyContainer1');
    const findgContainer = document.querySelector('#findAPartyContainer2');
    const hostgContainer = document.querySelector('#hostAPartyContainer2');

    findpTab.addEventListener('click', ()=>{
        findpTab.classList.add('active');
        hostpTab.classList.remove('active');
        findpContainer.style.display = 'block';
        hostpContainer.style.display = 'none';

    })
    
    hostpTab.addEventListener('click', ()=>{
        hostpTab.classList.add('active');
        findpTab.classList.remove('active');
        hostpContainer.style.display = 'block';
        findpContainer.style.display = 'none';

        
    })


    findgTab.addEventListener('click', ()=>{
        findgTab.classList.add('active');
        hostgTab.classList.remove('active');
        findgContainer.style.display = 'block';
        hostgContainer.style.display = 'none';

    })
    
    hostgTab.addEventListener('click', ()=>{
        hostgTab.classList.add('active');
        findgTab.classList.remove('active');
        hostgContainer.style.display = 'block';
        findgContainer.style.display = 'none';

        
    })

}

formToggle();
   

// function to choose from the dropdown tab
function subTabs(){
    const leagues = document.querySelectorAll('.leagues');
    const navImage = document.querySelectorAll('.nav-league-image img')
    

    const navLeagues = Array.from(leagues);
  

    navLeagues.forEach(navLeague =>{
        navLeague.addEventListener('click', e => {
            e.preventDefault();
        //    console.log(e.target)
            const filter = e.target.dataset.filter;
            
            if(filter === 'europe'){
                window.location = "soccer.html"
            }










        })
    })
    
 
}

subTabs();
