/**
 * Created by tom on 12/27/14.
 */

var Page={};

Page.load = function(){

    //register nav menu events
    $('nav').on('click','a',function(jqevnt){
        //debugger;

        jqevnt.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - $('nav').height()
        }, {
            duration:1000,
            easing:'swing',
            complete:function(){
                console.log(3);
            }
        });

    });

}

Page.load();