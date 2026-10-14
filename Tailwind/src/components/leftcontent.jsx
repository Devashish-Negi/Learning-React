import {MoveUpRight} from 'lucide-react';

function LeftContent() {
    return (
        <div className="mt-10 h-full w-3/10 bg-white">
            <h2 className='mx-10 my-5 font-bold text-4xl'>
            Prospective customer segmentation
            </h2>
            <p className="mx-10 my-5 text-xl">
            Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups.
            </p>
            <div className='mt-20 ml-6'><MoveUpRight size={64} /></div>
        </div >
    )
}
export default LeftContent;