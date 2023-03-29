import got from "got";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const readGeneratedName = async (): Promise<string> => {
	const vgmUrl= 'https://www.classnamer.org/';

	try {
		const response = await got(vgmUrl)
		const dom = new JSDOM(response.body);
		const nameValue = dom?.window?.document?.getElementById('classname').innerHTML;

		console.log('name value: ', nameValue);
		return nameValue;
	} catch(err) {
		console.error('error while reading a generated name', err);
		return "";
	}
}

const splitGeneratedName = (generatedName: string): string[] => {
	const separator = '<wbr>';
	const words = generatedName.split(separator);
	return words;
}

export const classnamerWordReader = async (): Promise<string[]> => {
	console.log('using classnamer word reader');
	const generatedName = await readGeneratedName();
	const words = splitGeneratedName(generatedName);
	console.log('words: ', words);
	return words;
}
