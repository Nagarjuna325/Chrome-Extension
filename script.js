async function fetchData(){
    const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Chicago&minDate=2025-01-11&maxDate=2025-01-14&page=1';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '18844dd7f1msh0a15a64db718f3fp11d090jsn0526a902e38e',
		'x-rapidapi-host': 'concerts-artists-events-tracker.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    document.getElementById("Concerts").innerHTML = result.data.map(item => item.description);
} catch (error) {
	console.error(error);
}


}

fetchData();