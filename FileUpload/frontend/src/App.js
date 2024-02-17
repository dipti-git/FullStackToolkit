import React, {useState} from 'react';
import './App.css';

function App() {
  const[file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const  handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData, 'formDtataa');

    try{

      const response = await fetch('/api/fileupload/upload', {
        method: 'POST',
        body: formData 
      });
  
      const responseData = await response.json();
      console.log(responseData.message);

    } catch(error) {
      console.error('Error uploading the file:', error);
    }
  }

  return (
    <div className="App">
      <h1>File Upload Example</h1>
      <input type="file" onChange={handleFileChange}/>
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default App;
