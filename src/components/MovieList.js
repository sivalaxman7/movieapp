import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='images'>
					<img className='image' src={movie.Poster} alt='movie'/>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
