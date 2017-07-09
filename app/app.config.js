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
      when('/communityClassesDetail', {
          template: '<community-classes-details></community-classes-details>'
      }).
      when('/communityClassesList', {
          template: '<community-classes-list></community-classes-list>'
      }).
      when('/communityCourseList', {
          template: '<community-course-list></community-course-list>'
      }).
      when('/communityFeed', {
          template: '<community-feed></community-feed>'
      }).
      when('/communityGroup', {
          template: '<community-group></community-group>'
      }).
      when('/communityJobCenter', {
          template: '<community-job-center></community-job-center>'
      }).
      when('/communitySocities', {
          template: '<community-socities></community-socities>'
      }).
      when('/communityYearEnrollment', {
          template: '<community-year-enrollment></community-year-enrollment>'
      }).
      when('/contact', {
          template: '<contact></contact>'
      }).
      when('/coursesFeed', {
          template: '<courses-feed></courses-feed>'
      }).
      when('/createEvent', {
          template: '<create-event></create-event>'
      }).
      when('/createGroup', {
          template: '<create-group></create-group>'
      }).
      when('/dealsHub', {
          template: '<deals-hub></deals-hub>'
      }).
      when('/eventsDetail', {
          template: '<events-detail></events-detail>'
      }).
      when('/eventsHome', {
          template: '<events-home></events-home>'
      }).
      when('/eventsLanding', {
          template: '<events-landing></events-landing>'
      }).
      when('/followersFollowing', {
          template: '<followers-following></followers-following>'
      }).
      when('/forumCareers', {
          template: '<forum-careers></forum-careers>'
      }).
      when('/forumHome', {
          template: '<forum-home></forum-home>'
      }).
      when('/forumPostSecondary', {
          template: '<forum-post-secondary></forum-post-secondary>'
      }).
      when('/forumPostgraduate', {
          template: '<forum-postgraduate></forum-postgraduate>'
      }).
      when('/groupFeed', {
          template: '<group-feed></group-feed>'
      }).
      when('/home', {
          template: '<home></home>'
      }).
      when('/index', {
          template: '<homepage></homepage>'
      }).
      when('/marketPlace', {
          template: '<market-place></market-place>'
      }).
      when('/marketPlaceAds', {
          template: '<market-place-ads></market-place-ads>'
      }).
      when('/marketPlaceSell', {
          template: '<market-place-sell></market-place-sell>'
      }).

      otherwise('/');
    }
  ]);
