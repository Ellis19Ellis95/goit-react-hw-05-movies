import { Notify } from 'notiflix';
import { BiSearchAlt } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import css from './SearchBar.module.css';
import { getCurrentMovies } from 'services/movies-api';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SearchBar = () => {
	const [films, setFilms] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [value, setValue] = useState(searchParams.get('query') ?? '');
	const location = useLocation();
	const query = searchParams.get('query') ?? '';

	const onFormSubmit = e => {
		e.preventDefault();

		if (value === '') {
			Notify.failure(
				'You have to write something here for a successful search'
			);
		}
		setSearchParams({ query: value });
	};

	useEffect(() => {
		if (!query) {
			return;
		}
		getCurrentMovies(query)
			.then(info => {
				if (!info.length) {
					Notify.failure(`Sorry, we dont found ${query}`);
					console.log(query);
				}
				setFilms(info);
				console.log(info);
			})
			.catch(error => console.log(error));
	}, [query]);

	const handleInputChange = e => {
		setValue(e.target.value);
	};
	return (
		<>
			<form onSubmit={onFormSubmit} className={css.form}>
				<div className={css.input_wrap}>
					<input
						className={css.input}
						value={value}
						onChange={handleInputChange}
						type="text"
					/>
					<button className={css.form_btn} type="submit">
						<BiSearchAlt className={css.search_svg} />
					</button>
				</div>
			</form>
			<ul>
				{films.map(({ original_title, id }) => (
					<li key={id}>
						<Link to={`/movies/${id}`} state={{ from: location }}>
							{original_title}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default SearchBar;