import './App.css';
import { useState } from 'react';
import TodoList from './Components/todoList';

function App() {
  const [img, setImage] = useState(null);

  const url = "http://test.touchapp.in/api/imgurl";

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1yLl8ubmFuaWlpIiwidXNlcmlkIjo0NzA0LCJpYXQiOjE3MDQ3ODAyNDJ9.Bm2V6pFUKnAoSt2cPWw9Jh41a7BB00OdjgSeL79QiRw");

  const handleChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("image", img);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  console.log("image", img)
  return (
    <div className="App">
      <TodoList />
      <input type='file' onChange={handleChange} /><br />
      <button onClick={handleUpload}>upload</button>
    </div>
  );
}

export default App;
