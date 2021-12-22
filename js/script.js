class Script
{

    constructor()
    {
        this.setScrollNav();
        this.changeNavbarActive();
        this.activateProfileButton();
        AOS.init();
    }

    setScrollNav()
    {
        const navbar = document.getElementById('my-navbar');

        window.addEventListener('scroll', ()=>
        {
            var scrollPosition = window.scrollY;

            if(scrollPosition >= 60)
            {
                navbar.classList.add('navbar-bg-dark')
            }else{
                navbar.classList.remove('navbar-bg-dark')
            }

        });
    }

    activateProfileButton()
    {
        (function() {
            $('.btn').click(function() {
              $(this).toggleClass('active');
              return $('.box').toggleClass('open');
            });
          
          }).call(this);
    }

    changeNavbarActive()
    {
    }



}


window.addEventListener('DOMContentLoaded', (event) => 
{
    new Script();
});
  