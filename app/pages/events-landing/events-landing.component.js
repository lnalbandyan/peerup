'use strict';

angular.
module('peerUp').
component('eventsLanding', {
    templateUrl: 'pages/events-landing/events-landing.html',
    controllerAs: 'vm',
    controller: function eventsLandingComponenet($uibModal ) {
        var vm = this;
        vm.format = 'dd/MMMM/yyyy';
        vm.dt = new Date();
        vm.dateOptions = {
            formatYear: 'yy',
            showWeeks: false,
            minDate: new Date()
        };
        vm.items = [1, 2, 3, 4, 5, 6, 7, 8];
        vm.properties = {
            items: 1,
            loop: true,
            dots: false,
            nav:true,
            onChange: function () {

            }
        };
        vm.dateProperties = {
            items: 8,
            loop: false,
            dots: false,
            nav:true,
            onChange: function () {

            }
        };

        vm.moreCities = function(){
            var txt = $(".more-city").is(':visible') ? 'View More Cities' : 'Hide Cities';
            $(".cities-btn").text(txt);
            $(".more-city").toggle();
        };

    }
});
