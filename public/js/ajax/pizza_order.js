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

    $('#submit-order').on('submit', function(ev) {
        ev.preventDefault();

        var new_order = {
            firstName:$firstt.val(),
            lastName:$lastt.val(),
            phoneNumber:$phonee.val(),
            type:$typee.val(),
            address:$addresss.val(),
            ccNumber:$ccnumberr.val(),
            ccName:$ccnamee.val(),
            ccExperationdate:$ccexperationdatee.val(),
            ccSecuritycode:$ccsecuritycodee.val()
        };  

        $.ajax({
            type: 'POST',
            url: 'http://40.71.215.32:9000/order/pizza',
            data: new_order,
            success: function(newSpot){
                window.location.replace("/view_orders");
            },
            error: function() {
                alert('error saving order');
            }
        });

    });

});
