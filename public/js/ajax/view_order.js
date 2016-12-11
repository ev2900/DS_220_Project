$(function (){

    var $spotz = $('#spotz');

    $.ajax({
        type: 'GET',
        url: 'http://35.161.233.165:9000/api_pending/spots_pending',
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
                                        '<h4>' + spot.adress + '</h4>' + 
                                    '</div>'+
                                    '<div class="col-lg-2 col-xs-12 listing-title">' +
                                        '<h4>' + spot.phoneNumber + '</h4>' + 
                                    '</div>'+
                                    '<div class="col-lg-2 col-xs-12 listing-title">' +
                                        '<h4>' + spot.title + '</h4>' + 
                                    '</div>'+
                                '</div>' );
            });
        },
        error: function() {
            alert('error loading spots');
        }
    });
});

$(function() {
    
    $('#submit-spot').on('submit', function(ev) {
        ev.preventDefault();

        $.ajax({
            type: 'DELETE',
            url: 'http://35.161.233.165:9000/api_pending/spots_pending/584cb1ffef48dc47b93f2b30',
            success: function() {
                alert('suc');
            },
            error: function() {
                alert('fail');
            }
        });
    });
});