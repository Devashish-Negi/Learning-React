import './card.css';
import { Bookmark } from 'lucide-react';

function Card(props) {
    return (
        <div className='job-card'>
            <div className="top">
                <img src={props.url} alt="amazon" />
                <button>Save <Bookmark size={16} /></button>
            </div>
            <div className='middle'>
                <h3>{props.company}</h3> <span>{props.posted}</span>
                <h2>{props.position}</h2>
                {props.jobType.map((type, index) => (
                    <div className="job-type" key={index}>
                        {type}
                    </div>
                ))}
            </div>
            <hr />
            <div className='bottom'>
                <div>
                    <h2>{props.salary}</h2>
                    <p>{props.location}</p>
                </div>
                <button>
                    Apply Now
                </button>
            </div>
        </div>
    );
}

export default Card;
