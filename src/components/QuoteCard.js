import React from 'react';

const QuoteCard = (props) => {
  const { quote, removeQuote, upvoteQuote, downvoteQuote } = props;
  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            {quote.content}
            <footer>
              <cite title="Source Title">{quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => upvoteQuote(quote.id)}
            >
              Upvote
            </button>
            <button
              type="button"
              onClick={() => downvoteQuote(quote.id)}
              className="btn btn-secondary"
            >
              Downvote
            </button>
            <button
              type="button"
              onClick={() => removeQuote(quote.id)}
              className="btn btn-danger"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {quote.votes}</div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
