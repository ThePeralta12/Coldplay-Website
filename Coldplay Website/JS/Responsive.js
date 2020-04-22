


var Burger =
{
 
    init: function()
    {
    
       
        var link = document.getElementsByClassName("topnav");
		 
        $(link).bind("click", clickListener);
		
        function clickListener()
        {
            document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
        }// end clickListener
    }// end of init function
};
Burger.init();