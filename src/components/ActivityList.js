const ActivityList = ({ activities, handleDelete }) => {
  return (
    <div className='activities-list'>
      {activities.map((activity) => (
        <div className='card' key={activity.id}>
          <h2>{activity.title}</h2>
          <p>{activity.food}</p>
          <p>{activity.date}</p>
          <button onClick={() => handleDelete(activity.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default ActivityList;
