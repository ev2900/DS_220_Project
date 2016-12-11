//API Calls with AJAX
    
$(function (){

    var $firstt = $('#firstt');
    var $lastt  = $('#lastt');
    var $emaill = $('#emaill');
    var $phonee = $('#phonee');
    var $titlee = $('#titlee');
    var $typee = $('#typee');
    var $adress = $('#adress');
    var $desriptionn = $('#desriptionn'); 
    var $startt = $('#startt');
    var $endd = $('#endd'); 
    var $ratee = $('#ratee'); 
    var $additonn = $('#additonn');

    $('#submit-spot').on('submit', function(ev) {
        ev.preventDefault();

        var new_spot = {
            firstName:$firstt.val(),
            lastName:$lastt.val(),
            email:$emaill.val(),
            phoneNumber:$phonee.val(),
            title:$titlee.val(),
            type:$typee.val(), 
            adress:$adress.val(),
            description:$desriptionn.val(),
            start:$startt.val(),
            end:$endd.val(),
            rate:$ratee.val(),
            additionalInfro:$additonn.val(),
        };  

        $.ajax({
            type: 'POST',
            url: 'http://35.161.233.165:9000/api_pending/spots_pending',
            data: new_spot,
            success: function(newSpot){
                window.location.replace("/view_orders");
            },
            error: function() {
                alert('error saving order');
            }
        });

    });

});
