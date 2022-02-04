//navigacioni meni

var navNazivi = ["Home", "Services", "Contact", "About"];
var navLinkovi = ["index.html", "#services", "#contact", "https://nikolarubezic.github.io/mojportfolio/index.html"];

///ispis navigacionog menija
	
var meniDiv = document.getElementById('meni');
let html = '';
for(let i=0; i < navNazivi.length; i++){
    html+=`<li class="nav navbar-nav">
            <a href="${navLinkovi[i]}">${navNazivi[i]}</a>
          </li>`;
}
meniDiv.innerHTML = html;


// slider 


var slides =
    [
        "Delex - digital services of the future.",
        "We are fast.",
        "We are thorough.",
        "We offer feedback.",
        "We are ideal for you."
    ];

var slajderDiv = document.getElementById("slajder");

//ispis slidera

var slideIndex = 0;
showSlides(slideIndex);


var prosli = document.getElementById("prosli");

prosli.addEventListener("click", function () {
    slideIndex--;   
    if(slideIndex < 0)
        slideIndex = slides.length-1;
    showSlides(slideIndex);

}, false);

var sledeci = document.getElementById("sledeci");

sledeci.addEventListener("click", function () {
    slideIndex++;
    if(slideIndex >= slides.length)
        slideIndex = 0;
    showSlides(slideIndex);
}, false);


function showSlides(indeks){
    var slajd = slides[indeks];
    htmlSlide = '';
    
    htmlSlide +=
        `
        <div class="slide slidevrh col-sm-12">
             <p>${slajd}</p>
        
        </div>
        `
    
    
     slajderDiv.innerHTML = htmlSlide;
    }
    


//our services

var usluge =
    [
        {
            "ikona": "icon-design-graphic-tablet-streamline-tablet color-l-orange",
            "naslov": "Web design",
            "opis": "Modern websites for your business."
        },

        {
            "ikona": "icon-design-pencil-rule-streamline color-l-blue",
            "naslov": "Software development",
            "opis": "PC and mobile applications that fit your needs."
        },

        {
            "ikona": "icon-speech-streamline-talk-user color-l-yellow",
            "naslov": "IT consulting",
            "opis": "IT consulting about your existing software."
        },

        {
            "ikona": "icon-settings-streamline-2 color-l-purple",
            "naslov": "Software administration",
            "opis":  "Full time administration for your systems."
        },

        {
            "ikona": "icon-streamline-umbrella-weather color-l-pink",
            "naslov": "Network security",
            "opis": "Improvement of your networks' security."
        },

        {
            "ikona": "icon-caddie-shopping-streamline color-l-green",
            "naslov": "Statistical analsys",
            "opis": "Report of any data your business possesses."
        }
    ];

//ispis usluga

var uslugeDiv = document.getElementById('usluge');

let htmlUsluge = '';

var promenaRowa = 0
for (usluga of usluge)
{
 
 
    htmlUsluge +=  
        ` 
          <div class="col-12 col-sm-6 col-md-4">  
            <div class="text-center services-item">
              <div class="col-wrapper">
                <div class="icon-border">
                  <i class="${usluga.ikona}"></i>
                </div>
                <h5>${usluga.naslov}</h5>
                <p>${usluga.opis}</p>
              </div>
            </div>
          </div>
         
        `
        promenaRowa++;

     
        if (window.screen.width < 980  && promenaRowa == 2)
        { 
            
            htmlUsluge+=
            `   
            <div class="row">
            </div>
            `
            promenaRowa = 0;
            
        }
}

uslugeDiv.innerHTML = htmlUsluge;


/// zaposleni

var osoblje = [
    {
        "id": 1,
        "ime": "Anna Johnson",
        "zanimanje": "Software Engineer",
        "slika": {
            "src":"images/slika_anna.jpg",
            "alt": "Anna Johnson"
        }
    },

    {
        "id": 2,
        "ime": "Mark Peterson",
        "zanimanje": "DevOps",
        "slika": {
            "src": "images/slika_mark.jpg",
            "alt": "Mark Peterson"
        }
    },

    {
        "id": 3,
        "ime": "Mary Swanson",
        "zanimanje": "Statistician",
        "slika": {
            "src": "images/slika_mary.jpg",
            "alt": "Mary Swanson"
        }
    },
    
    {
        "id": 4,
        "ime": "John Soprano",
        "zanimanje": "Software Engineer",
        "slika": {
            "src": "images/slika_john.jpg",
            "alt": "John Soprano"
        }
    }

];



