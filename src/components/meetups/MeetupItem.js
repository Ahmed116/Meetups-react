import { useContext } from 'react'
import styles from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavoritsContext from '../../store/favorits-context'

function MeetupItem(props) {
  const favoriteCtx = useContext(FavoritsContext)

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id)

  function toggleFavoriteHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id)
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      })
    }
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
