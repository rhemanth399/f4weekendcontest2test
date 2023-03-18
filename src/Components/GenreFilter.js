import React from 'react';

const GenreFilter = ({ genres, onGenreSelect }) => {
  return (
    <div className="border shadow rounded p-5 m-4">
      <h2>Filter by Genre</h2>
      {genres.map(genre => (
        <button className='btn btn-outline-primary mx-3' key={genre} onClick={() => onGenreSelect(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
