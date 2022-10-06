import Reducer, { getEmojis } from '../../redux/reduxHome/ApiEmojis';

describe('testing for slice functions', () => {
  const payload = [
    {
      name: 'grinning face',
      category: 'smileys and people',
      group: 'face positive',
      htmlCode: [
        '&#128512;',
      ],
      unicode: [
        'U+1F600',
      ],
    },
  ];

  const pendingState = { type: getEmojis.pending };
  const fulfilledState = { type: getEmojis.fulfilled, payload };
  const initialState = {
    Emojis: [],
  };

  it('Test for thunk pending state', () => {
    expect(Reducer(initialState, pendingState)).toEqual({
      Emojis: [],
    });
  });
  it('Test for thunk fulfiled state', () => {
    expect(Reducer(initialState, { ...fulfilledState })).toHaveLength(1);
  });
});
