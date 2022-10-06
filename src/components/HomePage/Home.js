import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEmojis } from '../../redux/reduxHome/ApiEmojis';
import './home.css';
import Nav from '../navbar/nav';
import Headershow from './Header';
import EmojiList from './EmojiList';

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

  return (
    <section className="Container-Home">
      <Nav name="Emoji App" />
      <div className="content-select">
        <select onChange={handlefilter} name="select" className="menu-filter">
          <option defaultValue="/all/" value="/all/">&#128681; All Emojis &#128681;</option>
          <option value="/all/category_smileys_and_people">&#128526; Smileys & People</option>
          <option value="/all/category_animals_and_nature">&#128024; Animals & Nature</option>
          <option value="/all/category_food_and_drink">&#127829; Food & Drink</option>
          <option value="/all/category_travel_and_places">&#128747; Travel & Places</option>
          <option value="/all/category_activities">&#127923; Activities</option>
          <option value="/all/category_objects">&#128218; Objects</option>
          <option value="/all/category_symbols">&#128696; Symbols</option>
        </select>
        <i>&#10549;</i>
      </div>
      <div className="mediaQuery">
        <Headershow data={emojisData} />
        <ul className="Ul-Emojis-Container">
          {emojisData.map((data) => (
            <li key={data.unicode} className="Li-OneItem-emoji">
              <Link to="/DetailsPage" className="Link-on-the-emojis" state={{ state: data }}>
                <EmojiList data={data} id={data.name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GetInformation;
