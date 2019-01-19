jQuery(document).ready(function($) {
	var successMessage = $('div#success-message');
	var failedMessage = $('div#failed-message');
	var wrongDataMessage = $('div#wrong-data');
	
	// Contact Form Functions
	successMessage.hide();
	failedMessage.hide();
	wrongDataMessage.hide();
	
	$('form#contactform').on('submit', function(event) {
		var valid = true;
		var name = $('#contactform #name');
		var email = $('#contactform #email');
		var subject = $('#contactform #subject');

		if ($(name).val().trim() === '') {
			valid = false;
		}

		if ($(email).val().trim() === '') {
			valid = false;
		}

		if ($(subject).val().trim() === '') {
			valid = false;
		}
		
		if (valid) {
			var contactData = {
				'name': $(name).val(),
				'email': $(email).val(),
				'subject': $(subject).val()
			};

			$.ajax({
				type		: 'POST',
				url			: 'https://us-central1-serverless-contact-3b082.cloudfunctions.net/api/lagartija',
				data		: contactData,
				dataType	: 'json',
				encode		: true
			})
			.done(function(data) {
				$('#contactform #name').val('');
				$('#contactform #email').val('');
				$('#contactform #subject').val('');
				$('#wrong-data').hide();
				$('#success-message').fadeIn(200);
			})
			.fail(function (data) {
				$('#wrong-data').hide();
				$('#failed-message').fadeIn(200);
			});
		} 
		
		if (!valid) {
			$('#failed-message').hide();
			$('#wrong-data').fadeIn(200);
		}
	
		event.preventDefault();

		return valid;
	});

});