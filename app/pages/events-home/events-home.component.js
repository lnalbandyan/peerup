'use strict';

angular.
module('peerUp').
component('eventsHome', {
    templateUrl: 'pages/events-home/events-home.html',
    controllerAs: 'vm',
    controller: function eventsHomeComponenet($uibModal ) {
        var vm = this;
        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '66px'});
        }
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
            responsive: {
                0: {items: 5},
                767: {items: 8}
            },
            onChange: function () {

            }
        };

    }
});
