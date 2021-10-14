import React from 'react'
import GlobalSvg from '../../assets/icons/GlobalSvg'
import foo1 from '../../assets/img/fot1.png'
import styles from './Baner.module.scss'

const Baner = () => {
	return (
		<div className={styles.baner}>
			<div className={styles.banner__block}>
				<h1 className={styles.baner__title}>
					Good F<img src={foo1} alt='' width={60} height={60}></img>
					<img src={foo1} alt='' width={60} height={60}></img>d Good M<GlobalSvg id='smile' />
					<GlobalSvg id='smile' />d
				</h1>
			</div>
		</div>
	)
}

export default Baner
