export default function Form({ onAddActivity }) {
  function handleAddActivity(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    onAddActivity(formElements.name.value);
    event.target.elements.name.focus();
    event.target.reset();
  }
  return (
    <>
      <h1>Add new Activity:</h1>
      <form onSubmit={handleAddActivity}>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" type="text" />
        <br />
        <label htmlFor="check">Good-weather activity</label>
        <input name="check" id="check" type="checkbox" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
