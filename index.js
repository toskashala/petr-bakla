const bio = document.querySelectorAll('.bio');
const info1 = document.querySelectorAll('.info');
const slide = document.querySelectorAll('.slider');
const news = document.querySelectorAll('.news-info');

window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;
  const threshold = window.innerHeight * 0.5;
  const threshold2 = window.innerHeight * 1.7;
  const threshold3 = window.innerHeight * 2.6;

  if (scrollValue > threshold) {
    bio.forEach(bio => bio.classList.add('show'));

  }
  if (scrollValue > threshold2) {
    info1.forEach(info1 => info1.classList.add('show'));
    slide.forEach(slide => slide.classList.add('show'))

  }
  if(scrollValue > threshold3){
    news.forEach(news => news.classList.add('show'));
  }


});





(function () {


    hamburger.onclick = function () { 
        this.classList.toggle('open');
        nav.classList.toggle('show');
        headline.classList.toggle('hide');
        listenbtn.classList.toggle('hide');
    }
    
    const items = document.querySelectorAll('#grid > div');
    
    for (const item of items.values()) {
        
        
        new Waypoint.Inview({
            element: item,
            enter(direction) {
                if (direction == 'down') {
                   item.classList.add('up'); 
                }
            },
            exited(direction) {
                if (direction == 'up') {
                   item.classList.remove('up'); 
                }
            }
        });
        
        
    }
    


})();

