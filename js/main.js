var classicLayout = false;
var portfolioKeyword;
var $container, $blog_container;

(function ($) {


   // ONE PAGE LAYOUT FUNCTIONS
   if($('html').hasClass('one-page-layout'))
   {
      // ------------------------------
      // PORTFOLIO DETAILS
      // if url contains a portfolio detail url
      portfolioKeyword = $('section.portfolio').attr('id');
      initialize();
      var detailUrl = giveDetailUrl();
      // ------------------------------
      // ------------------------------
      // LAYOUT DETECT
      var pagesCount = $('.wrapper > section').length;
      var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
      classicLayout = $('html').attr('data-classic-layout') === 'true';
      classicLayout = classicLayout || ($('html').attr('data-mobile-only-classic-layout') === 'true' && $(window).width() < 768);
      classicLayout = classicLayout || !Modernizr.csstransforms3d ||  pagesCount < 3 || isIE11 ;
      if(classicLayout) {
         $('html').addClass('classic-layout');
         setActivePage();
         //setTimeout(function() { setMasonry(); }, 600);
         //setTimeout(function() { setBlogMasonry(); }, 600);
         $.address.change(function() {
            setActivePage();
            //initializeMap();
            //setTimeout(function() { setMasonry(); }, 100);
            //setTimeout(function() { setBlogMasonry(); }, 100);
            });
      }
            setActivePage();
      // initialize triple layout
      $.initTripleLayout();
      // ------------------------------
      // FULL BROWSER BACK BUTTON SUPPORT
      var prevUrl = -1;
      $.address.change(function() {
            var detailUrl = giveDetailUrl();
            if(detailUrl != -1 ) {
               showProjectDetails(detailUrl);
            } else {
               if ($.address.path().indexOf("/"+ portfolioKeyword)!=-1) {
                  if(prevUrl != -1) {
                     hideProjectDetails(true,false);
                  } else {
                     hideProjectDetails(true,true);
                  }
               }
            }
            prevUrl = giveDetailUrl();
         });
   }
   // ------------------------------
   // ------------------------------
   // INITIALIZE
   var inAnimation, outAnimation;
   function initialize() {
      inAnimation = $('html').attr('data-inAnimation');
      outAnimation = $('html').attr('data-outAnimation');
   }

   function giveDetailUrl() {
      var address = $.address.value();
      var detailUrl;
      if (address.indexOf("/"+ portfolioKeyword + "/")!=-1 && address.length > portfolioKeyword.length + 2 ) {
         var total = address.length;
         detailUrl = address.slice(portfolioKeyword.length+2,total);
      } else {
         detailUrl = -1;
      }
      return detailUrl;
   }
   // ------------------------------
   // CHANGE PAGE
   function setActivePage()
   {
      $('.page').removeClass('active').hide();
      var path = $.address.path();
      path = path.slice(1, path.length);
      path = giveDetailUrl() != -1 ? portfolioKeyword : path;

      if(path == "")
      {  // if hash tag doesnt exists - go to first page
         var firstPage = $('.vs-nav li').first().find('a').attr('href');
         path = firstPage.slice(2,firstPage.length);
         $.address.path(path);
         return false;
      }
      // show page
      $('#'+ path).fadeIn();
      $('.page.active').hide();
      $('#'+ path).addClass('active');
      setCurrentMenuItem();

      if(path.indexOf(portfolioKeyword) != -1)
         setTimeout(function() { setMasonry(); }, 100);

      $("body").scrollTop(0);

   }
   // ------------------------------
   // ------------------------------
   // SET CURRENT MENU ITEM
   function setCurrentMenuItem() {
      var activePageId = $('.page.active').attr('id');
      // set default nav menu
      $('.vs-nav a[href$=' + activePageId +']').parent().addClass('current_page_item').siblings().removeClass('current_page_item');
   }
   // ------------------------------
   // ------------------------------
   // Rotating Words
   var rotate_words = $('.rotate-words');
   if(rotate_words.length) {

//      if(window.Modernizr.csstransforms) {

         rotate_words.each(function(index, element) {
            $(element).find('span').eq(0).addClass('active');
            setInterval(function(){
               next_word_index = $(element).find('.active').next().length ? $(element).find('.active').next().index() : 0;
               $(element).find('.active').addClass('rotate-out').removeClass('rotate-in active');
               $(element).find('span').eq(next_word_index).addClass('rotate-in active').removeClass('rotate-out');
            },3000);
         });

//            }
//           else {
//
//            rotate_words.each(function(index, element) {
//              $(element).find('span').eq(0).addClass('active').show();
//             setInterval(function(){
//               next_word_index = $(element).find('.active').next().length ? $(element).find('.active').next().index() : 0;
 //              $(element).find('.active').removeClass('active').slideUp(500);
 //             $(element).find('span').eq(next_word_index).addClass('active').slideDown(500);
   //         },3000);
    //     });
     // }
   }
   // ------------------------------
})(jQuery);
