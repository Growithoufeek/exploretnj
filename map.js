// Initialize and add the map
function initMap() {
    // The location of Thanjavur
    const thanjavur = { lat: 10.7870, lng: 79.1378 };
    
    // Create the map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: thanjavur,
        mapId: 'YOUR_MAP_ID', // Optional: for styled maps
        gestureHandling: 'cooperative',
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
    });

    // Add marker
    const marker = new google.maps.Marker({
        position: thanjavur,
        map: map,
        title: "Thanjavur Heritage Center",
        animation: google.maps.Animation.DROP
    });

    // Add info window
    const infowindow = new google.maps.InfoWindow({
        content: `
            <div class="map-info-window">
                <h3>Thanjavur Heritage Center</h3>
                <p>Near Brihadeeswarar Temple</p>
                <p>Thanjavur, Tamil Nadu</p>
            </div>
        `
    });

    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
} 