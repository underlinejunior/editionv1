let inputFile = document.querySelector("#picture_input");
let pictureImage = document.querySelector(".picture_image");
let pictureImageTxt = "Choose an image";
pictureImage.innerHTML = pictureImageTxt;


inputFile.addEventListener("change", function (e) {
    let inputTarget = e.target;
    let file = inputTarget.files[0];

    if (file) {
        let reader = new FileReader();

        reader.addEventListener("load", function (e) {
            let readerTarget = e.target;

            img = document.createElement("img");
            img.src = readerTarget.result;
            img.classList.add("picture_img");

            pictureImage.innerHTML = "";
            pictureImage.appendChild(img);
        });

        reader.readAsDataURL(file);
    } else {
        pictureImage.innerHTML = pictureImageTxt;
    }
});

async function aplicFilter() {
    let cor = document.getElementById('cor').value;
    let saturacao = document.getElementById('saturacao').value;
    let contraste = document.getElementById('contraste').value;
    let brilho = document.getElementById('brilho').value;

    pictureImage.style.filter = "contrast(" + contraste + "%) saturate(" + saturacao + "%) hue-rotate(" + cor + "deg) brightness(" + brilho + "%) ";
};