////////// ispis zaposlenih


var osobljeDiv = document.getElementById('osoblje');
let htmlOsoblje = '';
var osobljeIndeks = 1;
showOsoblje(osobljeIndeks);


var prosliOsoblje = document.getElementById("prosliOsoblje");

prosliOsoblje.addEventListener("click", function () {

    osobljeIndeks--;

    if(osobljeIndeks < 0)
        osobljeIndeks = osoblje.length;

    showOsoblje(osobljeIndeks);
   
}, false);

var sledeciOsoblje = document.getElementById("sledeciOsoblje");

sledeciOsoblje.addEventListener("click", function () {
    osobljeIndeks++;

    if(osobljeIndeks > osoblje.length)
        osobljeIndeks = 0;

    showOsoblje(osobljeIndeks);
}, false);

/////////

function showOsoblje(indeks){
var zaposleni = osoblje[indeks];
htmlOsoblje = '';

    htmlOsoblje +=
    `
    <div class="slide slide-osoblje col-sm-12">

        <img src="${zaposleni.slika.src}" alt="${zaposleni.alt}" />
        <h2>${zaposleni.ime}</h2>
        <h4>${zaposleni.zanimanje}</h4>
    </div>
    `


osobljeDiv.innerHTML = htmlOsoblje;
}


// forma i regex 

const regIme = /^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}$/;
const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/



function proveraRegEx()
{
    var tekstGreske = 'Form has not been filled properly;';
    var brojacGreske = 0;
    //provera za ime
  

    var formaIme = document.getElementById("formaIme").value;
    


    var proveraIme = regIme.test(formaIme);

    if(proveraIme === false)
    {
        document.getElementById("formaIme").style.borderColor = "red";
        tekstGreske += " Name"
        brojacGreske++;
    }
    else
    {
        document.getElementById("formaIme").style.borderColor = "";

    }

    //////

    //provera za email

    var formaEmail = document.getElementById("formaEmail").value;
    var proveraEmail = regEmail.test(formaEmail);    

    if(proveraEmail === false)
    {
        document.getElementById("formaEmail").style.borderColor = "red";

        if(brojacGreske == 0)
            tekstGreske += " Email"
        else
            tekstGreske += ", Email"
            
        brojacGreske++
    }
    else
    {
        document.getElementById("formaEmail").style.borderColor = "";

    }


    //padajuca Lista

    var padajucaLista = document.getElementById("padajucaLista").value;

    if(padajucaLista == 0)
    {
        document.getElementById("padajucaLista").style.borderColor = "red";

        if(brojacGreske == 0)
            tekstGreske += " drop down list"
         else
            tekstGreske += ", drop down list"
        
    brojacGreske++
    }
    else
    {
        document.getElementById("padajucaLista").style.borderColor = "";

    }


    // text area

    var tekstPolje =  document.getElementById("tekstPolje").value;

    if( tekstPolje == 'Message' || tekstPolje.length < 3)
    {
        document.getElementById("tekstPolje").style.borderColor = "red";

        if(brojacGreske == 0)
            tekstGreske += " text area"
         else
             tekstGreske += ", text area"
        
    brojacGreske++
    }
    else
    {
        document.getElementById("tekstPolje").style.borderColor = "";

    }

  //////

   
    //alert

    tekstGreske += " should be corrected."
    if(brojacGreske > 0){
        alert(tekstGreske);
       
    }
    else if (document.getElementById("newsletter").checked == true)
    {
        alert("Your form has been submitted successfully and you have subscribed to our newsletter.");
        document.getElementById("ajax-form").reset();
    }
    else 
    {
        alert("Your form has been submitted successfully.");
        document.getElementById("ajax-form").reset();
    }
}

//hamburger

