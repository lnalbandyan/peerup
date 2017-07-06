$(document).ready(function() {
	
	$(".view-more-news a").click(function(){
			var txt = $(".hidden-news").is(':visible') ? 'View More News' : 'Hide News';
			$(".view-more-news a span").text(txt);
			$(this).toggleClass("active");
			$(".hidden-news").slideToggle();
	});
	
	$(".cities-btn").click(function(){
			 var txt = $(".more-city").is(':visible') ? 'View More Cities' : 'Hide Cities';
			 $(".cities-btn").text(txt);
			 $(".more-city").toggle();
	});
		
	$(".img-upload").click(function(){
			$(".upload-file").click();
	});
	
	$("#add-poll-opt").click(function(){
 			 $(".poll-option").append('<li><input type="text" placeholder="Add an option" /></li>');
	});
	
	$(".inline-reply-link").click(function(){
			$(".inline-reply").slideToggle();
	});
	
	$('#post-tab a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});
	//sign in
	$('.forgot-link').click(function (e) {
	  $("#signin-form, #btn-signup").hide();
	  $("#forgot-form, #btn-signin").fadeIn();
	});
	//sign in
	
	//sidebar toggle
	$('.dropdown-list > a').on('click', function (event) {
	  $(".dropdown-list-item").slideToggle();
	});
	//sidebar toggle
	
	// resister community
	$('#register-comm-btn').click(function (e) {
	  $("#register-form").hide();
	  $("#login-comm-form").fadeIn();
	});
	// resister community
	$('.topic-selection .dropdown-menu a').click(function(){
		$('.selected').text($(this).text());
	});
	
	$('.by-tags .tag').click(function(){
		$(this).toggleClass("tag-active");
	});
	
	$('.join-community').click(function(){
		$('#email-confirmation').fadeIn();
	});
	
	$('.title-toggle').click(function(){
 		$(this).toggleClass("open");
	  $(this).closest(".inline-widget").find(".inline-content").slideToggle();
	});
	
	$('.accordion-heading').click(function (e) {
	  $(this).toggleClass("open");
	  $(this).closest("li").find(".accordion-description").slideToggle();
 	});
	
	$('.create-post-link').click(function (e) {
	  $(".create-poll, .brain-map, .ask-question, .share-story, .guest-list").hide();
		$(".create-post, .timeline-block").fadeIn();
		$(".post-action li").removeClass("active");
		$(this).closest("li").addClass("active");
 	});
	
	$('.create-poll-link').click(function (e) {
	  $(".create-post, .brain-map, .ask-question, .share-story, .guest-list").hide();
		$(".create-poll, .timeline-block").fadeIn();
		$(".post-action li").removeClass("active");
		$(this).closest("li").addClass("active");
 	});
	
	$('.share-story-link').click(function (e) {
	  $(".create-post, .brain-map, .ask-question, .create-poll").hide();
		$(".share-story").fadeIn();
		$(".post-action li").removeClass("active");
		$(this).closest("li").addClass("active");
 	});
	
	$('.guest-link').click(function (e) {
	  $(".create-post, .brain-map, .ask-question, .share-story, .create-poll").hide();
		$(".guest-list").fadeIn();
		$(".post-action li").removeClass("active");
		$(this).closest("li").addClass("active");
 	});
	
	$('.question-link').click(function (e) {
	  $(".create-post, .brain-map, .create-poll, .timeline-block").hide();
		$(".ask-question, .timeline-block").fadeIn();
		$(".post-action li").removeClass("active");
		$(this).closest("li").addClass("active");
 	});
	
	$('.brain-link').click(function (e) {
	  $(".create-post, .create-poll, .timeline-block, .ask-question").hide();
		$(".brain-map").fadeIn();
		$(".post-action li").removeClass("active");
		$(this).closest("li").addClass("active");
 	});
	
	// advanced search
	$('.people-link').click(function (e) {
	  $("#search-question, #search-keyword").hide();
		$("#search-people").fadeIn();
		$(".post-action li").removeClass("active");
		$(this).closest("li").addClass("active");
 	});
	
	$('.question-link').click(function (e) {
	  $("#search-people, #search-keyword").hide();
		$("#search-question").fadeIn();
		$(".post-action li").removeClass("active");
		$(this).closest("li").addClass("active");
 	});
	
	$('.keyword-link').click(function (e) {
	  $("#search-people, #search-question").hide();
		$("#search-keyword").fadeIn();
		$(".post-action li").removeClass("active");
		$(this).closest("li").addClass("active");
 	});
	// advanced search
	
	$('#follow-this').click(function (e) {
	  $(this).text($(this).text() == 'Follow' ? 'Following' : 'Follow');
		$(this).toggleClass("btn-blue");
 	});
	
	$('#follow-class').click(function (e) {
	  $(this).text($(this).text() == 'Follow' ? 'Unfollow' : 'Follow');
		$(this).toggleClass("btn-blue");
 	});
		
	$('.qtyplus').click(function(e){
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        if (!isNaN(currentVal)) {
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 1
    $(".qtyminus").click(function(e) {
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        if (!isNaN(currentVal) && currentVal > 1) {
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            $('input[name='+fieldName+']').val(1);
        }
    });
	
	 $('.tab-link1').click(function (e) {
		 $("#container2, #container3").hide();																	 
	   $("#container1").fadeIn();
		 $(".inline-tabs li a").removeClass();
		 $(this).addClass("active");
 	 });
	 
	 $('.tab-link2').click(function (e) {
		 $("#container1, #container3").hide();																	 
	   $("#container2").fadeIn();
		 $(".inline-tabs li a").removeClass();
		 $(this).addClass("active");
 	 });
	 
	 $('.tab-link3').click(function (e) {
		 $("#container1, #container2").hide();																	 
	   $("#container3").fadeIn();
		 $(".inline-tabs li a").removeClass();
		 $(this).addClass("active");
 	 });
	 
	 //Account Setting
	 $('.setting-edit').click(function (e) {
	 	console.log('clicked')
		 $(this).hide();																					 	
		 $(this).closest("li").find(".setting-value").hide();
		 $(this).closest("li").find(".edit-field").fadeIn();
		 $("#general-action").fadeIn();
 	 });
	 $('#general .gn-cancel, #general .gn-save').click(function (e) {
		 $(".setting-value").show();
		 $(".edit-field").hide();
		 $("#general-action").hide();
		 $(".setting-edit").fadeIn();
 	 });
	//Account Setting
	
	//add card
	$('.add-card-link').click(function (e) {
		  $(".add-new-card").slideToggle();
 	});
	$('.add-card-btn, .cancel-card').click(function (e) {
		  $(".add-new-card").slideToggle();
 	});
	//add card
	//back to top
	$("#backToTop").hide();
    $(window).scroll(function() {
        if ($(this).scrollTop()>=300) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });
    $("#backToTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
		//back to top
	$('[data-toggle="tooltip"]').tooltip();
	
	$(document).on('click', '.notification .dropdown-menu, .message .dropdown-menu', function (e) {
	  e.stopPropagation();
	});
	
});


