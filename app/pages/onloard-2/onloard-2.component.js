'use strict';

angular.
module('peerUp').
component('onloard2', {
    templateUrl: 'pages/onloard-2/onloard-2.html',
    controllerAs: 'vm',
    controller: function onloard2Componenet() {
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
