import { useParams } from 'react-router-dom';

function Snack() {
  const { name } = useParams();

  return (
    <h1>Enjoy your {name}.</h1>
  )
}

export default Snack;