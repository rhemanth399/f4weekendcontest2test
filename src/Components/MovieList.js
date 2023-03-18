import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <center>
    <table >
      <thead>
        <tr>
          <th className='border shadow rounded p-3 m-2'>Title</th>
          <th className='border shadow rounded p-3 m-2'>Genre</th>
          <th className='border shadow rounded p-3 m-2'>Year</th>
        </tr>
      </thead>
      <tbody className='border shadow rounded p-2'>
        {movies.map(movie => (
          <tr key={movie.title}>
            <td className='border shadow rounded p-2'>{movie.title}</td>
            <td className='border shadow rounded p-2'>{movie.genre}</td>
            <td className='border shadow rounded p-2'>{movie.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </center>
  );
};

export default MovieList;
