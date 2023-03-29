import {classnamerWordReader} from "./wordReaderService";

export const getWordCloudData = async (numberOfSamples: number) => {
	const wordCounter: {[key: string]: number} = {};

	for (let i = 0; i < numberOfSamples; i++) {
		const words = await classnamerWordReader();
		words.forEach((word) => wordCounter[word] = wordCounter[word] ? wordCounter[word] + 1 : 1)
	}

	return wordCounter;
}
