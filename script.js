let screenWidth;
let navbar = document.querySelector(".menu-list ul")
let navState = true;

function smoothScroll() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  document.querySelector(".icon-box #icon").addEventListener("click", function(){
    scroll.scrollTo(0)
  })
}

smoothScroll();

function autoScrollFunc() {
  let imgArr = ["converse", "nike-nfl", "mineral", "futureworld", "lizard"];
  let index = 0;
  let autoPlaySlide;
  let backSlider = document.querySelectorAll(".back-slider");

  function intervalPlayer(){
    autoPlaySlide = setInterval(() => {
        if (index < imgArr.length-1) {
          let bgImg = imgArr[index];
          document.querySelector(
            ".page2"
          ).style.backgroundImage = `url(media/${bgImg}.jpg)`;
          index++;
          backSlider[index].classList.remove("active");
        } else {
          let bgImg = imgArr[index];
          document.querySelector(
            ".page2"
          ).style.backgroundImage = `url(media/${bgImg}.jpg)`;        
          index = 0
        }
      }, 2000);
  }

  intervalPlayer();


  function imageAnimation() {
    const loaderContainer = document.getElementById("loader-container");
  
    setTimeout(() => {
      loaderContainer.style.transform = "translateY(-100vh)";
    }, 200);
  
    const loader = document.querySelector("#loader");
  
    setTimeout(() => {
      loader.style.transform = "translateY(-200vh)";
    }, 700);
  
    const elem = document.querySelectorAll(".elem");
    const page2 = document.querySelector(".page2");
  
    elem.forEach((val) => {
      val.addEventListener("mouseenter", () => {
        clearInterval(autoPlaySlide);
        let imgLink = val.getAttribute("data-img");
        page2.style.backgroundImage = `url(/media/${imgLink})`;
      });
      val.addEventListener("mouseleave", ()=>{
        intervalPlayer();
      })
    });
  }
  imageAnimation();


}

autoScrollFunc()

function imageCreation(){
  const images =[
    {
      imgLink: "https://works.studio/assets/imager/images/CDL-2021-champs/10987/Call-of-Duty-League-Championship-2021-Air-Force-1-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "CHICAGO BLACKHAWKS BEST EVER"
    },
    {
      imgLink: "https://works.studio/assets/imager/images/led-studio/26053/thumbnail_230526_162436_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "JOHN ELLIOTT SCENES FROM NEPAL"
    },
    {
      imgLink: "https://works.studio/assets/imager/images/converse/824/Converse-Basketball-Photography-02_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "The sun was setting behind the mountains"
    },
    {
      imgLink: "https://works.studio/assets/imager/images/skky-partners/22540/Thumbnail_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "The only way to do great work is to love what you do."
    },
    {
      imgLink: "https://works.studio/assets/imager/images/us-soccer/21753/NewThumb_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "Believe in yourself and all that you are"
    },
    {
      imgLink: "https://works.studio/assets/imager/images/jeen-yuhs/13608/jeen-yuhs-Film-Identity-Thumbnail_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "Don’t watch the clock; do what it does"
    },
    {
      imgLink: "https://works.studio/assets/imager/images/public/17314/Public-Campaign-Photography-Portrait-Millana-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "The greatest glory in living lies not in never falling."
    },
    {
      imgLink: "https://works.studio/assets/imager/images/dreamhaus/6658/DreamHaus-Identity-Wordmark-Lines_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "You are never too old to set another goal"
    },
    {
      imgLink: "https://works.studio/assets/imager/images/converse-basketball-explorations/10270/Converse-Basketball-Explorations-Typography-Cover_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "The future belongs to those who believe"
    },
    {
      imgLink: "https://works.studio/assets/imager/images/converse-basketball-ho19/1767/Converse-Basketball-HO19-Photography-Yellow-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "Success is not final, failure is not fatal."
    },
    {
      imgLink: "https://works.studio/assets/imager/images/Fear-of-God-Nike/9769/Nike-x-Fear-of-God-16_rectangle_1600_201124_014130_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "The only way to do great work is to love what you do."
    },
    {
      imgLink: "https://works.studio/assets/imager/images/nars-x-susanne-bartsch/9181/Nars-Susanne-Bartsch-Zine-Collage_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "Believe in yourself and all that you are"
    },
    {
      imgLink: "https://works.studio/assets/imager/images/nike-air-max-day-21-nyc-identity/10909/Nike-Air-Max-21-Film-Title-Card-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "The only way to do great work is to love what you do"
    },
    {
      imgLink: "https://works.studio/assets/imager/images/versace-trigerca-identity/9928/Versace-Trigreca-Identity-Photography-Black-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "Success is not final, failure is not fatal"
    },
    {
      imgLink: "https://works.studio/assets/imager/images/the-xi/972/XI-Identity-Architecture-Photography-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "The future belongs to those who believe"
    },
    {
      imgLink: "https://works.studio/assets/imager/images/call-of-duty-league-championship-kit/10679/Call-of-Duty-League-Championship-2020-Ring-Thumbnail_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "You are never too old to set another goal."
    },
    {
      imgLink: "https://works.studio/assets/imager/images/nike-studio-45/1098/Nike-Studio-45-Gym-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "“The only limit to our realization of tomorrow will be our doubts of today"
    },
    {
      imgLink: "https://works.studio/assets/imager/images/john-elliott-shows/10017/John-Elliot-Shows-Experiential-Photography-00_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "The greatest glory in living lies not in never falling"
    },
    {
      imgLink: "https://works.studio/assets/imager/images/heron-preston-website/9194/Heron-Preston-Website-Thumbnail_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "Don't watch the clock; do what it does"
    },
    {
      imgLink: "https://works.studio/assets/imager/images/guns-n-roses-pop-up/2544/Guns-N-Roses-Pop-Up-Police-Car-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "You are never too old to set another goal"
    },
    {
      imgLink: "https://works.studio/assets/imager/images/reshape-identity/2769/Reshape-Identity-Logo-Blue_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "The greatest glory in living lies not in never falling"
    },
    {
      imgLink: "https://works.studio/assets/imager/images/kith-sport-ss18/9940/JACKIELEEPHOTO_090717_INSTITUTE-KITHSPORT-203255_201124_023510_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "Believe in yourself and all that you are"
    },
    {
      imgLink: "https://works.studio/assets/imager/images/fear-of-god-house-of-god/1564/Fear-of-God-House-of-God-Creative-Direction-Altar-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
      text: "The greatest glory in living lies not in never falling"
    }
  ]
  
  let clutter = "";
  
  
  
  const page3 = document.querySelector(".page3");
  
  images.map((img)=>{
      clutter += `<div class="img-div">
      <div class="flip-card">
      <p>${img.text}</p>
      </div>
      <img src="${img.imgLink}" alt="">
      </div>`
      return clutter;
  });
  
  
  page3.innerHTML = clutter;
}


