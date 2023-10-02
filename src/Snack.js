import { useParams, Link } from 'react-router-dom';

function Snack() {
  const { name } = useParams();

  return (
    <>
    <h1>Enjoy your {name}.</h1>

    <Link to="/">Go Back</Link>
    </>
  )
}

export default Snack;