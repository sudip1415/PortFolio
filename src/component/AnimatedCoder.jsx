import Lottie from 'lottie-react';
import codingAnimation from '../assets/coding.json'; // Put your downloaded Lottie JSON here

export default function AnimatedCoder({ className = 'w-64 h-64' }) {
    return <Lottie animationData={codingAnimation} loop={true} className={className} />;
}
