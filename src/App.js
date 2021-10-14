import React, { useState } from 'react'
import axios from 'axios'
import { APP_KEY, APP_ID } from './API'

import { v4 as uuidv4 } from 'uuid'
import styles from './styles/App.module.scss'
import GlobalSvg from './assets/icons/GlobalSvg'
import Baner from './components/Baner/Baner.jsx'
import CartItem from './components/CartItem/CartItem'

const App = () => {
	const [query, setQuery] = useState('')
	const [recipes, setRecipes] = useState([])
	const [loading, setLoading] = useState(false)

	const fetchData = async () => {
		const response = await axios.get(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
		)
		setRecipes(response.data.hits)
		console.log(response.data.hits)
	}

	const onChangeHandler = (e) => {
		setQuery(e.target.value)
	}

	const onSubmitForm = (e) => {
		e.preventDefault()
		fetchData()
		setQuery('')
		setLoading(true)
	}

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Поиск рецептов</h1>
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
			{!loading ? (<Baner />) : <div className={styles.block}>
				{recipes !== [] && recipes.map(recipe => <CartItem key={uuidv4()} recipe={recipe} />)}
			</div>}
		</div>
	)
}

export default App
