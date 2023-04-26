
document.addEventListener("DOMContentLoaded", (event) => {
    // Add an event listener for when the user clicks the submit button to pay
    document.getElementById("donatenow").addEventListener("click", (e) => {
       
        e.preventDefault();
        const PBFKey = "FLWPUBK_TEST-1f5deb7a2b9f1ea3fc0514f1e15b161e-X"; // paste in the public key from your dashboard here
        const txRef = ''+Math.floor((Math.random() * 1000000000) + 1); //Generate a random id for the transaction reference
        // const email =document.getElementById('email').value;
        // const phone =document.getElementById('phone').value;
        // const amount = document.getElementById('amount').value;
        const donateamount=$("#donateamount").val();
        alert(donateamount)
        const inputname=document.getElementById("inputname").value;
        const emaild=document.getElementById("emaild").value;
        const inputphone=document.getElementById("inputphone").value;
        const inputState=document.getElementById("inputState").value;
        const inputname2=document.getElementById("inputname2").value;
        const inputname3=document.getElementById("inputname3").value;
        const gridCheck135=document.getElementById("gridCheck135").value;
       

        // getpaidSetup is Rave's inline script function. it holds the payment data to pass to Rave.
        getpaidSetup({
        PBFPubKey: PBFKey,
        customer_email: emaild,
        amount: donateamount,
        customer_phone: inputphone,
        currency: "KES",  // Select the currency. leaving it empty defaults to NGN
        txref: txRef, // Pass your UNIQUE TRANSACTION REFERENCE HERE.
        fullName:inputname,
        onclose: function() {},
        callback: function(response) {
            flw_ref = response.tx.flwRef;// collect flwRef returned and pass to a server page to complete status check.
            console.log("This is the response returned after a charge", response);
            if(response.tx.chargeResponse =='00' || response.tx.chargeResponse == '0') {
            // redirect to a success page
            } else {
            // redirect to a failure page.
            }
        }
      });
    });
});
function toggle() {
    document.querySelectorAll('div.divhide').forEach(function(elem) {
        elem.hidden = !elem.hidden;
    });
    
}
function paypal() {
    document.querySelectorAll('div.paypal'). forEach(function(elem) {
        elem.hidden= !elem.hidden;
        
    });
    
}