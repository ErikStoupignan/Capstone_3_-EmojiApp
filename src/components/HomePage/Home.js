import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import { getEmojis } from '../../redux/reduxHome/ApiEmojis';
import './home.css';
import Details from '../DetailsPage/Details';

const EmojiList = (props) => {
  const { data } = props;

  return (
    <tr id={data.name} onClick={() => Details(data)} className="One-Item">

      {/* Column fot all the information */}
      <td id={data.name} className="Info">
        <p>
          <span>Name: </span>
          {data.name}
        </p>

        <p>
          <span>Category: </span>
          {data.category}
        </p>

        <p>
          <span>Group: </span>
          {data.group}
        </p>
      </td>

      {/* Columns for the Codes */}
      <td id={data.name} className="Codes">
        <p>
          Unicode:
          {' '}
          {data.unicode}
        </p>
        <p>
          HTMLCode:
          {' '}
          {data.htmlCode}
        </p>
      </td>

      {/* Place for the emoji */}
      <td id={data.name} className="Emoji-icon">
        {Parser(data.htmlCode[0])}
      </td>

    </tr>
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

  return (
    <table>
      <thead>

        <tr className="heads-table">
          <th> Info </th>
          <th> Codes </th>
          <th> Emoji </th>
        </tr>

      </thead>

      <tbody className="table-body">
        {emojisData.map((data) => (
          <EmojiList key={data.htmlCode[0]} data={data} id={data.name} />
        ))}
      </tbody>

    </table>
  );
};

export default GetInformation;
