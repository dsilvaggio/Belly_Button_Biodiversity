//Read in Json Data
const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then(receivedData => console.log(receivedData));

//Show only info for Vandenberg Air Force Base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));

// Retrieve full name of Vandenburg Air Force Base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// Access latitude for Vandenburg Air Force Base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

//Retrieve lattitude and longitude for each station
var latitudes = d3.json(url).then(spaceXResults => spaceXResults.map(value => value.location.latitude));
console.log(latitudes);

var longitudes = d3.json(url).then(spaceXResults => spaceXResults.map(value => value.location.longitude));
console.log(longitudes);