import { useRef } from 'react'
import styles from './NewMeetupForm.module.css'
import Card from '../ui/Card'

function NewMeetupForm(props) {
    const titleInputRef = useRef()
    const descriptionInputRef = useRef()
    const addressInputRef = useRef()
    const imageInputRef = useRef()

    function submitHandler(event) {
        event.preventDefault()
        const enterdTitle = titleInputRef.current.value
        const enterdDescription = descriptionInputRef.current.value
        const enterdAddress = addressInputRef.current.value
        const enterdImage = imageInputRef.current.value

        const meetupData = {
            title: enterdTitle,
            description: enterdDescription,
            address: enterdAddress,
            image: enterdImage
        }
        props.onAddMeetup(meetupData)
    }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef}/>
        </div>
        <div className={styles.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef}/>
        </div>
        <div className={styles.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef}/>
        </div>
        <div className={styles.control}>
          <label htmlFor='Description'>Description</label>
          <textarea required id='description' rows='5' ref={descriptionInputRef}></textarea>
        </div>
        <div className={styles.actions}>
            <button>
                Create Meetup
            </button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
