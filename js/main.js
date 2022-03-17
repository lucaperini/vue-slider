const app = new Vue(
    {
        el : "#app",
        data: {
            items : slider = [
                {
                    image: 'https://picsum.photos/750/350?random=1',
                    title: 'Random #1',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
                {
                    image: 'https://picsum.photos/750/350?random=2',
                    title: 'Random #2',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
                {
                    image: 'https://picsum.photos/750/350?random=3',
                    title: 'Random #3',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            
                },
                {
                    image: 'https://picsum.photos/750/350?random=4',
                    title: 'Random #4',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            
                },
                {
                    image:'https://picsum.photos/750/350?random=5',
                    title:'Random #5',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            
                },
                {
                    image:'https://picsum.photos/750/350?random=6',
                    title:'Random #6',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
                
            ]
        }
    }
    
);






// for (let i = 0; i < slider.length; i++){
//     document.querySelector('div#my-carousel .my-carousel-images').innerHTML +=
//     `<div>
//     <img src="${slider[i].image}" class="picture" alt= "picture">
//     <div class="item-description">
//         <h2 class="fw-bold text-white fs-4">${slider[i].title}</h2>
//         <p class="fst-italic text-white px-2">${slider[i].description}<p>
//     </div>
//     </div>`
//     document.querySelector('.my-thumbnails').innerHTML +=
//     `<div class="thumbnail-box">
//     <img src="${slider[i].image}" class="thumbnail-item" alt="random picture">
//     </div>`
// }

// let activeElement = 0;
// let offElement = 0;
// let isNext = true;

// document.getElementsByClassName('picture')[activeElement].classList.add('active');
// document.getElementsByClassName('item-description')[activeElement].classList.add('active');
// document.getElementsByClassName('thumbnail-item')[activeElement].classList.add('active');

// const prev = document.querySelector('div.my-previous');

// prev.addEventListener('click', function() {
//     offElement = activeElement;
//     if( activeElement === 0){
//         activeElement = slider.length - 1;
        
//     } else {
//         activeElement--;
        
//     }
    
//     onOff('picture', 'item-description', 'thumbnail-item', activeElement, offElement);
// });

// const next = document.querySelector('div.my-next');

// next.addEventListener('click', function() {
    
//     offElement = activeElement;
//     if( activeElement === slider.length - 1){
//         activeElement = 0;
        
//     } else {
//         activeElement++;
        
//     };
//     onOff('picture', 'item-description', 'thumbnail-item', activeElement, offElement)
// })

// let autoPlay = setInterval(myFunction, 3000);

// function myFunction() {
//     if(isNext){
//         next.click();
//     }else{
//         prev.click();
//     }
// }  

// function onOff (carouselPath, descPath, thumbnailPath, activeElement, noneElement){
//     document.getElementsByClassName(carouselPath)[noneElement].classList.remove('active');
//     document.getElementsByClassName(descPath)[noneElement].classList.remove('active');
//     document.getElementsByClassName(thumbnailPath)[noneElement].classList.remove('active');
//     document.getElementsByClassName(carouselPath)[activeElement].classList.add('active');
//     document.getElementsByClassName(descPath)[activeElement].classList.add('active');
//     document.getElementsByClassName(thumbnailPath)[activeElement].classList.add('active');
// }

// document.querySelector('#my-after-carousel').innerHTML +=
//     `<button id="my-btn" class="btn btn-success text-black text-center">Reverse</button>
//     <button id="my-btn-stop" class="btn btn-danger text-black text-center">Stop</button>`

// document.querySelector('#my-btn').addEventListener('click', function() {
//     isNext = !isNext;
// }); 

// document.querySelector('#my-btn-stop').addEventListener('click', function(){
//     clearInterval(autoPlay);
// });
