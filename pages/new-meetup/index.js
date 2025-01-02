import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetUp(){
    function addMeetUpHandler(enteredMeetUpData){
        console.log(enteredMeetUpData);
    }
    return(
        <NewMeetupForm 
            onAddMeetup={addMeetUpHandler} />
    )
}
export default NewMeetUp;