import { NavLink } from 'react-router'
import styles from './ButtonCategory.module.css'

type Props = {
	title: string
	path: string
}

export const ButtonCategory = ({ title, path }: Props) => {
	return (
		<NavLink className={styles.category} to={path}>
			{title}
		</NavLink>
	)
}
