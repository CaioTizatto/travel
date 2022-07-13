var flight=document.getElementById('flight')
var rental=document.getElementById('rental')
var hotel=document.getElementById('hotel')
flight.addEventListener('click', mudarflight)
rental.addEventListener('click', mudarrental)
hotel.addEventListener('click', mudarhotel)
function name(params) {
    
}
function mudarflight() {
    flight.classList.remove("botaoconteudo")
    flight.classList.add("botaoclicado")
    rental.classList.remove("botaoclicado")
    rental.classList.add("botaoconteudo")
    hotel.classList.remove("botaoclicado")
    hotel.classList.add("botaoconteudo")
}
function mudarrental() {
    rental.classList.remove("botaoconteudo")
    rental.classList.add("botaoclicado")
    flight.classList.remove("botaoclicado")
    flight.classList.add("botaoconteudo")
    hotel.classList.remove("botaoclicado")
    hotel.classList.add("botaoconteudo")
}
function mudarhotel() {
    hotel.classList.remove("botaoconteudo")
    hotel.classList.add("botaoclicado")
    rental.classList.remove("botaoclicado")
    rental.classList.add("botaoconteudo")
    flight.classList.remove("botaoclicado")
    flight.classList.add("botaoconteudo")
    
}