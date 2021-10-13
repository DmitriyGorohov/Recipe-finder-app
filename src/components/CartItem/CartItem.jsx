import React from 'react'
import styles from './CartItem.module.scss'

const CartItem = ({items}) => {
	return (
		<React.Fragment>
			{items.length === 0 ? null : (
				<div className={styles.container}>
					<h1>CARTITEM</h1>
				</div>
			)}
		</React.Fragment>
	)
}

export default CartItem
