import { useLocation } from 'react-router-dom';
import Parser from 'html-react-parser';
import Nav from '../navbar/nav';
import './Details.css';

const Details = () => {
  const location = useLocation();
  const { state } = location;

  if (state === null) {
    return (
      <div>Ups... something was wrong</div>
    );
  }

  return (
    <section className="MainContainer-Details">
      <Nav name="Details Page" arrow="&#60;" micro="&#127897;" nut="&#9881;" />

      <article className="Containerinfo-Details">
        <section className="DetailsShow">

          <div className="Details-Icon">{Parser(state.state.htmlCode[0])}</div>

          <div className="DetailsRightContainer">
            <div className="Details-Name">
              {state.state.name.toUpperCase()}
            </div>

            <div className="Details-SubTitleGroup">
              {state.state.group.toUpperCase()}
            </div>
          </div>

        </section>

        <div className="SignalListOfEmojis">{state.state.category.toUpperCase()}</div>

        <ul className="Ul-Details-Emojis">

          <li className="Li-Details-Emojis">
            <span className="Ul-property">{state.state.name.toUpperCase()}</span>
            <span className="Ul-placeholder">Name</span>
          </li>

          <li className="Li-Details-Emojis">
            <span className="Ul-property">{state.state.category.toUpperCase()}</span>
            <span className="Ul-placeholder">Category</span>
          </li>

          <li className="Li-Details-Emojis">
            <span className="Ul-property">{state.state.group.toUpperCase()}</span>
            <span className="Ul-placeholder">Group</span>
          </li>

          <li className="Li-Details-Emojis">
            <span className="Ul-property">{state.state.htmlCode[0]}</span>
            <span className="Ul-placeholder">HTML Code</span>
          </li>

          <li className="Li-Details-Emojis">
            <span className="Ul-property">{state.state.unicode}</span>
            <span className="Ul-placeholder">UniCode</span>
          </li>

        </ul>
      </article>

    </section>
  );
};

export default Details;
