import PropTypes from 'prop-types';

const Details = (props) => {
  const { data } = props;

  return (
    <>
      <h1>{data.name}</h1>
      <h2>{data.category}</h2>
      <h3>{data.group}</h3>
      <h4>{data.htmlCode[0]}</h4>
    </>
  );
};

Details.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
  }),
}.isRequired;

export default Details;
