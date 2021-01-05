import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../screens/Login';

it('renders the login screen', () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});
