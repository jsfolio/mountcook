$(document).ready(function(){
    var view_port = $(document).width();
    var chk = false;
    $('.menu_box').click(function(){
        if(chk == true ) { 
            $('.menu_box').removeClass('active'); 
            $('.menu_box').addClass('menu_box_reverse');  
            $('.panel_overlay').css({
                display : 'none'
            })
            chk = false; 
        }
        else { 
            $('.menu_box').removeClass('menu_box_reverse');
            $('.menu_box').addClass('active');
            $(".mobile_menu").removeClass("hide");
            $('.panel_overlay').css({
                display : 'block'
            })
            chk = true;

        }

       $(".mobile_menu").toggleClass("show");
    });
  

    $('.panel_overlay').click(function(){
       $('.menu_box').trigger('click');
            
    });

});