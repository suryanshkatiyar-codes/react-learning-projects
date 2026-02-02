import Card from './components/Card'
const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 55,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    company: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg",
    company: "Amazon",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Chennai, India"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    company: "Apple",
    datePosted: "3 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 65,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    company: "Netflix",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 80,
    location: "Remote, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 50,
    location: "Noida, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/027/127/501/small_2x/uber-logo-uber-icon-transparent-free-png.png",
    company: "Uber",
    datePosted: "2 months ago",
    post: "Frontend Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: 75,
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rh1RsTM_T3Ejj8dnJp0Y0LxMPYDDtLoYwg&s",
    company: "Airbnb",
    datePosted: "6 days ago",
    post: "UI Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 60,
    location: "Remote, India"
  },
  {
    brandLogo: "https://img.icons8.com/win10/1200/tesla-logo.jpg",
    company: "Tesla",
    datePosted: "10 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 85,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/openai.png",
    company: "OpenAI",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 90,
    location: "Remote, India"
  },
    {
    brandLogo: "https://as2.ftcdn.net/jpg/02/50/30/59/1000_F_250305943_sDC6la1N1fDl3bLgfLxOkQwItIodsdMb.jpg",
    company: "Github",
    datePosted: "1 weeks ago",
    post: "UI Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 85,
    location: "Bangalore, India"
  },
    {
    brandLogo: "https://img.freepik.com/premium-vector/round-linkedin-logo-isolated-white-background_469489-985.jpg?semt=ais_hybrid&w=740&q=80",
    company: "Linked in",
    datePosted: "12 weeks ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Intermediate Level",
    pay: 85,
    location: "Remote, India"
  }
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
        <Card company={elem.company} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandLogo={elem.brandLogo} datePosted={elem.datePosted} location={elem.location}/>
        </div>
      })}
    </div>
  )
}

export default App
