import {useNavigate  } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetups() {
  const history = useNavigate ()

  function addMeetaupHandler(meetupData) {
    fetch(
      'https://react-started-5c782-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history('/')
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetaupHandler} />
    </section>
  )
}

export default NewMeetups
