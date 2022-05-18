//IIFE--Immediately Invoked Function Expression
//AKA - Anonymous Self-executing function

(function()
{
    function Start()
    {
        console.log("App started!..");

    }
    window.addEventListener("load", Start);

})();