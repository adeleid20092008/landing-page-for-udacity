// TODO: create the main block for body

// ----------------begin to divid the body element-------------------//

                //---------set main section for body element to variblies---------//
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

                //---------begin to add section for body ---------//
                
// add header to body
document.body.insertAdjacentElement("afterbegin",header);
// add main to body
header.insertAdjacentElement("afterend",main);
// add footer to body
main.insertAdjacentElement("afterend",footer);

// ----------------end divid the body element-----------------------//
// add section to main

// create button with addeventlisenter to rebulid section after click
const button = document.createElement('button')
button.textContent = "click me"
main.insertAdjacentElement("afterbegin",button)

button.addEventListener("click", mainbutton)

// -------------------note------------------
// TODO: catch the elemnt that i create
// i donnot ot need to cach element by document.getElementById or any othe selector because it created hear
// ------------------------------------------


// TODO: bulid nav bar 
// i will bulid it after i finsh the main section for the main element because it will by automatic


// conunter variblies for attr and header section
let idIndex = 1
let dataNavIndex =1
let headSectionNum = 1
const navUl = document.createElement('ul')
header.insertAdjacentElement("afterbegin",navUl)

function addSection(){
    // create section element
   const section = document.createElement('section')
   main.insertAdjacentElement('beforeend', section)
    // create section attr
    section.setAttribute("id",`section-${idIndex++}`)
    section.setAttribute("data-nav",`section-${dataNavIndex++}`)   
   
   section.innerHTML = `

     <div class="landing__container">
        <h2>Section ${headSectionNum++}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
     </div>
   `;
    // build the nav
   let allSection = document.querySelectorAll('section')
   let navBarli = ''
    for(const section of allSection){
        const sectionId = section.id
        const sectionData = section.dataset.nav
        navBarli += `
        <li>
        <a href='#${sectionId}' class="menu__link" >${sectionData}</a>
        </li>`;
        navUl.innerHTML = navBarli
        }
        function makeActive(){
          for(const section of allSection ){
              let activeLink = document.querySelectorAll(".menu__link")
              let box = section.getBoundingClientRect();
              if(box.top <= 230 && box.bottom >= 170){
               section.setAttribute("class","active-section")
              }
              else{
                  section.removeAttribute("class","active-section")
              }
             
          }
        
          
      }
      window.addEventListener("scroll",makeActive);
   
};
//TODO: create ul
function mainbutton(){
    addSection()
}






