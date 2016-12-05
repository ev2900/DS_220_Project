//API Calls with AJAX
    
$(function (){

    var $id = $('#idd');
    var $cardd = $('#cardd');
    var $codee = $('#codee');
    var $monthh = $('#monthh');
    var $yearr = $('#yearr');

    $('#pay').on('submit', function(ev) {
        ev.preventDefault();
        
        var credit_card = {
            id:$id.val(),
            number:$cardd.val(),
            security_code:$codee.val(),
            month:$monthh.val(),
            year:$yearr.val()
        };

        $.ajax({
            type: 'POST',
            url: 'http://www.parkingbee.co:9000/payment/payment',
            data: credit_card,
            success: function(newSpot){
                window.location.replace("/thank_you_pay");
            },
            error: function() {
                alert('error saving order');
            }
        });

    });

});