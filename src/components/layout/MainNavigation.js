import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './MainNavigation.module.css'
import FavoritsContext from '../../store/favorits-context'

function MainNavigation() {
  const favoriteCtx = useContext(FavoritsContext)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New Meetups</Link>
          </li>
          <li>
            <Link to='/favorites'>
              Favorites
              <span className={styles.badge}>{favoriteCtx.totalFavorits}</span>
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
