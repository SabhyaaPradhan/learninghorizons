$(document).ready(function () {
     var $randomnbr = $('.nbr');
     var $timer = 50;
     var $it;
     var $data = 0;
     var index;
     var change;
     var letters = ["l", "e", "a", "r", "n", "i", "n", "g"];
     var loader = document.getElementsByClassName("preloader")[0];
     var loadingBarFill = document.querySelector(".loading-bar-fill");
     var totalShuffleSteps = 100;
 
     $randomnbr.each(function () {
         change = Math.round(Math.random() * totalShuffleSteps);
         $(this).attr('data-change', change);
     });
 
     function random() {
         return Math.round(Math.random() * 9);
     }
 
     function select() {
         return Math.round(Math.random() * $randomnbr.length + 1);
     }
 
     function value() {
         $('.nbr:nth-child(' + select() + ')').html('' + random() + '');
         $('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
         $data++;
 
         var allConverted = true;
 
         $randomnbr.each(function () {
             if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                 index = $('.ltr').index(this);
                 $(this).html(letters[index]);
                 $(this).removeClass('nbr');
             } else {
                 allConverted = false;
             }
         });
 
         var progress = ($data / totalShuffleSteps) * 100;
         loadingBarFill.style.width = progress + "%";
 
         if (allConverted) {
             clearInterval($it);
 
             gsap.timeline()
                 .to(loader, {
                     duration: 1.5,
                     yPercent: -100,
                     ease: "power2.inOut",
                     onComplete: () => {
                         loader.style.display = "none";
                     }
                 })
                 .to(".content", {
                     duration: 2,
                     opacity: 1,
                     y: 0,
                     ease: "power2.out",
                 }, "-=1");
         }
     }
 
     $it = setInterval(value, $timer);
 });
 