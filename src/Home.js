import { useState  } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Gate', body: 'lorem ipsum...', author: 'kurumi', id: 1 },
    { title: 'Re:zero', body: 'lorem ipsum...', author: 'subaru', id: 2 },
    { title: 'Date a live', body: 'lorem ipsum...', author: 'kurumi', id: 3 }
  ]);
  
    return ( 
        <div className="home">
          {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <h2>{ blog.title }</h2>
              <p>Wrutten by { blog.author }</p>
            </div>
          ))}
         </div>
     );
}
 
export default Home;