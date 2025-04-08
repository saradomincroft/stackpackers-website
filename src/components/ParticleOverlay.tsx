"use client";
import { useEffect, useState } from "react";

const ParticleOverlay = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const particleContainer = document.querySelector('.particles-overlay');
        const numParticles = 100;

        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        const createParticles = () => {
            for (let i = 0; i < numParticles; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');

                const size = Math.random() * 0.5 + 1.5;
                const positionX = Math.random() * window.innerWidth;
                const positionY = Math.random() * window.innerHeight;

                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${positionX}px`;
                particle.style.top = `${positionY}px`;

                const color = Math.random() > 0.5 ? 'rgba(205, 167, 91, 0.8)' : 'rgba(176, 190, 197, 0.8)';
                particle.style.backgroundColor = color;
                particle.style.opacity = '0';         

                particle.style.transition = 'opacity 1s ease-in-out, filter 1s ease-in-out'; 
                
                const duration = 15 + Math.random() * 10;
                particle.style.animation = `particleMove ${duration}s infinite linear`;
                
                particleContainer?.appendChild(particle);

                setTimeout(() => {
                    particle.style.transition = 'opacity 1s ease-in-out';
                    particle.style.opacity = '0.8';
                }, 100);
            }
        };

        const handleResize = () => {
            const particles = document.querySelectorAll('.particle');
            if (particles) {
                particles.forEach(particle => {
                    const positionX = Math.random() * window.innerWidth;
                    const positionY = Math.random() * window.innerHeight;

                    const particleElement = particle as HTMLDivElement;

                    particleElement.style.left = `${positionX}px`;
                    particleElement.style.top = `${positionY}px`;
                });
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        createParticles();

        return () => {
            const particles = document.querySelectorAll('.particle');
            particles.forEach(particle => particle.remove());

            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const particles = document.querySelectorAll('.particle');

        particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            const particleX = rect.left + rect.width / 2;
            const particleY = rect.top + rect.height / 2;

            const distance = Math.hypot(particleX - mousePosition.x, particleY - mousePosition.y);

            const glowDistance = 100; 
            const particleElement = particle as HTMLElement;

            if (distance < glowDistance) {
                const blurAmount = (glowDistance - distance) / 100;
                particleElement.style.filter = `blur(${blurAmount}px) brightness(1.5)`;
                particleElement.style.opacity = '1';
            } else {
                particleElement.style.filter = 'blur(0px) brightness(1)';
                particleElement.style.opacity = '0.8';
            }
        });
    }, [mousePosition]);

    return <div className="particles-overlay"></div>;
};

export default ParticleOverlay;
