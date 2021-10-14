import React, {useState} from 'react'
import CartDetails from '../CartDetails/CartDetails'
import styles from './CartItem.module.scss'

const CartItem = ({recipe}) => {
	const [show, setShow] = useState(false)
	const {label, image, url, ingredients} = recipe.recipe

	return (
		<div className={styles.container}>
			<h4>{label}</h4>
			<img src={image} alt={label} />
			<div className={styles.container__block}>
				<a href={url} target='_blank' rel='noopener noreferrer'>
					Ссылка на рецепт
				</a>
				<button onClick={() => setShow(!show)}>Ingredients</button>
				{show && <CartDetails ingredients={ingredients} />}
			</div>
		</div>
	)
}

export default CartItem
