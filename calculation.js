
  
function Calculation(ticket, increment) {
    const ticketCount = getInputValue(ticket);
    let ticketAll = ticketCount;
    if (increment == true) {
        ticketAll = ticketCount + 1;
    }
    if (increment == false && ticketCount > 0) {
        ticketAll = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketAll;
    let ticketTotal = 0;
    if (ticket == 'firstClassTicket') {
        ticketTotal = ticketAll * 150;
    }
    if (ticket == 'economyTicket') {
        ticketTotal = ticketAll *100;
    }

    document.getElementById(ticket + '-total').innerText = '$' + ticketTotal;
    calculatedValue();
}

function calculatedValue() {
    const firstClassTicketCount = getInputValue('firstClassTicket');
    const economyTicketCount = getInputValue('economyTicket');

    const totalPrice = firstClassTicketCount * 150 + economyTicketCount *100;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInputValue(ticket) {
    console.log(ticket);
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

const bookNow = document.getElementById("bookNow"); 
bookNow.addEventListener("click", function(){
    const area = document.getElementById("main");
    area.style.display = "none";

    const successMessage = document.getElementById("greatingMessage"); 
    successMessage.style.display = "block"; 
    
    
    
})