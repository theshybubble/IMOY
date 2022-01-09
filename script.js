function replaceVerticalScrollByHorizontal(event)
 {
    if (event.deltaY !== 0)
     {
        window.scroll(window.scrollX + event.deltaY * 2, window.scrollY);
        event.preventDefault();
     }
}

const mediaQuery = window.matchMedia('(min-width: 770px)');

if (mediaQuery.matches) 
{
    window.addEventListener('wheel', replaceVerticalScrollByHorizontal);
}