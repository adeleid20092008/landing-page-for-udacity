// created header for page
const header = document.createElement('header');
document.body.insertAdjacentElement("afterbegin",header);
const nav = document.createElement('nav');
header.insertAdjacentElement('afterbegin',nav);
const ul = document.createElement('ul');
nav.insertAdjacentElement('afterbegin',ul);

// set class to previous element
//class for header and id
header.classList.add('header');
header.setAttribute('id',"main-header");
//class for nav and id 
nav.classList.add('nav-list');
nav.setAttribute('id','nav-list');
// class for ul
ul.setAttribute('id', 'list')

//created main for the page 
const mainContainer = `<main class = "main-container"></main>`;
// add the main to the body page
document.body.innerHTML += mainContainer;

// create id  and data-nav automatic for the section
// we will set number to increass by incremnet to make every id and class to be unique
let indexId = 1;
let indexDataNav = 1;
let indexLiID = 1;

// create button when you click it add section the page
// get the main postion for button
const getMain = document.querySelector('main');
// create the button
const button = document.createElement('button');
// put textNode for the button
button.innerHTML = "click me";
//put the button after main tag begin
getMain.insertAdjacentElement('afterbegin',button);
// set class to button
button.classList.add('main-btn');
// add event listener to button
button.addEventListener('click',addSection);
// create function to the button eventListener
function addSection(){
    //first create section to repeat autmatic when button click
    // this will repeat to creat section every clicked button
    const section = document.createElement('section');
    // get postion to put section
    const getMain = document.querySelector('main');
    // place of section
    getMain.insertAdjacentElement("beforeend",section);
    // add id autmatic for section
    let sectionId = `section-${indexId++}`;
    section.setAttribute("id",sectionId);
    // add nav-data to section automatic
    let sectionDataNav = `section-${indexDataNav++}`;
    section.setAttribute("data-nav", `${sectionDataNav}`)
    //second navBar will genrate automatic
    const navBarList = document.createElement('li');
    //add class to li and id
    navBarList.setAttribute("class", "list-item")
    navBarList.setAttribute('id', `item${indexLiID++}`)
    // creat {a tag} inside {li tag}
    const aHref = `<a href="#${sectionId}">${sectionDataNav}</a>`
    navBarList.innerHTML += aHref
    const getUl = document.getElementById("list");
    getUl.insertAdjacentElement("beforeend", navBarList);
    // create text content
    let sectionContent = `
    <div class="textcontent">
        <h1 class="text-head"><u>${sectionId}</u><h1>
        <p class= "text-p" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse vitae, exercitationem ratione enim iste laboriosam quas ab et nam sint illum, mollitia odit odio maxime, eligendi ipsa nulla quidem numquam.</p>
        <p class= "text-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse vitae, exercitationem ratione enim iste laboriosam quas ab et nam sint illum, mollitia odit odio maxime, eligendi ipsa nulla quidem numquam.</p>
    </div>
    `;
    section.innerHTML = sectionContent;
    // scroll to add active-section class for section
    // scroll to add activ-bar class for navbar
    // loop for section and list-item by creating varibles and use for(loop)
    const allsection = document.querySelectorAll('section');
    const allNavItem = document.querySelectorAll('.list-item a');
    // the main event onscroll
    onscroll = function () {
        // declear varibles about postion that will scroll
      let scrollPosition = document.documentElement.scrollTop;
    //   loop for evey section to get its postion ansd  set its active-section class
      allsection.forEach((section) => {
        // determine the conditon to be true by if to set up class active or false to delet it
        if ( scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
          scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25) {
          let idAddress = section.attributes.id.value;
          section.setAttribute('class','active-section'); //set this class to make section active when in top page
          removeAllActiveClasses(); //this function to remove class will declare it soon
          addActiveClass(idAddress); // this fun to add class will declare it soon
        }else{
            section.removeAttribute('class', 'active-section')// remove the previous class to reassgin it to anther section
        }
      });
    };
    //declare the fun remove class active
    let removeAllActiveClasses = function () {
      allNavItem.forEach((item) => {
        item.classList.remove("active-bar");
      });
    };
    //declare the fun add class active
    let addActiveClass = function (id) {
      let selector = `nav ul li a[href="#${id}"]`;
      document.querySelector(selector).classList.add("active-bar");
    };
    // loop for links to go smooth when scroll
    let navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (move) => {
        move.preventDefault();
        let currentId = move.target.attributes.href.value;
        console.log(currentId)
        let section = document.querySelector(currentId);
        let sectionPos = section.offsetTop;
        window.scroll({
          top: sectionPos,
          behavior: "smooth",
        });
      });
    });
    
};





