var qrcode = new QRCode("qrcode");
var text = document.getElementById("value");

function makeCode () {		
        qrcode.makeCode(text.value);
}

text.onblur = makeCode;
text.onkeydown = makeCode;
makeCode();