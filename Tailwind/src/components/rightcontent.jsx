import Card from "./card";

const cards = [
    {
        number: "1",
        text: "Discover your true potential and turn your ideas into something extraordinary.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZG_DCL7qGqd9PmnmetyedJXh6twRQ5-QpoaZc01M3A&s=10"
    },
    {
        number: "2",
        text: "Explore new perspectives, embrace creativity, and make every moment count.",
        image: "https://img.magnific.com/free-photo/smiling-portrait-studio-woman_1303-2289.jpg"
    },
    {
        number: "3",
        text: "Transform your vision into reality and create something truly unforgettable.",
        image: "https://media.istockphoto.com/id/2234866697/photo/beautiful-young-woman-gently-touching-her-face-with-hand.jpg?s=612x612&w=0&k=20&c=4kftvPvRtKGPuAzw91F5ztZpYlPnz_FBt6ycoRo-hOo="
    }
];

function RightContent() {
    return (
        <div className="pr-20 h-full w-7/10 bg-white flex">
            {cards.map((card)=>(<Card key={card.number} {...card} />))}
        </div>
    )
}
export default RightContent;