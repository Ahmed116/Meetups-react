import {useContext} from 'react'
import FavoritsContext from '../store/favorits-context';
import MeetupList from '../components/meetups/MeetupList';

function Favorites() {
  const favoriteCtx = useContext(FavoritsContext);

  let content 

  if (favoriteCtx.totalFavorits === 0) {
    content = <p>No Meetups Found!</p>
  }else{
    content = <MeetupList meetups={favoriteCtx.favorits} />

  }

    return (
      <section>
        <h1>My Favorites</h1>
        {content}
      </section>
    );
  }
  
  export default Favorites;