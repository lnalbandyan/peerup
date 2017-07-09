'use strict';

angular.
module('peerUp').
component('homepage', {
    templateUrl: 'pages/homepage/homepage.html',
    controllerAs: 'vm',
    controller: function homepageComponenet($location, $anchorScroll ) {
        var vm = this;
        vm.items = [1, 2, 3, 4, 5, 6, 7, 8];
        vm.properties = {
            items: 1,
            loop: true,
            dots: false,
            nav:true,
            onChange: function () {

            }
        };

        vm.gotoSection = function(hash) {
            $("body").animate({scrollTop: $('#' + hash).offset().top}, "slow");
        };
        vm.titleOpen = function(e){
            $(e.target).toggleClass("open");
            $(e.target).closest(".inline-widget").find(".inline-content").slideToggle();
        };

        vm.accordionOpen = function (e) {
            $(e.target).toggleClass("open");
            $(e.target).closest("li").find(".accordion-description").slideToggle();
        };

        sitckyHeader();

        $(window).scroll(function () {
            sitckyHeader();
        });

        function sitckyHeader() {
            var window_top = $(window).scrollTop();
            var div_top = $('#sticky-anchor').offset().top;
            if (window_top > div_top) {
                $('#sticky').addClass('stick');
                $('#sticky-anchor').height($('#sticky').outerHeight());
            } else {
                $('#sticky').removeClass('stick');
                $('#sticky-anchor').height(0);
            }
        }


    }
});
