export default function Activities({ activities, onAddActivity, onDeleteActivity}) {
  return (
    <ul>
      {activities.map((activity) => {
        return (
          <li key={activity.id}>
            <span>{activity.act}</span>
            <button onClick={()=> onDeleteActivity(activity.id)} >x</button>
          </li>
        );
      })}
    </ul>
  );
}

