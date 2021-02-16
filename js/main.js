/* global console */

$("ul li a").click(function() {
    $(this).parent().addClass('active').siblings().removeClass('active');
  });
  $(document).ready(function (){
    $("#click").click(function (){
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 2000);
      });
    });
  $(document).ready(function (){
    $("#click2").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact-us").offset().top
        }, 2000);
      });
    });
    $(document).ready(function (){
      $("#click-1").click(function (){
          $('html, body').animate({
              scrollTop: $("#about").offset().top
          }, 2000);
        });
      });
      $(document).ready(function (){
        $("#click-2").click(function (){
            $('html, body').animate({
                scrollTop: $("#port").offset().top
            }, 2000);
          });
        });
        $(document).ready(function (){
          $("#click-3").click(function (){
              $('html, body').animate({
                  scrollTop: $("#ser").offset().top
              }, 2000);
            });
          });
          $(document).ready(function (){
            $("#click-4").click(function (){
                $('html, body').animate({
                    scrollTop: $("#price").offset().top
                }, 2000);
              });
            });
            $(document).ready(function (){
              $("#click-5").click(function (){
                  $('html, body').animate({
                      scrollTop: $("#team").offset().top
                  }, 2000);
                });
              });
              $(document).ready(function (){
                $("#click-6").click(function (){
                    $('html, body').animate({
                        scrollTop: $("#blog").offset().top
                    }, 2000);
                  });
                });
                $(document).ready(function (){
                  $("#click-7").click(function (){
                      $('html, body').animate({
                          scrollTop: $("#contact").offset().top
                      }, 2000);
                    });
                  });
                  $(document).ready(function (){
                    $("#go-to-up").click(function (){
                        $('html, body').animate({
                            scrollTop: $("#home").offset().top
                        }, 2000);
                      });
                    });
                  // trigger nice scroll
                  $("body").niceScroll({
                    cursorwidth:"16px",
                    cursorcolor:"#6195ff"
                  });
            