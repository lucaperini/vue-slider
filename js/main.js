
const app = new Vue(
    {
        el : "#app",
        

        data: {
            
            activeElement : 0,

            slides : [
                
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
        },
        methods: {
            
            prevImage(){
                if(this.activeElement === 0){
                    this.activeElement = this.slides.length -1;
                }else{
                    this.activeElement--;
                }
            },
            nextImage(){
                if(this.activeElement === this.slides.length -1){
                    this.activeElement = 0;
                }else{
                    this.activeElement++;
                }
            },
            //bonus 1 al click su una thumb, visualizzare in grande l'immagine corrispondente
            selectImage(imageIndex){
                this.activeElement = imageIndex;
            },
            //bonus 2 applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
            autoSlider(){
                this.isPlaying = setInterval (() => {
                    this.nextImage();
            } ,3000)
            },

            //bonus 3 quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce  
            stopSlider() {
                clearInterval(this.isPlaying);
                this.isPlaying = null;
            },
            
        },
    }
);
