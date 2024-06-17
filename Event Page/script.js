const navBar=document.querySelector("nav"),
menuBtns=document.querySelectorAll(".menu-icon"),
overlay=document.querySelectorAll(".overlay");

menuBtns.forEach(menuBtns => {
  menuBtns.addEventListener("click",() => {
      navBar.classList.toggle("open");
  });
});

overlay.addEventListener("click", () =>{
  navBar.classList.remove("open");
});
const body=document.querySelector("body"),
      sidebar=body.querySelector(".sidebar"),
      toggle=body.querySelector(".toggle"),
      searchBtn=body.querySelector(".search-box"),
      modeSwitch=body.querySelector(".toggle-switch"),
      modeText=body.querySelector(".mode-text");

      toggle.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
      });
      searchBtn.addEventListener("click", ()=>{
        sidebar.classList.remove("close");
      });

      modeSwitch.addEventListener("click", ()=>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerHTML="Light Mode"
        }else{
            modeText.innerHTML="Dark Mode"
        }
      });