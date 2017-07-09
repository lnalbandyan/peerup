'use strict';

angular.
module('peerUp').
component('marketPlaceAds', {
    templateUrl: 'pages/market-place-ads/market-place-ads.html',
    controllerAs: 'vm',
    controller: function marketPlaceAdsComponenet($uibModal ) {
        var vm = this;

        vm.items = [1, 2, 3, 4, 5, 6, 7, 8];
        vm.properties = {
            items: 1,
            loop: true,
            dots: false,
            nav:true,
            onChange: function () {

            }
        };

    }
});
