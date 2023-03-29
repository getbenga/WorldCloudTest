import {useState, useCallback, useEffect} from "react";
import {getWordCloudData} from "./utils/data-utils";
import ReactWordcloud from 'react-wordcloud';

function App() {
  const url = 'http://localhost:8000/api/word_cloud';
  const [wordCloud, setWordCloud] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getWordCloudData<[]>(url);
      setWordCloud(data);
    }
    void getData();
  }, []);

  return (
    <>
      <ReactWordcloud words={wordCloud}/>
    </>
  )
}

export default App;
