import Parser from 'html-react-parser';
import PropTypes from 'prop-types';

const EmojiList = (props) => {
  const { data } = props;

  return (
    <>
      <div id={data.name} className="Emoji-icon-grid">
        <div className="order-grid Emoji-home">
          {Parser(data.htmlCode[0])}
        </div>
        <div className="order-grid EmojiName-home">{data.name}</div>
      </div>
    </>
  );
};

EmojiList.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    group: PropTypes.string,
    htmlCode: PropTypes.node,
    unicode: PropTypes.node,
  }).isRequired,
};

export default EmojiList;
