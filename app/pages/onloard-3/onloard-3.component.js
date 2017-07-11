'use strict';

angular.
module('peerUp').
component('onloard3', {
    templateUrl: 'pages/onloard-3/onloard-3.html',
    controllerAs: 'vm',
    controller: function onloard3Componenet() {
        var vm = this;
        vm.format = 'dd/MMMM/yyyy';
        vm.dt = new Date();
        vm.dateOptions = {
            formatYear: 'yy',
            showWeeks: false,
            minDate: new Date()
        };
    }
});
