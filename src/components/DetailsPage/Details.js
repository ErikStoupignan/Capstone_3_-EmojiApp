import { useLocation } from 'react-router-dom';
import Nav from '../navbar/nav';

const Details = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <section>
      <Nav name="Details Page" arrow="&#60; Home" />

      <h1>{state.state.name}</h1>
      <h2>{state.state.category}</h2>
      <h3>{state.state.group}</h3>
      <h4>{state.state.htmlCode[0]}</h4>
      <h5>{state.state.unicode}</h5>

    </section>
  );
};

export default Details;
