import React, { useState } from 'react'
import axios from 'axios'
import { APP_KEY, APP_ID } from './API'
import CircularProgress from '@material-ui/core/CircularProgress'

import styles from './styles/App.module.scss'
import GlobalSvg from './assets/icons/GlobalSvg'
import CartItem from './components/CartItem/CartItem'

const App = () => {
	const [query, setQuery] = useState('')
	const [recipes, setRecipes] = useState([])
	const [isLoaded, setIsLoaded] = useState(false)

	const fetchData = async () => {
		const response = await axios.get(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
		)
		setRecipes(response.data.hits)
		console.log(response.data.hits)
		setIsLoaded(false)
	}

	const onChangeHandler = (e) => {
		setQuery(e.target.value)
	}

	const onSubmitForm = (e) => {
		e.preventDefault()
		fetchData()
		setQuery('')
		setIsLoaded(true)
	}

	return (
		<div className={styles.wrapper}>
			<h1>Поиск рецептов</h1>
			<form className={styles.search__form} onSubmit={onSubmitForm}>
				<input
					className={styles.search__input}
					type='text'
					placeholder='Поиск...'
					value={query}
					onChange={onChangeHandler}
					autoComplete='off'
				/>
				<button className={styles.search__button}>
					<GlobalSvg id='search' />
				</button>
			</form>
			{isLoaded ? (
				<div className={styles.loaded}>
					<CircularProgress size={100} color='primary' />
				</div>
			) : query ? (
				<h3>Вы вводите название рецепта....</h3>
			) : (
				<CartItem items={recipes} />
			)}
		</div>
	)
}

export default App
