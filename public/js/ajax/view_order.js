(function (){

    var $spotz = $('#spotz');

    $.ajax({
        type: 'GET',
        url: 'http://40.71.215.32:9000/order/pizza',
        success: function(spotz) {
            $.each(spotz, function(i, spot) {
                $spotz.append( '<div class="row parking-listings">' +
                                    '<div class="col-lg-2 col-xs-12 listing-title">' +
                                        '<h4>' + spot.firstName + " " + spot.lastName + '</h4>' + 
                                    '</div>'+
                                    '<div class="col-lg-2 col-xs-12 listing-title">' +
                                        '<h4>' + spot.type + '</h4>' + 
                                    '</div>'+
                                    '<div class="col-lg-2 col-xs-12 listing-title">' +
                                        '<h4>' + spot.address + '</h4>' + 
                                    '</div>'+
                                    '<div class="col-lg-2 col-xs-12 listing-title">' +
                                        '<h4>' + spot.phoneNumber + '</h4>' + 
                                    '</div>'+
                                    '<div class="col-lg-2 col-xs-12 listing-title">' +
                                        '<h4> </h4>' + 
                                    '</div>'+
                                '</div>' );
            });
        },
        error: function() {
            alert('error loading spots');
        }
    });
});
