class Script
{

    constructor()
    {
        this.setScrollNav();
        this.changeNavbarActive();
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

    changeNavbarActive()
    {
    }



}


window.addEventListener('DOMContentLoaded', (event) => 
{
    new Script();
});
  