'use strict';

angular.
module('peerUp').
component('onloard2opt', {
    templateUrl: 'pages/onloard-2-opt/onloard-2-opt.html',
    controllerAs: 'vm',
    controller: function onloard2optComponenet() {
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
