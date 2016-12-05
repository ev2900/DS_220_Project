//API Calls with AJAX
    
$(function (){

    var $id = $('#yellow');
    //console.log($id);
    var idd = $id.val();
    //alert(idd);

    var get_url = 'http://www.parkingbee.co:9000/api/spots/' + idd; 
    
    //alert(get_url);

    $.getJSON(get_url, function(json) {
           
            //console.log(json);

            //var id = json[0]._id;
            //var firstName = json[0].firstName;
            //var lastName = json[0].lastName;
            //var email = json[0].email;
            //var phoneNumber = json[0].phoneNumber;
            //var title = json[0].title;
            //var type = json[0].type;
            //var adress = json[0].adress;
            //var description = json[0].description;
            //var start = json[0].start;
            //var end = json[0].end;
            //var rate = json[0].rate;
            //var additionalInfro = json[0].additionalInfro; 

            var id = json._id;
            var firstName = json.firstName;
            var lastName = json.lastName;
            var email = json.email;
            var phoneNumber = json.phoneNumber;
            var title = json.title;
            var type = json.type;
            var adress = json.adress;
            var description = json.description;
            var start = json.start;
            var end = json.end;
            var rate = json.rate;
            var additionalInfro = json.additionalInfro; 


            $('#spotz').html(
                '<h2> Parking Spot </h2>' +
                '<row>' +
                    "<div class='col-lg-6' align='left'>" +
                        '<br>' +
                        '<h5 style="color: #F7A448"> Title </h5>' +
                        '<h4>' + title + '</h4>' + '<br>' +
                        '<h5 style="color: #F7A448"> Type </h5>' +
                        '<h4>' + type + '</h4>' + '<br>' +
                        '<h5 style="color: #F7A448"> Adress </h5>' +
                        '<h4>' + adress + '</h4>' + '<br>' +
                        '<h5 style="color: #F7A448"> Description </h5>' +
                        '<h4>' + description + '</h4>' + '<br>' +
                        '<h5 style="color: #F7A448"> Dates </h5>' +
                        '<h4>' + start + ' - ' + end + '</h4>' + '<br>' +
                        '<h5 style="color: #F7A448"> Rate </h5>' +
                        '<h4>$' + rate + '</h4>' + '<br>' +
                        '<h4 style="color: #F7A448">' + '</h4>' + '<br>' +
                        '<a class="button navbar-btn nav-button wow login" data-wow-delay="0.8s" href="http://52.37.179.213:9000/payment/' + id + '"> Book Now </a>' +
                    '</div>' +
                    "<div class='col-lg-6' align='left'>" +
                        '<h5 style="color: #FFF"> Close </h5>' +
                        '<h5 style="color: #F7A448"> Close </h5>' +
                        '<img src="/img/default_empty.png">' +
                        '<br>' + '<br>' +
                        '<h5 style="color: #F7A448"> Far </h5>' +
                        '<img src="/img/default_empty.png">' +
                        '<br><br><br><br><br><br><br><br>' +
                    '</div>' +
                '</row>' 
            );       
        } 
    );
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