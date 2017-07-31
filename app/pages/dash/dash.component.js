'use strict';

angular.
module('peerUp').
component('dashboard', {
    templateUrl: 'pages/dash/dash.html',
    controllerAs: 'vm',
    controller: function dashboardComponenet() {
        var vm = this;
        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '68px'});
        }
        vm.format = 'dd/MMMM/yyyy';
        vm.dt = new Date();
        vm.dateOptions = {
            formatYear: 'yy',
            showWeeks: false,
            minDate: new Date()
        };
    }
});
