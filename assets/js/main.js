document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const homeSection = document.getElementById('home');
    
    const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > homeBottom) {
        header.style.opacity = '1'; // Define a opacidade como 1 ao passar da seção home
        header.style.display = 'flex';
    } else {
        header.style.opacity = '0'; // Define a opacidade como 0 ao retornar ao topo ou enquanto está na seção home
        header.style.display = 'none';
    }
  });
  