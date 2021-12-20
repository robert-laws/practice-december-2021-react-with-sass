import { useState, useRef } from 'react';

function NewActivityForm({ updateActivities }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [food, setFood] = useState('');

  const type = useRef();

  const resetForm = () => {
    setTitle('');
    setDate('');
    setFood('');
    type.current.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type.current.value !== '') {
      const newActivity = {
        title,
        date,
        food,
      };
      updateActivities(newActivity);

      resetForm();
    }
  };

  return (
    <form className='new-activity-form' onSubmit={handleSubmit}>
      <label>
        <span>Select Activity Type</span>
        <select id='type' name='type' ref={type}>
          <option value=''>Make a Selection</option>
          <option value='work'>Work</option>
          <option value='personal'>Personal</option>
          <option value='social'>Social</option>
        </select>
      </label>
      <label>
        <span>Select Food</span>
        <select
          id='food'
          name='food'
          value={food}
          onChange={(e) => setFood(e.target.value)}
        >
          <option value=''>Make a Selection</option>
          <option value='salad'>Salad</option>
          <option value='fish'>Fish</option>
          <option value='pizza'>Pizza</option>
        </select>
      </label>
      <label>
        <span>Activity Title</span>
        <input
          type='text'
          name='title'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        <span>Activity Date</span>
        <input
          type='date'
          name='date'
          id='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <button>Submit</button>
      <p onClick={resetForm}>Reset Form</p>
    </form>
  );
}

export default NewActivityForm;
