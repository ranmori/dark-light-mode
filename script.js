const toggleSwitch=document.querySelector('input[type="checkbox"]');
const toggleIcon= document.getElementById('toggle-icon');
const bg=document.getElementById('bg');
const nav = document.getElementById('nav');



function toggleDarkLightMode(isDark){
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode': 'Light Mode';
  bg.style.backgrounImage= isDark ?  "url('img/bg_dark.jpg')" : "url('img/bg_light.jpg')";
  nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
   isDark
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
}

//switching theme
function switchtheme(event){
  // check the value of the chcekbox
  if(event.target.checked){
    //set the dark theme from css
    document.documentElement.setAttribute('data-theme', 'dark');
    // save the key value pair in the browser
    localStorage.setItem('theme', 'dark');
    //pass true
    toggleDarkLightMode(true);
  } else{
    document.documentElement.setAttribute('data-theme','light');
    localStorage.setItem('theme', 'light');
     toggleDarkLightMode(false);
  }
  
  
  
  
}
// add an event listener to input

toggleSwitch.addEventListener('change',switchtheme );

// check local storage for theme

const currentTheme = localStorage.getItem('theme');
if (currentTheme){
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark'){
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}
