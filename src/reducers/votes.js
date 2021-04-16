import uuid from 'uuid';
export default (state = [], action) => {
  switch (action.type) {
    case 'UPVOTE_QUOTE':
      return [...state, { quoteId: action.quoteId, id: uuid() }];

    default:
      return state;
  }
};
