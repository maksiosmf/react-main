import LottieReact from 'lottie-react';
import animationData from '../assets/animation.json';

export const Animation = () => {
    return (
        <div>
            <LottieReact
                animationData={animationData}
                loop
                autoPlay
            />
        </div>
    )
}