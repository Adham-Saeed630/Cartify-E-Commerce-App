import heroImage from '../../assets/furniture-background-1p8lqahjzvgac2vw.jpg';

export default function HeroSection(){
    return (
        <div className="w-full h-96 bg-amber-200 flex items-center justify-center">
            <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
        </div>
    );
}