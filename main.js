onload = () =>{
    document.body.classList.remove("container");
};

const textArray = [
    "Happy Birthday ",
    "Happy 23 tahun sayangku cantik",
    "Semoga jalan yang baik ada di umur yang sekarang yaa",
    "Semoga apa yang kamu mau bisa terwujud secepatnya yaa",
    "Semoga tahun besok semakin bahagia",
    "Sama aku",
    "Dan sama segalanya",
    "Semoga panjang umur",
    "Dan sama aku terus",
    "Kenapa sama aku terus?",
    "Karna kamu anugrah terindah yang pernah ada",
    "Aku cuma mau sama kamu",
    "Dan kamu ajaa",
    "Pokonya sama kamu kemana aja",
    "Sama kamu makan apa aja",
    "Sama kamu nyobain apa aja",
    "Pokonya mau disamping kamu terus",
    "Sayanggg terus sama kamu",
    "Aku ga pernah bosen buat..",
    "Loving you eternally",
    "Love you soo fricking much",
    "Love you soo much",
    "Dan Happy birthday yaa pacarku cantik",
    "Wish u all the best sayang",
    "❤️❤️❤️",
];

let index = 0;
const textElement = document.getElementById('animated-text');
function changeText() {
    if (index < textArray.length) {
        textElement.textContent = textArray[index];
        index++; 
    }
}

setTimeout(() => {
    const interval = setInterval(() => {
        changeText();
        if (index === textArray.length) {
            clearInterval(interval);
        }
    }, 4000);

    textElement.style.display = "block";
    changeText();
}, 7000);