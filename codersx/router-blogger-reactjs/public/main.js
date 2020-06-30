const responsive={
    0:{
        items:1,
    },
    320:{
        items:1,
    },
    560:{
        items:2,
    },
    960:{
        items:3,

    }
}
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,      
        dots:false,
        nav:true,
        responsive:responsive
    });
})