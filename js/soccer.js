const soccerPage = () =>{
    let europeanTeamsContainer = document.getElementById('european_teams_container');
    let mlsTeamsContainer = document.getElementById('mls_teams_container');
    let european = document.getElementById('european');
    let mls = document.getElementById('mls');
    let headings = document.getElementsByTagName('h2')
    
    european.addEventListener('click', europeanClick);
    
    function europeanClick() {
        europeanTeamsContainer.style.display = 'block';
        mlsTeamsContainer.style.display = 'none';
        european.classList.add('active');
        mls.classList.remove('active');
        headings[0].style.display = 'block';
    }
    
    mls.addEventListener('click', mlsClick)
    function mlsClick(){
        europeanTeamsContainer.style.display = 'none';
        mlsTeamsContainer.style.display = 'block';
        mls.classList.add('active');
        european.classList.remove('active');
        headings[1].style.display = 'block';
    }
    
    
    }
    
    soccerPage();


    // mobile navigation slide
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
    

    // function to animate the even nodes of the teams
    function animateTeams(allTeams){
        // get all the european teams
        
        const allTeamsChildren = allTeams.children
        // convert the resulting nodelist to an array
        const allTeamsChildrenFilter = Array.from(allTeamsChildren);        
        
        // filter the array to make an array of even numbers
        const filterTeam = allTeamsChildrenFilter.filter((team, index) => {
            return index % 2 === 0;
            
        })

        // for each team in the filtered array, add a css class to animate
        filterTeam.forEach( team => {
            team.classList.add('allanimate');

        })


    }
    
    animateTeams(document.querySelector('.european_left'));
    animateTeams(document.querySelector('.european_right'));
    animateTeams(document.querySelector('.mls_left'));
    animateTeams(document.querySelector('.mls_right'));
    