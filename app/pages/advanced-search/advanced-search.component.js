'use strict';

angular.
module('peerUp').
component('advancedSearch', {
    templateUrl: 'pages/advanced-search/advanced-search.html',
    controllerAs: 'vm',
    controller: function advancedSearchComponenet() {
        var vm = this;
        vm.peopleLinkOpen = function (e) {
            $("#search-question, #search-keyword").hide();
            $("#search-people").fadeIn();
            $(".post-action li").removeClass("active");
            $(e.target).closest("li").addClass("active");
        };

        vm.keywordLinkOpen = function (e) {
            $("#search-people, #search-keyword").hide();
            $("#search-question").fadeIn();
            $(".post-action li").removeClass("active");
            $(e.target).closest("li").addClass("active");
        };

        vm.questionLinkOpen = function (e) {
            $("#search-people, #search-question").hide();
            $("#search-keyword").fadeIn();
            $(".post-action li").removeClass("active");
            $(e.target).closest("li").addClass("active");
        };
    }
});
