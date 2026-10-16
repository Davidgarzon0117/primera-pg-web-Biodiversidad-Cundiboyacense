let map = L.map('map').setView([4.639386, -74.082412], 7.5);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var redIcon = L.icon({
    iconUrl: 'https://img2.freepnges.com/20240210/lie/transparent-location-symbol-red-marker-pin-with-white-circle-1710882080381.webp',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

var blueIcon = L.icon({
    iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx8xkpCKF9NvjiqZNMPMu7oVTUlpULFfxucg&s', 
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});


L.marker([4.607477382349533, -74.30468932698487], { icon: redIcon }).addTo(map).bindPopup("Parque ecologico Chicaque").openPopup().on('dblclick', function() {
    window.location.href = 'Ubicaciones.html'; 
});

L.marker([4.874164528699131, -74.0922252862744], { icon: redIcon }).addTo(map).bindPopup("Bioparque la reserva").openPopup().on('dblclick', function() {
    window.location.href = 'Ubicaciones.html'; 
});

L.marker([4.5505474060283735, -73.73317771025852], { icon: redIcon }).addTo(map).bindPopup("Parque Nacional Natural Chingaza").openPopup().on('dblclick', function() {
    window.location.href = 'Ubicaciones.html'; 
});

L.marker([5.1370767620894515, -73.96842259474596], { icon: redIcon }).addTo(map).bindPopup("Embalse Del Neusa").openPopup().on('dblclick', function() {
    window.location.href = 'http://www.colparques.net/NEUSA#aceptar';
});

L.marker([5.7401692791080166, -73.00680955680359], { icon: blueIcon }).addTo(map).bindPopup("Bioparque Guátika").openPopup().on('dblclick', function() {
    window.location.href = 'Ubicaciones.html'; 
});

L.marker([5.7195080290608695, -73.51979031696679], { icon: blueIcon }).addTo(map).bindPopup("Cascadas La Periquera").openPopup().on('dblclick', function() {
    window.location.href = 'Ubicaciones.html' 
});

L.marker([5.623265803911521, -73.54180942199777], { icon: blueIcon }).addTo(map).bindPopup("Desierto de los Pozos Azules").openPopup().on('dblclick', function() {
    window.location.href = 'Ubicaciones.html'; 
});

L.marker([5.579572935962089, -72.94137194785999], { icon: blueIcon }).addTo(map).bindPopup("Reserva Natural Pueblito Antiguo").openPopup().on('dblclick', function() {
    window.location.href = 'https://situr.boyaca.gov.co/pst/corporacion-reserva-natural-pueblito-antiguo-y-o-ecolaguna/#:~:text=La%20Reserva%20Natural%20Pueblito%20Antiguo,y%20una%20mejor%20comprensión%20de'; 
});

