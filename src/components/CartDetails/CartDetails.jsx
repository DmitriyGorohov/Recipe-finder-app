import React from 'react'
import {v4 as uuidv4} from 'uuid'
import styles from './CartDetails.module.scss'

const CartDetails = ({ingredients}) => {
	return ingredients.map((ingrediend) => {
		return (
			<ul key={uuidv4()} className={styles.list}>
				<li className={styles.list__text}>{ingrediend.text}</li>
				<li className={styles.list__weight}>Вес - {Math.round(ingrediend.weight)} г</li>
			</ul>
		)
	})
}

export default CartDetails
