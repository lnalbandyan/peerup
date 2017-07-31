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
      when('/communityFreshersHome', {
          template: '<community-freshers-home></community-freshers-home>'
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
      when('/messages', {
          template: '<messages></messages>'
      }).
      when('/myClubList', {
          template: '<my-club-list></my-club-list>'
      }).
      when('/myEvents', {
          template: '<my-events></my-events>'
      }).
      when('/myProfile', {
          template: '<my-profile></my-profile>'
      }).
      when('/notification', {
          template: '<notification></notification>'
      }).
      when('/onloard1', {
          template: '<onloard1></onloard1>'
      }).
      when('/onloard2', {
          template: '<onloard2></onloard2>'
      }).
      when('/onloard2ex', {
          template: '<onloard2ex></onloard2ex>'
      }).
      when('/onloard2opt', {
          template: '<onloard2opt></onloard2opt>'
      }).
      when('/onloard2org', {
          template: '<onloard2org></onloard2org>'
      }).
      when('/onloard3', {
          template: '<onloard3></onloard3>'
      }).
      when('/peersList', {
          template: '<peers-list></peers-list>'
      }).
      when('/registerCommunity', {
          template: '<register-community></register-community>'
      }).
      when('/signIn', {
          template: '<sign-in></sign-in>'
      }).
      when('/signUp', {
          template: '<sign-up></sign-up>'
      }).
      when('/studentHome', {
          template: '<student-home></student-home>'
      }).
      when('/support', {
          template: '<support></support>'
      }).
      when('/supportBusyOrg', {
          template: '<support-busy-org></support-busy-org>'
      }).
      when('/supportFixProblem', {
          template: '<support-fix-problem></support-fix-problem>'
      }).
      when('/supportNetworkAdmin', {
          template: '<support-network-admin></support-network-admin>'
      }).
      when('/supportPolicies', {
          template: '<support-policies></support-policies>'
      }).
      when('/supportUsingCommunity', {
          template: '<support-using-community></support-using-community>'
      }).
      when('/supportUsingPeersview', {
          template: '<support-using-peersview></support-using-peersview>'
      }).
      when('/termsOfUse', {
          template: '<terms-of-use></terms-of-use>'
      }).
      when('/userProfile', {
          template: '<user-profile></user-profile>'
      }).
      when('/dash', {
          template: '<dashboard></dashboard>'
      }).

      otherwise('/');
    }
  ]);
