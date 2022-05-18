//IIFE--Immediately Invoked Function Expression
//AKA - Anonymous Self-executing function

(function()
{
    function Start()
    {
        console.log("App started!..");

        for (var index = 0; index < 10; index++) {
            
            console.log(index);
            
        }

    }
    window.addEventListener("load", Start);

})();