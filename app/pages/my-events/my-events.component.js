'use strict';

angular.
module('peerUp').
component('myEvents', {
    templateUrl: 'pages/my-events/my-events.html',
    controllerAs: 'vm',
    controller: function myEventsComponenet() {
        var vm = this;
        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '66px'});
        }
    }
});
