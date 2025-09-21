import React, { useEffect, useState } from "react";

const Api = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const myData = async () => {
    try {
        
      setLoading(true);

      const fetchData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const res = await fetchData.json();

      setData(res);

      console.log(res);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    const timer = setTimeout(()=>{
        myData();
    }, 3000)

    return ()=> clearInterval(timer)
  }, []);

  return (
    <>
      <div>
        <h2>User List</h2>
        {loading && <p>Loading....</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading &&
          !error &&
          data.map((x) => (
            <div key={x.id}>
              <p style={{color:'red'}}>Name:{x.name}</p>
              <p style={{color:'green'}}>Username:{x.username}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Api;
