$('document').ready(function () {





    TweenMax.to('h1', 1.5, {
        css: {
            y: 0,
            opacity: 1
        }
    })


    TweenMax.to('.visible', 1, {
        css: {

            opacity: 1,
            x: 0
        }
    })




    var Top = $('.firstp').offset().top;

    var Height = $('.firstp').height();

    var gTop = $('.g').offset().top;

    var gHeight = $('.g').height();

    var fTop = $('.f').offset().top;

    var fHeight = $('.f').height();

    var sTop = $('.s').offset().top;

    var sHeight = $('.s').height();

    var straTop = $('.strategique').offset().top;

    var straHeight = $('.strategique').height();

    var scroll = $(window).scrollTop();



    var windowHeight = $(window).height();



    $(document).on('scroll', function () {


        var scroll = $(window).scrollTop();




        if (Math.round(scroll + windowHeight) >= Math.round(Top + Height)) {

            console.log('test');
            TweenMax.to('.firstp', 2, {
                css: {
                    y: '0',
                    opacity: 1,

                }
            })
        }


        ///////


        if (Math.round(scroll + windowHeight) >= Math.round(gTop + gHeight)) {


            TweenMax.to('.g', 1, {
                css: {
                    scale: 1,
                    opacity: 1,

                }
            })


        } else {


            TweenMax.to('.g', 0.8, {
                css: {
                    scale: 0.5,
                    opacity: 0
                }
            })
        }


        ///////


        if (Math.round(scroll + windowHeight) >= Math.round(fTop + fHeight)) {


            TweenMax.to('.f', 1, {
                css: {
                    scale: 1,
                    opacity: 1,

                }
            })


        } else {


            TweenMax.to('.f', 0.8, {
                css: {
                    scale: 0.5,
                    opacity: 0
                }
            })
        }

        ///////


        if (Math.round(scroll + windowHeight) >= Math.round(sTop + sHeight)) {


            TweenMax.to('.s', 1, {
                css: {
                    scale: 1,
                    opacity: 1,

                }
            })


        } else {


            TweenMax.to('.s', 0.8, {
                css: {
                    scale: 0.5,
                    opacity: 0
                }
            })
        }

        ////////////
        if (Math.round(scroll + windowHeight) >= Math.round(straTop + straHeight)) {


            TweenMax.to('.strategique', 0.2, {
                opacity: 1,
                delay: 0.2
            })
            
            
            TweenMax.to('.strategique p', 0.2, {
                opacity: 1,
                delay: 0.6
            })
            TweenMax.to('.strategique a', 0.2, {
                opacity: 1,
                delay: 0.8
            })
            
            
        } else {


            TweenMax.to('.strategique', 0.8, {
                opacity: 0
            })
            
             
            TweenMax.to('.strategique p', 1, {
                opacity: 0,
              
            }) 
            TweenMax.to('.strategique a', 1, {
                opacity: 0,
              
            })
        }



    })


});