imageCreation();





//////////


function checkScreenWidth(){
  screenWidth = window.innerWidth;
  if(screenWidth <= 1024){
    navbar.classList.add("mobile-screen")
    if(navbar.classList.contains("desk-screen")){
      navbar.classList.remove("desk-screen")
    }
  }else{
    navbar.classList.add("desk-screen")
    if(navbar.classList.contains("mobile-screen")){
      navbar.classList.remove("mobile-screen")
    }
  }
}

checkScreenWidth();



window.addEventListener("resize", (e)=>{
  checkScreenWidth();
  console.log(navbar);
})


let menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", function(){
  if(screenWidth <= 1024){
    let mobileScreen = document.querySelector(".mobile-screen");
    if(navState){
      mobileScreen.style.transform = "translateX(0%)";
      mobileScreen.style.transition = "0.3s ease"
      mobileScreen.style.opacity = "1"
      navState = false;
    }else{
      mobileScreen.style.transform = "translateX(100%)";
      mobileScreen.style.opacity = "0"
      navState = true;
    }
  }else{
    let deskScreen = document.querySelector(".desk-screen");
    if(navState){
      deskScreen.style.transform = "translateX(0%)";
      deskScreen.style.transition = "0.3s ease"
      deskScreen.style.opacity = "1"
      navState = false;
    }else{
      deskScreen.style.transform = "translateX(100%)";
      deskScreen.style.opacity = "0"
      navState = true;
    }
  }
})



menuBtn.addEventListener("click", ()=>{
  if(!navState){
    menuBtn.style.transform = "rotate(-130deg)"
  }else{
    menuBtn.style.transform = 'rotate(0deg)'
  }
})


























// function showBackground(){
//   let nav = document.querySelector(".nav-bg");
//   if(screenWidth<="1024" && !check){
//     nav.style.height = '100vh'
//   }else{
//     nav.style.height = '0vh'
//   }
// }


// menuBtn.addEventListener("click", ()=>{
//   showhide();
//   if(!check && screenWidth <= "1024"){
//     btn.style.transform = "rotate(-140deg)"
//     nav.style.height = '100vh'
//     nav.style.alignItems = "start"
//     if(screenWidth <= "1024" && check == false){
//       hideNav.style.transform = "translateY(0%)"
//       hideNav.style.opacity = "1"
//     }
//   check = true;
//   }else{
//     console.log(hideNav);
//     nav.style.height= '0vh'
//     hideNav.style.transform = "translateY(-100%)"
//     hideNav.style.opacity = '0'
//     btn.style.transform = "rotate(0deg)"
//   check = false;
//   }
// })











// `url(/media/${bgImg}.jpg)`

// `url(/media/${imgArr[0]}.jpg)`





