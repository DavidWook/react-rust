import React ,{useState, useEffect} from 'react';
import {Link} from "react-router-dom";

function Home() {
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async() => {
    const json = await ( await fetch(
  "http://127.0.0.1:8000/")).json();
  console.log(json);
  setData(json);
  setLoading(false);
};


  return (
    <div>
      <button onClick={getData}>UserInfo</button>
      
      <form action='http://localhost:8000/login' method='POST'>
      아이디 : <input name='userid' type='text'/><br/>
      비밀번호 : <input name='pwd' type='password'/><br/>
      <input onclick="window.location.href = 'https://website.com/my-account';" type='submit' value='make'/>
      </form>
        {loading? null : 
        <div>
          <h1>Information</h1>
          <p>이름 : <Link to={`/info/${data.name}`}>{data.name}</Link></p>
          <p>전화번호 : 010{data.phone}</p>
          <p> 나이 : {data.age}</p>
        </div>
        }
    </div>
  );
}

export default Home;