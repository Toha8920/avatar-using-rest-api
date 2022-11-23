import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ShowImg from './components/ShowImg'
import Loading from './components/Loading'
import EndMessage from './components/EngMessage'
import './App.css';


function App() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);
  console.log(items)
  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20 `);
      const data = await res.json();
      setItems(data);
    }
    getComments();
  }, [])

  console.log(items)

  const fetchComments = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20 `);
    const data = await res.json();
    return data
  }

  const fetchData = async () => {
    const commentsFormServer = await fetchComments();
    setItems([...items, ...commentsFormServer]);

    if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
      setHasMore(false)
    }

    setPage(page + 1);
  }

  return (
    <InfiniteScroll
      dataLength={items.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={<Loading></Loading>}
      endMessage={
        <EndMessage></EndMessage>
      }
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          items.map(item => <ShowImg
            key={item.id}
            item={item}
          ></ShowImg>)
        }
      </div>
    </InfiniteScroll>
  );
}

export default App;
