$(document).ready(function () {
     var $randomnbr = $('.nbr');
     var $timer = 30;
     var $it;
     var $data = 0;
     var index;
     var change;
     var letters = ["l", "e", "a", "r", "n", "i", "n", "g"];
     var loader = document.getElementsByClassName("preloader")[0];
     var loadingBarFill = document.querySelector(".loading-bar-fill");
     var totalShuffleSteps = 100; // Total steps required for complete shuffle
 
     $randomnbr.each(function () {
         change = Math.round(Math.random() * totalShuffleSteps); // Changed to totalShuffleSteps
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
 
         // Calculate progress and update the loading bar
         var progress = ($data / totalShuffleSteps) * 100;
         loadingBarFill.style.width = progress + "%";
 
         if (allConverted) {
             clearInterval($it);
             loader.classList.add("fade-out");
 
             setTimeout(function () {
                 loader.style.display = "none";
             }, 1500);
         }
     }
 
     $it = setInterval(value, $timer);
 });
 