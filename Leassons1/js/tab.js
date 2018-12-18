function tabs(){
let tab = document.querySelectorAll('.glazing_block'),
    slider = document.querySelector('body'),
    tabActive = document.querySelectorAll('.tab_active'),
    content = document.querySelectorAll('.tab_content');

    let hideTabContent = (a)=> {
        for (let i = a; i < content.length; i++) {
            content[i].classList.remove('show');
            content[i].classList.add('hide');
            tabActive[i].classList.remove('active');
        }
    };
    
    hideTabContent(1);
    
    let showTabContent = (b)=> {
        if (content[b].classList.contains('hide')) {
            tabActive[b].classList.add('active');
            content[b].classList.remove('hide');
            content[b].classList.add('show');
        }
    };
    slider.addEventListener('click', (event) => {
        let target = event.target;

        if (target && target.classList.contains("glazing_block") || target.parentNode.classList.contains("glazing_block")) {
            [...tab].forEach(function (event, i) {
                if (target == event || target.parentNode == event) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            });
        }
        });
//2


        let tabs = document.querySelectorAll('.afterclick'),
            sliders = document.querySelector('.decoration_slider'),
            clickS = document.querySelectorAll('.no_click'),
            contents = document.querySelectorAll('.tab_contents');
        
            let hideTabContents = (a)=> {
                for (let i = a; i < contents.length; i++) {
                    contents[i].classList.remove('show');
                    contents[i].classList.add('hide');
                    clickS[i].classList.remove('after_click');
                }
            };
            
            hideTabContents(1);
            
            let showTabContents = (b)=> {
                if (contents[b].classList.contains('hide')) {
                    contents[b].classList.remove('hide');
                    contents[b].classList.add('show');
                    clickS[b].classList.add('after_click');
                }
            };
            
            sliders.addEventListener('click', (event) => {
                let target = event.target;
        
                if (target && target.classList.contains("afterclick") || target.parentNode.classList.contains("afterclick")) {
                    [...tabs].forEach(function (event, i) {
                        if (target == event || target.parentNode == event) {
                            hideTabContents(0);
                            showTabContents(i);
                        }
                    });
                }
                });
            }
module.exports = tabs;