const ActivityList = ({ activities, handleDelete }) => {
  return (
    <div className='activity-list'>
      {activities.map((activity) => (
        <div key={activity.id}>
          <h2>{activity.title}</h2>
          <button onClick={() => handleDelete(activity.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default ActivityList;
