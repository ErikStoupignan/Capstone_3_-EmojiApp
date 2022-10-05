import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import { getEmojis } from '../../redux/reduxHome/ApiEmojis';
import './home.css';
import Nav from '../navbar/nav';

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

const GetInformation = () => {
  const dispatch = useDispatch();
  const emojisData = useSelector((store) => store.emojis);

  useEffect(() => {
    if (!emojisData.length) {
      dispatch(getEmojis());
    }
  });

  const handlefilter = (e) => {
    dispatch(getEmojis(e.target.value));
  };

  const handleRandomButton = () => {
    dispatch(getEmojis('/random'));
  };

  return (
    <section>
      <Nav name="Emojis App" />

      <select onChange={handlefilter} name="select" className="menu-filter">
        <option defaultValue="/all/" value="/all/">&#127988; All Emojis &#127988;</option>
        <option value="/all/category_smileys_and_people">&#128526; Smileys & People</option>
        <option value="/all/category_animals_and_nature">&#128024; Animals & Nature</option>
        <option value="/all/category_food_and_drink">&#127829; Food & Drink</option>
        <option value="/all/category_travel_and_places">&#128747; Travel & Places</option>
        <option value="/all/category_activities">&#127923; Activities</option>
        <option value="/all/category_objects">&#128218; Objects</option>
        <option value="/all/category_symbols">&#128696; Symbols</option>
      </select>

      <ul className="Ul-Emojis-Container">

        {emojisData.map((data) => (
          <li key={data.unicode} className="Li-OneItem-emoji">

            <Link to="/DetailsPage" className="Link-on-the-emojis" state={{ state: data }}>
              <EmojiList data={data} id={data.name} />
            </Link>

          </li>
        ))}

      </ul>

      <button type="button" onClick={handleRandomButton}>Click for a Random Emoji</button>

    </section>
  );
};

export default GetInformation;
