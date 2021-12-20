import './sass/App.scss';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import ActivityList from './components/ActivityList';
import NewActivityForm from './components/NewActivityForm';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [activities, setActivities] = useState([]);

  const handleDeleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  const updateActivities = (activity) => {
    activity.id = activities.length + 1;
    setActivities([...activities, activity]);

    handleModal();
  };

  return (
    <div className='app'>
      <Title
        title='Project Activities'
        subtitle='Featured activities and happenings'
        borderThickness={'16px'}
      />
      <button onClick={handleModal}>Add New Event</button>

      <>
        <ActivityList
          activities={activities}
          handleDelete={handleDeleteActivity}
        />
      </>

      {showModal && (
        <Modal handleModalClick={handleModal}>
          <NewActivityForm updateActivities={updateActivities} />
        </Modal>
      )}
    </div>
  );
}

export default App;
