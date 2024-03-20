<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        var google;

        function init() {
            var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);

            var mapOptions = {
                zoom: 7,
                center: myLatlng,
                scrollwheel: false,
                styles: [
                    // Map styles here
                ]
            };

            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);

            var addresses = ['Brooklyn'];

            for (var x = 0; x < addresses.length; x++) {
                (function(index) {
                    $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[index]+'&sensor=false', null, function (data) {
                        var p = data.results[0].geometry.location;
                        var latlng = new google.maps.LatLng(p.lat, p.lng);
                        new google.maps.Marker({
                            position: latlng,
                            map: map,
                            icon: 'images/loc.png'
                        });
                    });
                })(x);
            }
        }
        google.maps.event.addDomListener(window, 'load', init);
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=init" async defer></script>