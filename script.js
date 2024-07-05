// script.js

// Function to generate QR code

let counter = 0;

function generateQR() {
    // Get the text entered by the user
    let inputValue = window.document.getElementById("qr-input").value;
    counter += 1;
    let html_qr_render = window.document.getElementById("qr-code")
    // Create QR Code instance
    let qrcode = new QRCode(html_qr_render, {
        width: 300,
        height: 300
    });

    // Generate QR code with the entered text
    qrcode.makeCode(inputValue);
    if(counter>0){
        window.console.log(counter);
        html_qr_render.append("[next]");
    }
}

function clean(){
    let qrcode = window.document.getElementById("qr-code");
    qrcode.innerHTML = "";
    counter = 0;
}
