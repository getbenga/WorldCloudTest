import axios from "axios";

export const getWordCloudData = async <T>(url: string): Promise<T> => {
	const res = await axios.get(url);
	console.log(res.data?.result);
	return res.data?.result;
}
