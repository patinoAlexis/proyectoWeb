$(document).ready(function (){
    //Creacion de la forma del carousel
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
    //Función para moverse a los diferentes segmentos a través del nav-bar
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
        }, 10);
    })
    //Cuando la ventana cambie de tamaño, esta función se activara para que exista un
    // responsive design dentro de la pagina
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
                $('.video').css("width",400)
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
    //A diferencia de la parte anterior, aquí se tiene lo mismo, pero esto se activara cuando
    // se inicie la pagina, ya que no se sabe con que tamaño empezara la pagina
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

//Gracias a esta función, las imágenes dentro del carrusel serán responsive design.
jQuery(document).ready(function($) {
    $(".owl-carousel").each(function(index, el) {
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