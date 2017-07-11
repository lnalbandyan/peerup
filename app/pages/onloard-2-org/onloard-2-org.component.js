'use strict';

angular.
module('peerUp').
component('onloard2org', {
    templateUrl: 'pages/onloard-2-org/onloard-2-org.html',
    controllerAs: 'vm',
    controller: function onloard2orgComponenet() {
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
