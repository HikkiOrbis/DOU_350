const IsMobile ={
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMonile/i);
    },
    any: function(){
        return(
            IsMobile.Android() ||
            IsMobile.BlackBerry() ||
            IsMobile.IOS() ||
            IsMobile.Opera() ||
            IsMobile.Windows());
    }
};

if (IsMobile.any()) {
    document.body.classList.add('_mobile');

    let menuArrows = document.querySelectorAll('menu_arrow');
    if(menuArrows.length > 0){
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

}else{
    document.body.classList.add('_pc')
}
