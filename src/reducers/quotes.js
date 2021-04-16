import uuid from 'uuid';
export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      const newQuote = { ...action.quote };
      if (!newQuote.id) newQuote.id = uuid();
      newQuote.votes = newQuote.votes ? newQuote.votes : 0;
      // if (!newQuote.hasOwnProperty('votes')) newQuote.votes = 0;
      return [...state, newQuote];
    case 'REMOVE_QUOTE':
      const filteredQuotes = state.filter(
        (quote) => quote.id !== action.quoteId
      );
      return [...filteredQuotes];
    case 'UPVOTE_QUOTE':
      const addedVoteQuotes = state.map((quote) => {
        if (quote.id === action.quoteId) {
          return {
            ...quote,
            votes: quote.votes + 1,
          };
        } else {
          return quote;
        }
      });
      return addedVoteQuotes;
    case 'DOWNVOTE_QUOTE':
      const removedVoteQuotes = state.map((quote) => {
        if (quote.id === action.quoteId) {
          return {
            ...quote,
            votes: quote.votes - 1 >= 0 ? quote.votes - 1 : 0,
          };
        } else {
          return quote;
        }
      });
      return removedVoteQuotes;
    default:
      return state;
  }
};
