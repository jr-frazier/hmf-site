'use client';

import confetti from 'canvas-confetti';
import Image from 'next/image';

export default function ConfettiButton() {
    const handleClick = () => {
        const duration = 2 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // fire confetti from random places on screen
            confetti({
                ...defaults,
                particleCount,
                origin: { x: Math.random(), y: Math.random() - 0.2 }
            });
        }, 250);
    };

    return (
        <button
            onClick={handleClick}
            className="flex justify-center items-center btn btn-primary btn-outline btn-lg text-xl   "
        >
            <Image
                src="/cb-small.png"
                width={30}
                height={20}
                alt="Picture of the author"
            />
            Harper Frazier
        </button>
    );
}
