import './sass/App.scss';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import ActivityList from './components/ActivityList';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [activities, setActivities] = useState([
    { title: 'Activity 1', id: 1 },
    { title: 'Activity 2', id: 2 },
    { title: 'Activity 3', id: 3 },
    { title: 'Activity 4', id: 4 },
  ]);

  const handleDeleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className='app'>
      <Title
        title='Project Activities'
        subtitle='Featured activities and happenings'
      />
      <button onClick={handleModal}>Show Modal</button>

      <>
        <ActivityList
          activities={activities}
          handleDelete={handleDeleteActivity}
        />
      </>

      {showModal && (
        <Modal handleModalClick={handleModal}>
          <h2>Use the Coupon</h2>
          <p>Learn more when you checkout.</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
