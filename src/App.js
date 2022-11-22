import './App.css';
import { useEffect, useState } from 'react';
import ShowImg from './components/ShowImg';
import Loading from './components/Loading';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then((response) => response.json())
      .then((json) => {
        setUsers(json)
        setLoading(false);
      });
  }, [])
  console.log(users)
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div className='grid grid-cols-5'>

      {
        users.map(user => <ShowImg user={user} key={user.id}></ShowImg>)
      }
    </div>
  );
}

export default App;
