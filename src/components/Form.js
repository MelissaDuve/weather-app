
export default function Form () {
    return (
        <>
        <h1>Add new Activity:</h1>
         <form>
            <label forHTML="name">Name</label>
            <input name="name" id="name" type="text" />
            <br />
            <label forHTML="check">Good-weather activity</label>
            <input name="check" id="check" type="checkbox" />
            <br />
            <button type="submit" >Submit</button>



         </form>
        </>

    )
}