// phone navbar toggle

const toggleButton = document.querySelector(".toggle-menu");
const navBar = document.querySelector(".nav-bar");
const disableSrolling = document.querySelector("html");
toggleButton.addEventListener("click", () => {
    navBar.classList.toggle("toggle");



});



$("#play_button , #video_placeholder").click(function () {
    console.log("clicked")
    $("#play_button").addClass("video_placeholder_hide")
    $("#video_placeholder").addClass("video_placeholder_hide")
    $("iframe").addClass("iframe")
    $("#youtube_video")[0].src += "?autoplay=1";
});



//fixed header

$(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
        $("header").addClass("header");
        $(".logo ").addClass("fixed_logo");
        $(".toggle-menu").addClass("fixed_toggle");
        $(".nav").addClass("hide");
        $(".hero ").addClass("hero_image");
        $(".uparrow ").addClass("uparrow_show");

    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() < 1) {
        $("header").removeClass("header");
        $(".logo ").removeClass("fixed_logo");
        $(".toggle-menu").removeClass("fixed_toggle");
        $(".nav").removeClass("hide");
        $(".hero ").removeClass("hero_image");
        $(".uparrow ").removeClass("uparrow_show");

    }
});


//pictures slide in 

function scrollAppear() {

    var dashboardImage = document.querySelector(".golf_dashbord");
    var chargingImage = document.querySelector(".golf_charging");
    var parkedImage = document.querySelector(".golf_parked");
    var secondTextFadein = document.querySelector(".h1_second_section");
    var dashboardImagepositionTop = dashboardImage.getBoundingClientRect().top;

    var screenposition = window.innerHeight / 1.2
    var screenpositionRemove = window.innerHeight / 1.7;
    var screenpositionBottom = window.innerHeight / 230
    console.log
    if (dashboardImagepositionTop < screenposition) {
        secondTextFadein.classList.add('textFadeIn');
        dashboardImage.classList.add('golf_dashbord_add');
        chargingImage.classList.add('golf_dashbord_add');
        parkedImage.classList.add('golf_dashbord_add');

    }
    if (dashboardImagepositionTop > screenpositionRemove) {
        secondTextFadein.classList.remove('textFadeIn');
        dashboardImage.classList.remove('golf_dashbord_add');
        chargingImage.classList.remove('golf_dashbord_add');
        parkedImage.classList.remove('golf_dashbord_add');



    }
    if (dashboardImagepositionTop < screenpositionBottom) {
        dashboardImage.classList.remove('golf_dashbord_add');
        chargingImage.classList.remove('golf_dashbord_add');
        parkedImage.classList.remove('golf_dashbord_add');
        secondTextFadein.classList.remove('textFadeIn');

    }
}


if ($(window).width() > 1050) {
    window.addEventListener('scroll', scrollAppear);
} else if ($(window).width() < 1050) {

    $(".golf_charging").addClass("golf_dashbord_add")
    $(".golf_dashbord").removeClass("golf_dashbord_add")
    $(".golf_parked").removeClass("golf_dashbord_add")

}


///end



///scroll top button 

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

///end






/////dropdown interior section 

$("#interior_arrow").click(function () {
    $(this).toggleClass("arrow_up");
    $('.Fifth_section').toggleClass("Fifth_section_interior");
    $('.Fifth_section_box').addClass("Fifth_section_box_height");
    $(".interior_text").toggleClass("text_show");

    $(".Exterior_text").removeClass("text_show");
    $(".lights_text").removeClass("text_show");
    $(".wheels_text").removeClass("text_show");
    $("#interior_arrow").click(function () {

        $('.Fifth_section_box').toggleClass("Fifth_section_box_height");

    })

})

////end


/////dropdown Exterior section 







$("#Exterior_arrow").click(function () {
    $(this).toggleClass("arrow_up");
    $('.Fifth_section').toggleClass("Fifth_section");
    $('.Fifth_section_box').addClass("Fifth_section_box_height");
    $(".Exterior_text").toggleClass("text_show");

    $(".interior_text").removeClass("text_show");
    $(".lights_text").removeClass("text_show");
    $(".wheels_text").removeClass("text_show");
    $("#Exterior_arrow").click(function () {

        $('.Fifth_section_box').toggleClass("Fifth_section_box_height");

    })

})



////end

/////dropdown lights section 

