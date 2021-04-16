import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {
  render() {
    console.log(this.props);
    const {
      quotes,
      removeQuote,
      upvoteQuote,
      downvoteQuote,
      votes,
    } = this.props;
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes.map((quote) => (
                <QuoteCard
                  key={quote.id}
                  quote={quote}
                  upvoteQuote={upvoteQuote}
                  downvoteQuote={downvoteQuote}
                  votes={votes}
                  removeQuote={(quoteId) => removeQuote(quoteId)}
                />
              ))}
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: (quoteId) => dispatch(removeQuote(quoteId)),
    upvoteQuote: (quoteId) => dispatch(upvoteQuote(quoteId)),
    downvoteQuote: (quoteId) => dispatch(downvoteQuote(quoteId)),
  };
};
export default connect((state) => state, mapDispatchToProps)(Quotes);
