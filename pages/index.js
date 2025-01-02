import MeetupList from "../components/meetups/MeetupList";
const meetups=[
    {
        id:'m1',
        title:"A first meetup",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTB_svro2sfO59zsc-W6NHF7CMc62ChJej0Q&s",
        address:"Some address 10, 12345 Some City",
        description:"This is first meetup!"
    },
    {
        id:'m2',
        title:"A second meetup",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTB_svro2sfO59zsc-W6NHF7CMc62ChJej0Q&s",
        address:"Some address 11, 12345 Some City",
        description:"This is second meetup!"
    }
]
function HomePage(){
    return(
        <MeetupList meetups={meetups}/>
    )
}
export default HomePage;