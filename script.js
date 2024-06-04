const searchInput = document.querySelector("#searchInput");
const btnEkle = document.querySelector("#btnEkle");
const ul =document.querySelector("#todoList");

//! Önyüze eklemek için;

const önYüzeEkle = () => {
    let searchText = searchInput.value;
    // console.log(searchText)

    if(searchText.length !=0){
    ul.innerHTML += `
     <li class="list-item list-unstyled border border-bottom p-2 mb-2">${searchText}
    <i class=" icon fa-solid fa-circle-xmark float-end mt-1"></i>
    </li>`

    searchInput.value = "";
  }else{
    alert("Görev girmelisiniz...")
  }

}


btnEkle.addEventListener("click", önYüzeEkle);

searchInput.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        önYüzeEkle();
    }
})


// ! Tıklanan elemanı sildirmek için

const önYüzdenSil = (e) => {
// console.log(e.target.parentElement)


const li = e.target.parentElement;
if(e.target.className.includes("fa-solid")){
    li.style.display = "none"
}
}


ul.addEventListener("click", önYüzdenSil)


// ! Temizle butonuna tıkladığımda tüm içeriğin temizlenmesi;

const btnTemizle = document.querySelector("#btnTemizle");

btnTemizle.addEventListener("click", function(){
    ul.innerHTML ="";
});

// ! Görev arama;


const searchFilter = document.querySelector("#searchFilter");

const filtrele = () => {
    let filtreliDurum = searchFilter.value.trim().toLowerCase();

    let görevler = document.querySelectorAll(".list-item");

   görevler.forEach((görev) =>{
    if(görev.textContent.trim().toLowerCase().includes(filtreliDurum)){
        görev.style.display = "block";
    }else{
        görev.style.display = "none";
    }
   })
}



searchFilter.addEventListener("input", filtrele)