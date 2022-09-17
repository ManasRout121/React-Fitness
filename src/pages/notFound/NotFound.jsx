import {Link} from 'react-router-dom';
import "./notFound.css"

const NotFound = () => {
  return (
    <section>
      <container className="container notfound__container">
        <h2>Page Not Found</h2>
        <Link to="/" className='btn'>Go Back Home</Link>
      </container>
    </section>
  )
}

export default NotFound