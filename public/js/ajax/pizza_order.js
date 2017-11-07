//API Calls with AJAX
    
$(function (){

    var $firstt = $('#firstName');
    var $lastt  = $('#lastName');
    var $phonee = $('#phoneNumber');
    var $typee = $('#type');
    var $addresss = $('#address');
    var $ccnumberr = $('#ccnumber'); 
    var $ccnamee = $('#ccname');
    var $ccexperationdatee = $('#ccexperationdate'); 
    var $ccsecuritycodee = $('#ccsecuritycode');

    $('#submit-spot').on('submit', function(ev) {
        ev.preventDefault();

        var new_spot = {
            firstName:$firstt.val(),
            lastName:$lastt.val(),
            phoneNumber:$phonee.val(),
            type:$typee.val(),
            address:$addresss.val(),
            ccnumber:$ccnumberr.val(),
            ccname:$ccnamee.val(),
            ccexperationdate:$ccexperationdatee.val(),
            ccsecuritycode:$ccsecuritycodee.val()
        };  

        $.ajax({
            type: 'POST',
            url: 'http://40.71.215.32:9000/order/pizza',
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
