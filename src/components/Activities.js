export default function Activities({ activities, onAddActivity }) {
  return (
    <ul>
      {activities.map((activities) => {
        return (
          <li key={activities.id}>
            <span>{activities.act}</span>
          </li>
        );
      })}
    </ul>
  );
}
