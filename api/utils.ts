export const formattedWordCloud = (results: {[key: string]: number}) => {
	const formattedResults: {text: string, value: number}[]= [];
	Object.keys(results).forEach((key) => {
		formattedResults.push({text: key, value: results[key]})
	})

	return formattedResults;
}
