'use strict';

angular.
module('peerUp').
component('createEvent', {
    templateUrl: 'pages/create-event/create-event.html',
    controllerAs: 'vm',
    controller: function createEventComponenet() {
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
