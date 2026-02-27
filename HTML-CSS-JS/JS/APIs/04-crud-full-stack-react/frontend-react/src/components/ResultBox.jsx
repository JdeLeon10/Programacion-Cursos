import React from 'react';

export default function ResultBox({ message, isError }) {
  if (!message) return null;
  return (
    <div className={`result-box ${isError ? 'result-error' : 'result-ok'}`}>
      {message}
    </div>
  );
}
