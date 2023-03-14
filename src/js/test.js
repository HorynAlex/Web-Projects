const getResourse = async (url) => {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(`Mistake on address ${url}, status mistakes ${response}`);
	}

	return await response.json();
}

getResourse('https://jsonplaceholder.typicode.com/todos/2').then((data) => console.log(data))