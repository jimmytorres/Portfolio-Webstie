//function for progress bars
$(function(){
    //selects everything within "pageContent"
      var $pageContent = $('#page-content');
      //activates the "fadeOut" & "fadeIn" animations
      var loadContent = function(url){
          $pageContent.fadeOut(function(){
              $pageContent.load(url, function(){
                  $pageContent.fadeIn();
              });
          });
      };
      //activates animations
      loadContent('/#');
      $('.page-link').on('click', function(event) {
          event.preventDefault();
          loadContent($(this).attr('href'));
      });
  });