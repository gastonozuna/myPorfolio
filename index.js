// nav

function openNav(){
    document.getElementById("mySidenav").style.width = "400px";
}

function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
}

// switch

const stylesheet = document.documentElement.style;

const toggle = document.querySelector(".switch_input[data-theme-toggle]");

let darkMode = false;

toggle.addEventListener("click", () =>{
    const color1 = getComputedStyle(document.documentElement).getPropertyValue("--color-1");
    const color2 = getComputedStyle(document.documentElement).getPropertyValue("--color-2");

    stylesheet.setProperty("--color-1", color2);
    stylesheet.setProperty("--color-2", color1);

   if (darkMode == false){
       $('body').css('background-color', '#000000');
       $('.fa-bars').css('color', '#6b6b6b');
       $('#main').css('background', '#000000');
       $('.skillsIcon').css('color', '#FAFAFA');
       $('.aboutTitle').css('color', '#FAFAFA');
       $('.aboutP1').css('color', '#FAFAFA');
       $('.aboutName').css('color', '#FAFAFA');
       $('.skillsTitle').css('color', '#FAFAFA');
       $('.skillsP1').css('color', '#FAFAFA');
       $('.contactForm').css('border', '2px solid white');
       $('footer').css('background', 'rgb(54, 54, 54)');
       darkMode = true;
   } else if (darkMode == true){
        $('body').css('background-color', '#FAFAFA');
        $('.fa-bars').css('color', '6b6b6b');
        $('#main').css('background', '#FAFAFA');
        $('.skillsIcon').css('color', '#000000');
        $('.aboutTitle').css('color', '#000000');
        $('.aboutName').css('color', '#000000');
        $('.aboutP1').css('color', '#000000');
        $('.skillsTitle').css('color', '#000000');
        $('.skillsP1').css('color', '#000000');
        $('.contactForm').css('border', 'none');
        $('footer').css('background', 'rgb(119, 119, 119)');
        darkMode = false;
   }

});

// Scroll animations 

$(window).on("scroll", function(evt) {

    let scrollTop = $(window).scrollTop();
    if (scrollTop > 30) {
        $('.aboutTitle').fadeIn();
        $('.aboutName').fadeIn(1500);
        $('.aboutP1').fadeIn(1500);
        $('.profilePic').fadeIn(1500);
    } else {
        $('.aboutTitle').fadeIn(2000);
        $('.aboutP1').fadeIn(3000);
    }

    if (scrollTop > 300){
        $('.skillsTitle').fadeIn(1500);
        $('.skillsTitle').css('display', 'flex');
        $('.skillsBox1').fadeIn(1800);
        $('.skillsBox1').css('display', 'flex');
        $('.skillsBox2').fadeIn(1800);
        $('.skillsBox2').css('display', 'flex');
    }

});


  // Scroll up 

  $('#scrollUp').click(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});