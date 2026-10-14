import { ArrowRight } from 'lucide-react';

function Card(props) {
    return (
        <div className="my-5 mx-3 w-60 flex flex-col justify-between bg-amber-50 rounded-4xl"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), url(${props.image})`
            }}>
            <div className="m-5 text-lg h-8 w-8 bg-white rounded-full p-2">{props.number}</div>
            <div className="text-amber-50 mt-10 ml-4 mr-10 text-xl">{props.text}</div>
            <div className='text-amber-50 h-4 w-fit rounded-full flex gap-3 mb-10 ml-8 bg-blue-600 items-center'>
                <div className='py-2 px-4 text-xl bg-blue-600 rounded-full'>Satisfied</div>
                <div className='p-2 bg-blue-600 rounded-full'><ArrowRight size={24} /></div>
            </div>
        </div>
    )
}
export default Card;