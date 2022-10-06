import Parser from 'html-react-parser';
import PropTypes from 'prop-types';

const Headershow = (props) => {
  const { data } = props;

  if (data.length !== 0) {
    return (
      <>
        <section className="HeaderShow">

          <div className="Header-Icon">{Parser(data[14].htmlCode[0])}</div>

          <div className="HeaderRightContainer">
            <div className="Header-Categ">
              {data[0].category}
            </div>
            <div className="NumberEmojis">
              {data.length}
              {' '}
              emojis
            </div>
          </div>

        </section>

        <div className="SignalListOfEmojis">EMOJIS LIST</div>
      </>
    );
  }

  return (
    <div>LOADING...</div>
  );
};

Headershow.propTypes = {
  data: PropTypes.array,
}.isRequired;

export default Headershow;
