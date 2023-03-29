import {getWordCloudData} from "./wordCloudService";
import {formattedWordCloud} from "./utils";

export const getWordCloud =  async (req, res) => {
	const numberOfSamples = req?.query?.numberOfSamples || 10;
	const results = await getWordCloudData(numberOfSamples);
	const formattedResults = formattedWordCloud(results);

	res.json({result: formattedResults});
};
