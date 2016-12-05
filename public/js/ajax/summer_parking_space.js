$(function (){

    var $spotz = $('#spotz');

    $.ajax({
        type: 'GET',
        url: 'http://52.37.179.213:9000/api/spots',
        success: function(spotz) {
            $.each(spotz, function(i, spot) {
                $spotz.append( '<div class="row parking-listings">' +
                                    '<div class="col-lg-4 col-xs-12 listing-title">' +
                                        '<h4>' + spot.title + '</h4>' + 
                                    '</div>'+
                                    '<div class="col-lg-5 col-xs-8 info-block">' +
                                        '<div class="col-lg-4 col-xs-12 listing-info">' 
                                            + '<h5>' + spot.type + '</h5>' +
                                        '</div>' +
                                        '<div class="col-lg-5 col-xs-12 listing-info">' 
                                            + '<h5>' + spot.adress + '</h5>' +
                                        '</div>' +
                                        '<div class="col-lg-2 col-xs-12 listing-info">' 
                                            + '<h5>' + "$"+ spot.rate + '</h5>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="col-lg-2 col-xs-4">' +
                                        '<div class="col-lg-6 col-xs-12 ">' +
                                            '<a href="http://52.37.179.213:9000/detail/' + spot._id + '" class="btn">Details</a>' +
                                        '</div>' +
                                        '<div class="col-lg-6 col-xs-12">' +
                                            '<a href="http://52.37.179.213:9000/payment/' + spot._id + '" class="btn">Book</a>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' );
            });
        },
        error: function() {
            alert('error loading spots');
        }
    });

});


/* API call options 
spot.firstName
spot.lastName
spot.email
spot.phoneNumber
spot.title
spot.type
spot.adress
spot.description
spot.spotAvailable
*/ 