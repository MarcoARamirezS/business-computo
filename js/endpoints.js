const search = async (business) => {
	/*
  	const url = `https://local-business-data.p.rapidapi.com/search?query=${business}&limit=50&language=en`;
	const options = {
	method: 'GET',
	headers: {
			'X-RapidAPI-Key': 'd599a4c174msh32f4ea959f89407p1746c1jsn5bda765a684d',
			'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
		}
	};
	*/
	try {
		const url = '../api/business.json'
		const response = await fetch(url);
		const result = await response.json();
		return result
	} catch (error) {
		console.error(error);
	}
}