$(document).ready(function() {

    //autoSize
    function heightDetect() {
        $(".section_header").css("height", $(window).height());
    }

    heightDetect();

    //Owl Carousel slider logic

    $('.slider_wrap').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dotsContainer: ".dots_nav",
        dots: true,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false

    });
    $('.slider_team_wrap').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navContainer: ".nav_container",
        dotsContainer: ".dots_team_nav",
        dots: true,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false
    });
    $('.slider_clients_wrap').owlCarousel({
        loop: true,
        margin: 0,
        dotsContainer: ".dots_clients_nav",
        dots: true,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false
    });

    var sWork = $('.slider_wrapper_work');
    sWork.on('initialized.owl.carousel', function (event) {
        $('.current').text(event.item.index - 1);
        $('.amount').text(event.item.count);
    });
    sWork.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navContainer: ".navigation_container",
        dotsContainer: ".navigation_dots_container",
        dots: true,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false
    });
    sWork.on('changed.owl.carousel', function (event) {
        $('.current').text(event.item.index - 1);
        $('.amount').text(event.item.count);

    });
    $('.slider_wrap_related').owlCarousel({
        loop: true,
        margin: 0,
        dotsContainer: ".dots_related_container",
        dots: true,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false
    });

    //End of Sliders

    //Masonry view
    $('.masonry').isotope({
        itemSelector: '.post-box',
    });

    //mobile menu
    $('.nav').stackable();

    //active tabs and sorting
    $(".works li").click(function (e) {
        e.preventDefault();
        $('.works li').removeClass('active');
        $(this).addClass('active');

        var filterVal = $(this).attr('data-filter');
        $('.masonry').isotope({
            filter: filterVal,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
    });

    $(".blog_filter li").click(function (e) {
        e.preventDefault();
        $('.blog_filter li').removeClass('active');
        $(this).addClass('active');

        var filterVal = $(this).attr('data-filter');
        $('.blog_wrap').isotope({
            filter: filterVal,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
    });
    //end of sorting


    $('.googleMap').ClassyMap(); //google map contact page

});

var headerAnim = document.getElementsByClassName('header');
for (var i = 0; i < headerAnim.length; i++) {
    new Waypoint({
        element: headerAnim[i],
        handler: function() {
            this.element.classList.remove('visNone');
            this.element.className += ' animated bounceInUp';
            this.destroy();
        },
        offset: 'bottom-in-view',
        continuous: false
    })
};

//Animatiions with waypoints
var aboutAnim = document.getElementsByClassName('aboutAnim');
var postRight = document.getElementsByClassName('post-right');
var postLeft = document.getElementsByClassName('post-left');

var postMiddleUp = new Waypoint({
    element: document.querySelector('.post-middle-up'),
    handler: function (direction) {
        if(direction === 'down'){
            this.element.classList.remove('visNone');
            this.element.className += ' animated fadeInDown';
            this.destroy();
        }
    },
    offset: 'bottom-in-view',
});
var postMiddleDown = new Waypoint({
    element: document.querySelector('.post-middle-down'),
    handler: function (direction) {
        if(direction === 'down'){
            this.element.classList.remove('visNone');
            this.element.className += ' animated fadeInUp';
            this.destroy();
        }
    },
    offset: 'bottom-in-view',

});
var sliderTeam = new Waypoint({
    element: document.querySelector('.teamSlide'),
    handler: function (direction) {
        if(direction === 'down'){
            this.element.classList.remove('visNone');
            this.element.className += ' animated rubberBand';
            this.destroy();
        }
    },
    offset: 'bottom-in-view',
});
var sliderClients = new Waypoint({
    element: document.querySelector('.clientsSlide'),
    handler: function (direction) {
        if(direction === 'down'){
            this.element.classList.remove('visNone');
            this.element.className += ' animated fadeInUp';
            this.destroy();
        }
    },
    offset: 'bottom-in-view',
});
var getInfo = new Waypoint({
    element: document.querySelector('.getInfo'),
    handler: function (direction) {
        if(direction === 'down'){
            this.element.classList.remove('visNone');
            this.element.className += ' animated bounceIn';
            this.destroy();
        }
    },
    offset: 'bottom-in-view',
});
var getFields = new Waypoint({
    element: document.querySelector('.getFields'),
    handler: function (direction) {
        if(direction === 'down'){
            this.element.classList.remove('visNone');
            this.element.className += ' animated wobble';
            this.destroy();
        }
    },
    offset: 'bottom-in-view',
});

for(var i = 0; i < aboutAnim.length; i++){
    aboutAnim[i].classList.add('visNone');
    new Waypoint({
        element: aboutAnim[i],
        handler: function(direction){
            if(direction === 'down'){
                this.element.classList.remove('visNone');
                this.element.className += ' animated bounceIn';
                this.destroy();
            }
        },
        offset: 'bottom-in-view',
        continuous: false
    });
}
for(var i = 0; i < postRight.length; i++){
    postRight[i].classList.add('visNone');
    new Waypoint({
        element: postRight[i],
        handler: function(direction){
            if(direction === 'down'){
                this.element.classList.remove('visNone');
                this.element.className += ' animated fadeInRight';
                this.destroy();
            }
        },
        offset: 'bottom-in-view',
        continuous: false
    });
};
for(var i = 0; i < postLeft.length; i++){
    postLeft[i].classList.add('visNone');
    new Waypoint({
        element: postLeft[i],
        handler: function(direction){
            if(direction === 'down'){
                this.element.classList.remove('visNone');
                this.element.className += ' animated fadeInLeft';
                this.destroy();
            }
        },
        offset: '80%',
        continuous: false
    });
}
//End of animations

//ajax form submitted

$('form.ajax').on('submit', function (e) {
    e.preventDefault();
    var self = $(this),
        url = self.attr('action'),
        method = self.attr('method'),
        data = {};

    self.find("[name]").each(function(index, value){
        var self = $(this),
            name = self.attr('name'),
            value = self.val();
        data[name]  = value;
    });
    console.log(data);
    $.ajax({
        url:url,
        type:method,
        data:data
    });
});

//wayPoint section

