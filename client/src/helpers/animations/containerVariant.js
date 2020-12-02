export const containerVariant = {
  hidden: { 
    opacity: 0, 
    x: '100vw',
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: 'spring',
      // stiffness: 80,
      duration: 1.5,
      // mass: 0.4,
      // damping: 8,     
      when: "beforeChildren",
    }
  },
  exit: {
    // opacity: 0, //mine
    x: "-100vw",
    transition: { ease: 'easeInOut' }
  }
};