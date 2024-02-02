const search = async (business) => {
  const url = `https://local-business-data.p.rapidapi.com/search?query=${business}&limit=10&language=en`;
	const options = {
	method: 'GET',
	headers: {
			'X-RapidAPI-Key': '7660a54fbdmshed55202c4f5aecbp115c75jsnbe50b5035956',
			'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result.data
		// console.log('@@ result search => ', result);
	} catch (error) {
		console.error(error);
	}
}