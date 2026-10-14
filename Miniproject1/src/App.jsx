import Card from './components/card';
import './App.css'

const jobs = [
    {
        id: 1,
        url: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
        company: "Amazon",
        posted: "5 days ago",
        position: "Senior UI/UX Designer",
        jobType: ["Full Time", "Part-Time"],
        salary: "$120/hr",
        location: "Mumbai, India"
    },
    {
        id: 2,
        url: "https://freepnglogo.com/images/all_img/google-g-logo-85b2.png",
        company: "Google",
        posted: "2 days ago",
        position: "Frontend Developer",
        jobType: ["Full Time", "Remote"],
        salary: "$150/hr",
        location: "Bangalore, India"
    },
    {
        id: 3,
        url: "https://i.pinimg.com/originals/cd/77/e0/cd77e04d9fe1a4ac66a26693d05e02c4.jpg",
        company: "Microsoft",
        posted: "1 day ago",
        position: "React Developer",
        jobType: ["Full Time", "Hybrid"],
        salary: "$100/hr",
        location: "Hyderabad, India"
    },
    {
        id: 4,
        url: "https://assets.turbologo.com/blog/en/2019/08/19085031/netflix-short-version-logo.png",
        company: "Netflix",
        posted: "3 days ago",
        position: "Product Designer",
        jobType: ["Contract", "Remote"],
        salary: "$130/hr",
        location: "Delhi, India"
    },
    {
        id: 5,
        company: "Adobe",
        url: 'https://tse1.mm.bing.net/th/id/OIP.ZztV5ULkLdX0NlWLA8j4YgHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        posted: "4 days ago",
        position: "UI/UX Designer",
        jobType: ["Full Time", "Hybrid"],
        salary: "$110/hr",
        location: "Pune, India"
    },
    {
        id: 6,
        url: "https://static.vecteezy.com/system/resources/previews/024/273/768/original/meta-logo-transparent-free-png.png",
        company: "Meta",
        posted: "6 days ago",
        position: "Software Engineer",
        jobType: ["Full Time", "Remote"],
        salary: "$160/hr",
        location: "Gurugram, India"
    }
];

function App() {
    return (<div className="job-container">
        {jobs.map((job) => (<Card key={job.id} {...job}/>
        ))} </div>
    );
}

export default App;
