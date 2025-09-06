numberOfPhotos = 2;
clickedPhoto = 0;

document.getElementById("div2").style.display = "none";

const showBigPhoto = () => {
    document.getElementById("div2").style.display = "block";
    
    for (let index=1; index<=numberOfPhotos; index++) {
        if (index==clickedPhoto) { document.getElementById("img" + index + "_2").style.display = "inline"; }
        else { document.getElementById("img" + index + "_2").style.display = "none"; }
    }
        
    document.getElementById("div1").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
}

const hideBigPhoto = () => {
    clickedPhoto = 0;
    document.getElementById("div2").style.display = "none";
    for (let index=1; index<=numberOfPhotos; index++) {
        document.getElementById("img" + index + "_2").style.display = "none";
    }
    
    document.getElementById("div1").style.display = "block";
    document.getElementById("div3").style.display = "block";
    document.getElementById("div4").style.display = "block";
}

//////////////////////////////////////

for (let index=1; index<=numberOfPhotos; index++) {
    const handleClick = () => {
        clickedPhoto = index;
        showBigPhoto();
    }
    document.getElementById("img"+index).addEventListener("click", handleClick);
}

document.getElementById("closeButton").addEventListener("click", hideBigPhoto);
