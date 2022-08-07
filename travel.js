
let visitHere = ['Seattle, Washington', 'New York City, New York' ,
'Los Angeles, California' , 'San Francisco, California', 'Denver, Colorado', 
 'Austin, Texas' , 'Atlanta, Georgia' , 'Maui, Hawaii'
, 'Boston, Massachusettes' , 'Vancouver, British Columbia',
'Toronto, Ontario' , 'Cabo San Lucas, Baja California', 
'Buenos Aires, Argentina' , 'Iguazu Falls, Argentina',
'Rio de Janerio, Brazil', 'St. Kitts and Nevis', 'London, United Kingdom', 
'Brighton, United Kingdom',  'Dublin, Ireland' , 'Barcelona, Spain' , 
'Cadiz, Spain', 'Paris, France', 'Nice, France', 'Munich, Germany', 
'Berlin, Germany', 'Niedernhausen, Germany', 'Rome, Italy',
'Verona, Italy', 'Venice, Italy', 'Padua, Italy', 'Florence, Italy', 
'Cinque Terre, Italy', 'Amalfi Coast, Italy','Sperlonga, Italy', 
'Copenhagen, Denmark', 'Budapest, Hungary', 'Athens, Greece', 'Santorini, Greece', 
 'Vienna, Austria', 'Prague, Czech Republic', 'Amsterdam, Netherlands', 
'Tokyo, Japan', 'Vladivostok, Russia', 'Nahodka, Russia',
'Harare, Zimbabwe', 'Hwange National Park, Zimbabwe', 
'Victoria Falls, Zimbabwe', 'Kafue, Zambia', 'Kasane, Botswana', 
'Chobe National Park, Botswana','Okavango Delta, Botswana',
'Cape Town, South Africa', 'Melbourne, Australia', 'Sydney, Australia', 'Hong Kong, China'];
 
let clickMeButton = document.getElementById('myBtn');
let visit = document.getElementById('visit');

function travelSelector() {
    let randomCountry = Math.floor(Math.random() * visitHere.length);
    return visitHere[randomCountry];
}

function showTravelSelection() {
    visit.innerHTML = travelSelector();
    clickMeButton.innerHTML = "Try Again?";
    clickMeButton.style.cursor ='default';


}

clickMeButton.addEventListener('click', showTravelSelection);
