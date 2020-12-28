;(function($){
    $(function (){
        $('.news__slider').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            arrows:true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                     slidesToScroll: 1,
                     arrows: false
                }
            }]
        });

        // $('.vertical-slider').slick({
        //     dots: true,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     vertical: true
        // });

///Плавная прокрутка переходов о ссылкам
        $("body").on('click', '[href*="#"]', function(e){
            var fixed_offset = 100;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
            e.preventDefault();
        });
    });
})(jQuery);

const imgFlag =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14.25,
        center: { lat: 48.7283816, lng: 37.6039137 },
    });
    const mark = new google.maps.Marker({
        position: { lat: 48.7343469, lng: 37.6047192 },
        map,
        title: "LOCATION",
        icon: imgFlag,
        animation: google.maps.Animation.BOUNCE
    });
}

