function greeter()
{
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    var doc = document.getElementById('greeter');

    if (hourNow > 0 && hourNow < 12)
    {
        greeting = 'Good Morning!';
    }

    else if (hourNow > 12 && hourNow < 18)
    {
        greeting = 'Good Afternoon!';
    }

    else if (hourNow > 18 && hourNow < 23)
    {
        greeting = 'Good Evening!';
    }

    else
    {
        greeting = 'Welcome!';
    }

    doc.textContent = greeting;
}

greeter();