import { createContext, useState } from 'react'

const FavoritsContext = createContext({
  favorits: [],
  totalFavorits: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
})

export function FavoritsContextProvider(props) {
  const [userFavorits, setUserFavorits] = useState([])

  function addFavoritHandler(favoriteMeetup) {
    setUserFavorits((prevUserFavorits) => {
      return prevUserFavorits.concat(favoriteMeetup)
    })
  }

  function removeFavoritHandler(meetupId) {
    setUserFavorits((prevUserFavorits) => {
      return prevUserFavorits.filter((meetup) => meetup.id !== meetupId)
    })
  }

  function itemIsFavoritHandler(meetupId) {
    return userFavorits.some((meetup) => meetup.id === meetupId)
  }

  const context = {
    favorits: userFavorits,
    totalFavorits: userFavorits.length,
    addFavorite: addFavoritHandler,
    removeFavorite: removeFavoritHandler,
    itemIsFavorite: itemIsFavoritHandler,
  }

  return (
    <FavoritsContext.Provider value={context}>
      {props.children}
    </FavoritsContext.Provider>
  )
}

export default FavoritsContext