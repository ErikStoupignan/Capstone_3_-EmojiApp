/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getEmojis } from '../../redux/reduxHome/ApiEmojis';
import './home.css';

// Función con props, para mostrar en el escritorio la información final

const EmojiList = (props) => {
  const { data } = props;

  return (
    <tbody>
      <tr>

        <td>{data.name}</td>
        <td>{data.category}</td>
        <td>{data.group}</td>
        <td>{data.htmlCode}</td>
        <td>{data.unicode}</td>

      </tr>
    </tbody>
  );
};

// Proptypes for the EmojiList function
EmojiList.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    group: PropTypes.string,
    htmlCode: PropTypes.string,
    unicode: PropTypes.string,
  }).isRequired,
};

// Baja la información del API y la envía a la función de arriba
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
          <th> Name </th>
          <th> Category </th>
          <th> Group </th>
          <th> htmlCode </th>
          <th> uniCode </th>
        </tr>

      </thead>

      {emojisData.map((data) => (
        <EmojiList key={data.htmlCode} data={data} />
      ))}

    </table>
  );
};

export default GetInformation;
