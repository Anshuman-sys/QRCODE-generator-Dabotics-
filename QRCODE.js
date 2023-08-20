const tomb = document.getElementById("tom");
const andyb = document.getElementById("andy");
const genb = document.getElementById("gen");
const qrmakerb = document.getElementById("qrmaker");

const container= document.querySelector(".content") 
let size=andy.value;
genb.addEventListener('click',(e)=>{
    e.preventDefault();
    qrcode();
});

andy.addEventListener("change",(e)=>{
    size =e.target.value;
    qrcode();
});

qrmaker.addEventListener("click",()=>{
     let img = document.querySelector("content img");
     if(img!==null)
     {
        let joy=img.getAttribute('src');
        qrmakerb.setAttribute("href",joy);
     }
     else
     {
        qrmakerb.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
     } 
})

function qrcode()
{
    container.innerHTML=" "; 
    new QRCode(container,{
        text:tomb.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#ff0000",
    });
}

