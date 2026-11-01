const defisConteiner=document.getElementById("defi-container");
defis.forEach(element=>{
    defisConteiner.innerHTML +=` <dic class="shadow-xl overflow-hidden  rounded-lg  ">
                <img src="image/Photo.png" class="">
                <div class="p-5 text-[#143B32]">
                    <div class="flex justify-between  items-center">
                        <p class="text-xs ">${element.sport}</p>
                        <a class="text-[#C9E58B] bg-[#143B32] p-2 rounded-full" href="">En cours</a>
                    </div>

                    <h3 class="text-xl font-bold">${element.nom}</h3>
                    <i class="fa-solid fa-calendar"></i>
                    <p>${element.debut}· 6 participants</p>
                    <div>
                        <i class="fa-solid fa-pen"></i>
                        <i class="fa-solid fa-trash"></i>
                    </div>


                </div>
            </dic>`

});