


const footballPage = () => {

    let nflTeamsContainer = document.getElementById('nfl_teams_container');
    let ncaafTeamsContainer = document.getElementById('ncaaf_teams_container');
    let nfl = document.getElementById('league_options1');
    let ncaaf = document.getElementById('league_options2');
    let headings = document.getElementsByTagName('h2');
        
    
    nfl.addEventListener('click', nflClick);

            function nflClick() {
                
                nflTeamsContainer.style.display = 'block';
                ncaafTeamsContainer.style.display = 'none';
                nfl.classList.add('active');
                ncaaf.classList.remove('active');
                headings[0].style.display = 'block';
            }

            ncaaf.addEventListener('click', ncaafClick)
            function ncaafClick(){
                nflTeamsContainer.style.display = 'none';
                ncaafTeamsContainer.style.display = 'block';
                ncaaf.classList.add('active');
                nfl.classList.remove('active');
                headings[1].style.display = 'block';
               
            } 
}

footballPage();


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










// function to add animation to the teams with even numbers
function animateTeams(league){
    
    
    

    const allConference = league.filter(conferences => {
        return conferences;
    })


    allConference.forEach(conference =>{
        const allConferenceChildren = conference.children
        
        // convert the resulting htmlcollection to an array
        const allconferenceChildrenFilter = Array.from(allConferenceChildren);        
    
        // filter the array to make an array of even numbers
        const filterTeam = allconferenceChildrenFilter.filter((team, index) => {
            return index % 2 === 0;
        
        })

        // for each team in the filtered array, add a css class to animate
        filterTeam.forEach( team => {
        team.classList.add('allanimate');

    })
    })

    


}

animateTeams([
    document.querySelector('#afc_west'),
    document.querySelector('#afc_east'),
    document.querySelector('#afc_north'),
    document.querySelector('#afc_south'),
    document.querySelector('#nfc_west'),
    document.querySelector('#nfc_east'),
    document.querySelector('#nfc_north'),
    document.querySelector('#nfc_south')
]);

animateTeams([
    document.querySelector('#aac'),
    document.querySelector('#acc'),
    document.querySelector('#big10'),
    document.querySelector('#big12'),
    document.querySelector('#cusa'),
    document.querySelector('#fbs'),
    document.querySelector('#mac'),
    document.querySelector('#mw'),
    document.querySelector('#pac12'),
    document.querySelector('#sec'),
    document.querySelector('#sunbelt'),
])



// function to select conference
function selectConference(){
    // get the select element
    const select = document.querySelector('#ncaaf_conference')
    const conferences = document.querySelectorAll('.teams_container1 section')
    const teamContainer = document.querySelectorAll('.teams_flex_container');

    

    //  console.log(teamContainer);
    
    select.addEventListener('click', e => {
        
        e.preventDefault();

        const filter = e.target.value;

        conferences.forEach( conference =>{

            
           
            switch(filter){
                case "choose conference":
                    break;
                case "all":
                    if(!conference.classList.contains('all')){
                        conference.style.display = 'block';
                        teamContainer[1].style.display = 'flex';
                        
                    }else{
                        conference.style.display = 'none'; 
                    }

                    break;

                case 'aac':
                    if(conference.classList.contains('aac')){
                        conference.style.display = 'block';
                    }else{
                        conference.style.display = 'none'; 
                    }

                    break;

                case 'acc':
                    if(conference.classList.contains('acc')){
                        conference.style.display = 'block';
                    }else{
                        conference.style.display = 'none'; 
                    }

                    break;

                case 'big10':
                    if(conference.classList.contains('big10')){
                        conference.style.display = 'block';
                    }else{
                        conference.style.display = 'none';
                    }

                    break;

                case 'big12':
                    if(conference.classList.contains('big12')){
                        conference.style.display = 'block';
                    }else{
                        conference.style.display = 'none';
                    }
                    
                    break;

                case 'cusa':
                    if(conference.classList.contains('cusa')){
            
                        conference.style.display = 'block';
                        teamContainer[1].style.display = 'block';
                    
                       
                    }else{
                        conference.style.display = 'none';
                    }

                    break;

                case 'fbs':
                    if(conference.classList.contains('fbs')){
                        conference.style.display = 'block';
                        teamContainer[1].style.display = 'block';
                    }else{
                        conference.style.display = 'none' ;
                    }

                    break;

                case 'mac':
                    if(conference.classList.contains('mac')){
                        conference.style.display = 'block';
                        teamContainer[1].style.display = 'block';
                    }else{
                        conference.style.display = 'none'; 
                    }

                    break;

                case 'mw':
                    if(conference.classList.contains('mw')){
                        conference.style.display = 'block';
                        teamContainer[1].style.display = 'block';
                    }else{
                        conference.style.display = 'none';
                    }

                    break;

                case 'pac12':
                    if(conference.classList.contains('pac12')){
                        conference.style.display = 'block';
                        teamContainer[1].style.display = 'block';
                    }else{
                        conference.style.display = 'none';
                    }

                    break;

                case 'sec':
                    if(conference.classList.contains('sec')){
                        conference.style.display = 'block';
                        teamContainer[1].style.display = 'block';
                    }else{
                        conference.style.display = 'none';
                    }

                    break;

                case 'sunbelt':
                    if(conference.classList.contains('sunbelt')){
                        conference.style.display = 'block';
                        teamContainer[1].style.display = 'block';
                    }else{
                        conference.style.display = 'none'; 
                    }

                    break;

                default:
                    break;
                
            }
            








        })
        
    })
}
selectConference()