$("#lights_arrow").click(function () {
    $(this).toggleClass("arrow_up");
    $('.Fifth_section').toggleClass("Fifth_section_lights");
    $('.Fifth_section_box').addClass("Fifth_section_box_height");
    $(".lights_text").toggleClass("text_show");

    $(".interior_text").removeClass("text_show");
    $(".Exterior_text").removeClass("text_show");
    $(".wheels_text").removeClass("text_show");
    $("#lights_arrow").click(function () {

        $('.Fifth_section_box').toggleClass("Fifth_section_box_height");

    })

})



////end



/////dropdown wheels section 



$("#wheels_arrow").click(function () {
    $(this).toggleClass("arrow_up");
    $('.Fifth_section').toggleClass("Fifth_section_wheels");
    $('.Fifth_section_box').addClass("Fifth_section_box_height");
    $(".wheels_text").toggleClass("text_show");

    $(".interior_text").removeClass("text_show");
    $(".Exterior_text").removeClass("text_show");
    $(".lights_text").removeClass("text_show");
    $("#wheels_arrow").click(function () {

        $('.Fifth_section_box').toggleClass("Fifth_section_box_height");

    })

})



////end









$(".light_grey").click(function () {

    $('#golf_slider').attr('src', 'Pictures/Reflex Silver Metallic.png');
    $('#golf_slider').prop('alt', 'Light Grey E Golf');
    $(this).addClass('selected')
    $(".white").removeClass('selected')
    $(".dark_grey").removeClass('selected')
    $(".dark_blue").removeClass('selected')
    $(".light_black").removeClass('selected')
    $(".black").removeClass('selected')
    $('.color_name').html("Reflex Silver Metallic");
    $('.price').html("30,500");

});


$(".white").click(function () {

    $('#golf_slider').attr('src', 'Pictures/golf%20whhite.png');
    $('#golf_slider').prop('alt', 'White E Golf');
    $(this).addClass('selected')
    $(".light_grey").removeClass('selected')
    $(".dark_grey").removeClass('selected')
    $(".dark_blue").removeClass('selected')
    $(".light_black").removeClass('selected')
    $(".black").removeClass('selected')
    $('.color_name').html("Pure White");
    $('.price').html("29,800");

});




$(".dark_grey").click(function () {
    console.log("clciked")
    $('#golf_slider').attr('src', 'Pictures/Indium Gray Metallic.png');
    $('#golf_slider').prop('alt', 'Gray Metallic E Golf');
    $(this).addClass('selected')
    $(".light_grey").removeClass('selected')
    $(".white").removeClass('selected')
    $(".dark_blue").removeClass('selected')
    $(".light_black").removeClass('selected')
    $(".black").removeClass('selected');
    $('.color_name').html("Indium Gray Metallic");
    $('.price').html("34,000");
    $('.module').html("ADVANCED");


})




$(".dark_blue").click(function () {
    console.log("clciked")
    $('#golf_slider').attr('src', 'Pictures/Blue_golf.png');
    $('#golf_slider').prop('alt', 'Blue E Golf');
    $(this).addClass('selected')
    $(".light_grey").removeClass('selected')
    $(".white").removeClass('selected')
    $(".dark_grey").removeClass('selected')
    $(".light_black").removeClass('selected')
    $(".black").removeClass('selected');
    $('.color_name').html("Atlantic Blue Metallic");
    $('.price').html("40,000")
    $('.module').html("SPORTS");


});



$(".light_black").click(function () {
    console.log("clciked")
    $('#golf_slider').attr('src', 'Pictures/Urano Gray.png');
    $('#golf_slider').prop('alt', 'Dark grey E Golf');
    $(this).addClass('selected')
    $(".light_grey").removeClass('selected')
    $(".white").removeClass('selected')
    $(".dark_grey").removeClass('selected')
    $(".dark_blue").removeClass('selected')
    $(".black").removeClass('selected')
    $('.color_name').html("Urano Gray");
    $('.price').html("34,000");
    $('.module').html("ADVANCED");
});


$(".black").click(function () {
    console.log("clciked")
    $('#golf_slider').attr('src', 'Pictures/black_golf.png');
    $('#golf_slider').prop('alt', 'Black E Golf');
    $(this).addClass('selected')
    $(".light_grey").removeClass('selected')
    $(".white").removeClass('selected')
    $(".dark_grey").removeClass('selected')
    $(".dark_blue").removeClass('selected')
    $(".light_black").removeClass('selected')
    $('.color_name').html("Deep Black Pearl");
    $('.price').html("30,000");
    $('.module').html("BASIC");
});
