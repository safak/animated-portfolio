const addShowMenuClass = (navMenu) => {
    if (navMenu) {
      navMenu.classList.add('show-menu');
    }
  };
  
  const removeShowMenuClass = (navMenu) => {
    if (navMenu) {
      navMenu.classList.remove('show-menu');
    }
  };
  
  export { addShowMenuClass, removeShowMenuClass };