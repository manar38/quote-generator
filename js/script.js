function addQuote() {

    var QutesArray = ["\"Be the change that you wish to see in the world.\"<p> -- Mahatma Gandhi</p>",
    "\"Be yourself; everyone else is already taken.\"<p>  -- Oscar Wilde</p>",
    "\"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.\"<p>  -- Bernard M. Baruch</p>",
    "\"You only live once, but if you do it right, once is enough.\"<p>  -- Mae West</p>",
    "\"Not all of us can do great things. But we can do small things with great love.\"<p> --Mother Teresa</p>",
    "\"One must always be careful of books, and what is inside them, for words have the power to change us.\"<p> --Cassandra Clare, Clockwork Angel </p>",
    "\"A day without sunshine is like, you know, night.\"<p> --Steve Martin</p>",
    "\"Never trust anyone who has not brought a book with them\"<p> --Lemony Snicket</p>"];
  
    var random = Math.floor(Math.random() * QutesArray.length);
  
    document.getElementById('qute').innerHTML=QutesArray[random];
    
  }