'use strict';

angular.
module('peerUp').
component('onloard2ex', {
    templateUrl: 'pages/onloard-2-ex/onloard-2-ex.html',
    controllerAs: 'vm',
    controller: function onloard2exComponenet() {
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
