'use strict';

angular.
module('peerUp').
component('marketPlace', {
    templateUrl: 'pages/market-place/market-place.html',
    controllerAs: 'vm',
    controller: function marketPlaceComponenet($uibModal ) {
        var vm = this;
        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '86px'});
        }

    }
});
