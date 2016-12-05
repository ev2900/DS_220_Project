//
$(document).ready(function() {
    
	var $email_email = $('#email_email');
    var $id_id  = $('#id_id');

	$.ajax({
        type: 'GET',
        url: 'http://www.parkingbee.co:9000/email_conformation/' + $email_email.val(),
        success: function() {
            //
        },
        error: function() {
            //alert('error loading spots');
        },
        timeout: 2000
    });

	$.ajax({
        type: 'GET',
        url: 'http://www.parkingbee.co:9000/email_approval/' + $email_email.val() + "/" + $id_id.val(),
        success: function() {
            //
        },
        error: function() {
            //alert('error loading spots');
        },
        timeout: 2000
    });


});