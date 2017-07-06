'use strict';

angular.
  module('peerUp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('');

      $routeProvider.
      when('/about', {
        template: '<about-us></about-us>'
      }).
      when('/accountSettings', {
        template: '<account-settings></account-settings>'
      }).
      when('/advancedSearch', {
          template: '<advanced-search></advanced-search>'
      }).
      when('/businessProfile', {
          template: '<business-profile></business-profile>'
      }).
      when('/careers', {
          template: '<careers></careers>'
      }).
      when('/choosePlan', {
          template: '<choose-plan></choose-plan>'
      }).
      when('/clubList', {
          template: '<club-list></club-list>'
      }).
      when('/community', {
          template: '<community></community>'
      }).
      when('/communityAcs', {
          template: '<community-acs></community-acs>'
      }).
      when('/communityClass', {
          template: '<community-class></community-class>'
      }).
      otherwise('/');
    }
  ]);
