'use strict';

angular.
module('peerUp').
component('marketPlaceSell', {
    templateUrl: 'pages/market-place-sell/market-place-sell.html',
    controllerAs: 'vm',
    controller: function marketPlaceSellComponenet($uibModal ) {
        var vm = this;
        if ($(window).width() > 1025) {

            var $sticky = $('.sticky');
            $sticky.css({position: 'fixed', top: '86px'});
        }

    }
});
