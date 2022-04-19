$(document).ready(function (){
    $('.owl-carousel').owlCarousel({
        loop:true,
        center: true,
        autoWidth:true,
        margin:2,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    function elim_agr_columna(col = ''){
        $('sub-seg').removeClass(function (index, css) {
            return (css.match (/\bcol-\S+/g) || []).join(' ');
        });
        if(col == 'col-12'){
            $('.sub-seg').addClass(col)
        } else {
            $('.sub-seg').addClass()
        }
        
    }
    $('.op-nav').click(function(){
        
        let scrollTo;
        switch($(this).text()){
            case 'Videojuegos':
                scrollTo = '#videojuegos';
                break;
            case 'Futbol':
                scrollTo = '#futbol';
                break;
            case 'Esports':
                scrollTo = '#esports';
                break;
            case 'Programacion':
                scrollTo = '#programacion';
                break;
        }
        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top
        }, 10);/*
        let position = scrollTo.offset().top;
        console.log($('html, body').scrollTop());
        $('html, body').animate({scrollTop: position}, 0);*/
       
    })
    $(window).resize(function size_html(){
        let size = $('.main-header').width();
        if(size <= 1800){
            if( size <= 1200){
                $('img').css("height", 220);
                $('.sub-seg').css('width','100%');
                $('.nav-link h3').css('font-size','1.1rem')
            } else{
                $('.sub-seg').each(function(){
                    if($(this).hasClass('col-3')){
                        $(this).css('width','25%');
                    }else if($(this).hasClass('col-4')){
                        $(this).css('width','30%');
                    }else if($(this).hasClass('col-5')){
                        $(this).css('width','41%');
                    }else if($(this).hasClass('col-6')){
                        $(this).css('width','50%');
                    }else if($(this).hasClass('col-7')){
                        $(this).css('width','58%')
                    }
                })
                $('img').css("height", (300/1800) * size);
            }
            
        } else{
            $('.sub-seg').each(function(){
                if($(this).hasClass('col-3')){
                    $(this).css('width','25%');
                }else if($(this).hasClass('col-4')){
                    $(this).css('width','30%');
                }else if($(this).hasClass('col-5')){
                    $(this).css('width','41%');
                }else if($(this).hasClass('col-6')){
                    $(this).css('width','50%');
                }else if($(this).hasClass('col-7')){
                    $(this).css('width','58%')
                }
            })
            $('.nav-link h3').css('font-size','1.7rem')
            $('img').css("height",300);
        }
        $(".owl-carousel").each(function(index, el) {
            var containerHeight = $(el).height();
            var containerWidth = $(el).width();
            $(el).find("img").each(function(index, img) {
              var w = $(img).prop('naturalWidth');
              var h = $(img).prop('naturalHeight');
              $(img).css({
                'width': Math.round(w * (containerWidth / w)) + 'px',
                'height': Math.round(h * (containerWidth / w)) + 'px',
              });
            }),
            $(el).owlCarousel({
              autoWidth: true
            });
        });
    })
    if($(window).width() <= 1800){
        let size = $('.main-header').width();
        if( $(window).width() <= 1200){
            $('img').css("height", 220);
            $('.sub-seg').css('width','100%')
            $('.nav-link h3').css('font-size','1.1rem')
            
        } else{
            $('.nav-link h3').css('font-size','1.7rem')
            $('img').css("height", (300/1800) * size);
        }
    }else{
        $('.nav-link h3').css('font-size','1.7rem')
        $('img').css("height",300)
    }
    
});
jQuery(document).ready(function($) {
    $(".owl-carousel").each(function(index, el) {
      var containerHeight = $(el).height();
      var containerWidth = $(el).width();
      $(el).find("img").each(function(index, img) {
        var w = $(img).prop('naturalWidth');
        var h = $(img).prop('naturalHeight');
        $(img).css({
          'width': Math.round(w * (containerWidth / w)) + 'px',
          'height': Math.round(h * (containerWidth / w)) + 'px',
        });
      }),
      $(el).owlCarousel({
        autoWidth: true
      });
    });
  });