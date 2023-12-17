import { saveAs } from "file-saver";

const dataSaver = (data) => { 
    const blob = new Blob([JSON.stringify(data, null, 2)], { 
        type: "application/json",
    });
    saveAs(blob, 'data.json');
};

export default dataSaver;