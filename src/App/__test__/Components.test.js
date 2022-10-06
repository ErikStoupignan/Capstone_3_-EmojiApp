import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import GetInformation from '../../components/HomePage/Home';
import Details from '../../components/DetailsPage/Details';
import store from '../../redux/configureStore';

describe('Testing the functions for Home Page', () => {
  it('Get information function', () => {
    const download = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <GetInformation />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(download).toMatchSnapshot();
  });
});

describe('Testing the functions for Details Page', () => {
  it('Details function', () => {
    const { getByText } = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Details />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(getByText('Ups... something was wrong')).toBeInTheDocument();
  });
});
