import axios from 'axios';

//(45.5203,3.18183,45.56911,3.31401)

export function newCallout(pos, service) {
	const newPos = "(" + pos[0] + "," + pos[1] + "," + pos[2] + "," + pos[3] + ")";
    axios.get("https://www.overpass-api.de/api/interpreter?data=[out:json];node['amenity'='police']['police:FR']" + newPos + ";out%20body;")
        .then(function(response) {
            console.log(response.data.elements);
        })
        .catch(function(error) {
            console.log(error);
        });
}