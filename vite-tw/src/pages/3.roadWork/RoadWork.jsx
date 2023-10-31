import React, { useEffect, useState }from'react';

function RoadWork () {
  let[htmlFileString, setHtmlFileString] = useState();

  async function fetchHtml() {
    setHtmlFileString(await (await fetch(`TrafficMap.html`)).text());
  }
  useEffect(() => {
    fetchHtml();
  }, []);

  return(
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
    </div>
  );
}


export default RoadWork;

//https://www.here.com/docs/bundle/maps-api-for-javascript-developer-guide/page/topics/traffic.html
// how to get html page in jsx file https://stackoverflow.com/questions/50792942/how-to-import-html-file-into-react-component-and-use-it-as-a-component