let menuWrapper = document.querySelector('.navbar-nav');
      
menuWrapper.addEventListener('click', function(el){
    if(el.target.classList.contains('dropdown-tabs')){
        el.preventDefault();
        el.stopPropagation();
        el.target.closest('.dropdown-menu').classList.add('show');

        let allTabs = document.querySelectorAll('.dropdown-tabs');
        allTabs.forEach((item)=>{
            item.classList.remove('active')
        })

        el.target.closest('.dropdown-tabs').classList.add('active')

        let removeActive = document.querySelectorAll('.submenu-item')
        removeActive .forEach((item)=>{
            item.classList.remove('show');
        })
        
        let elem = el.target.nextElementSibling;
        elem.classList.add('show')
    }

    if(el.target.classList.contains('dropdown-tabs-sub')){
        el.preventDefault();
        el.stopPropagation();
        el.target.closest('.dropdown-menu').classList.add('show');

        let removeActive = document.querySelectorAll('.dropdown-submenu-menu')
        removeActive .forEach((item)=>{
            item.classList.remove('show');
        })
        
        let elem = el.target.nextElementSibling;
        elem.classList.add('show')
    }
})

let sideMenu = document.querySelector('.side-menu');

sideMenu.addEventListener('click', function(el){
    let menus = document.querySelectorAll('.side-menu ul li a');
    menus.forEach((item)=>{
        item.classList.remove('active')
    })
    if(el.target.tagName === 'A'){
        el.target.classList.add('active');
        let position = document.querySelector(`[data-id="${el.target.id}"]`)
        position.scrollIntoView();
        // let body = document.querySelector('body')
        // body.scrollTo(0, position.getBoundingClientRect().y);
    }
});

let sideContentBox = document.querySelectorAll('.main-content');

let createObserver = function(boxElement) {
    let observer;
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: [0.55, 0.8],
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
}

let handleIntersect = function(entries, observer) {
    entries.forEach((entry) => {
        let navItem = document.querySelector(`#${entry.target.dataset.id}`);
        console.log(entry, entry.target.dataset.id, observer)
      if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
        navItem.classList.add('active');
      }
      else navItem.classList.remove('active');
  
      prevRatio = entry.intersectionRatio;
    });
}

sideContentBox.forEach((content)=>{
    createObserver(content);
})
