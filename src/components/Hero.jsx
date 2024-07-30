import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState('');
  const backgroundImages = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
  ];

  useEffect(() => {
    setCurrentImage(backgroundImages[backgroundImageIndex]);
  }, [backgroundImageIndex]);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run only once

  const handlePrev = () => {
    setBackgroundImageIndex((prevIndex) => (prevIndex - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const handleNext = () => {
    setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const backgroundImageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section
      ref={ref}
      className="relative bg-cover bg-center bg-no-repeat h-screen overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={backgroundImageVariants}
        style={{
          backgroundImage: `url(${currentImage})`,
          transition: 'opacity 1s ease-in-out',
        }}
      >
       
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl font-bold mb-6 leading-tight md:text-7xl text-blue-500 drop-shadow-lg"
        >
          Discover Your Next Adventure
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg mb-8 max-w-xl md:text-xl text-white"
        >
          Unleash the explorer within and embark on unforgettable journeys.
        </motion.p>

        <motion.div variants={itemVariants}>
          <button className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
            Explore Destinations
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
