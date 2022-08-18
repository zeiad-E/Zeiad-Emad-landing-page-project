/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

//Store the important elements in variable
const box=document.getElementById('box-nav-bar');
const mySections=document.querySelectorAll('.my-section');
//convert from nodeList to Array
const myArraySections=Array.from(   mySections);
/*function to add every section to nav bar dynamically*/ 
const addSectionToNavBar=function(){
for(let i=1;i<=myArraySections.length;++i ){
   const sec =document.createElement('li')
   sec.className="li-nav-bar"
   sec.innerHTML=`<a href="#section${i}"class="li-nav-bar-a" >section ${i}</a> `
   box.appendChild(sec)
}

};
// call the function
addSectionToNavBar();
const navSections=document.querySelectorAll('.li-nav-bar-a');
//convert from nodeList to Array
const navArraySections=Array.from(navSections);
//make a variable to store location that I need to control the scroll
const locMyArraySections=["",""];
for (let i=0;i<myArraySections.length;++i ){
    locMyArraySections[i] = myArraySections[i].getBoundingClientRect().top;
};
//event=>function Scroll dynamically whille click on nav bar
box.addEventListener('click',function(e){
    console.log(e.target.nodeName);
    e.preventDefault();
    console.log(e.target.getAttribute("href").substring(8));/*just for test */
    for(var x=1;x<=locMyArraySections.length;++x){
        if (e.target.getAttribute("href").substring(8)==x){
            console.log(e.target.getAttribute("href").substring(8));/*just for test and track errors */
            window.scrollTo({ top:locMyArraySections[x-1], behavior: "smooth" });
        }
    }
});
const navArraySectionsLi=Array.from(document.querySelectorAll('.li-nav-bar'));
/*active section when scroll going to that section*/ 
//1.scroll event
//2.function
//3.loop
//4.if
//5.e.target
//6.action
document.addEventListener('scroll',function(e){
    for(var z=1;z<=locMyArraySections.length;++z){
        const currentScroll=window.pageYOffset
        if (currentScroll>=(locMyArraySections[0])-65 &currentScroll<locMyArraySections[1]-40){
            console.log('1');/*just for test */
            myArraySections[0].classList.remove('your-active-class');
            myArraySections[0].classList.add('active-section');
            navArraySectionsLi[0].classList.add('active-nav-section');
            navArraySectionsLi[1].classList.remove('active-nav-section');
        }
        else{
            
            myArraySections[0].classList.add('your-active-class');
          
        }
        if (currentScroll>(locMyArraySections[z])-40 &currentScroll<locMyArraySections[z+1]-40){
            console.log(z+1);/*just for test and track errors */
          
                  

                 myArraySections[z].classList.add('active-section');
                 myArraySections[z-1].classList.remove('active-section');
                 myArraySections[z+1].classList.remove('active-section');
                 navArraySectionsLi[z].classList.add('active-nav-section');
                 navArraySectionsLi[z-1].classList.remove('active-nav-section');
                 navArraySectionsLi[z+1].classList.remove('active-nav-section');



          
            
        }
        if(currentScroll>locMyArraySections[z+1]-40){
            console.log(z+2)/*just for test and track errors */
            myArraySections[locMyArraySections.length-1].classList.add('active-section');
            myArraySections[locMyArraySections.length-2].classList.remove('active-section');
            navArraySectionsLi[locMyArraySections.length-1].classList.add('active-nav-section');
            navArraySectionsLi[locMyArraySections.length-2].classList.remove('active-nav-section');
        
        }
    
    }
})





/*document.addEventListener('scroll',function(){console.log(window.pageYOffset);
})*/

