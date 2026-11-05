const participants = [{
    id: 1,
    pseudo: "labobo",
    nom: "labobo",
    score: "10"
}]
var id = null;

const participantsList = document.getElementById("participantsList")


affichageParticipants()

function affichageParticipants() {
    participantsList.innerHTML = ``
    participants.forEach(participant => {
        participantsList.innerHTML += `<div
                            class="flex justify-between items-center rounded-xl h-15 px-5 shadow-sm border border-[#EBEFEA] shadow-xs rounded-2xl">
                            <p class="text-sm font-bold text-[#0D382A]">${participant.pseudo} ${participant.nom}</p>
                            <div class="flex items-center justify-between gap-21">
                                <p class="text-[15px] font-extrabold text-[#0D382A]">${participant.score}</p>
                                <div>
                                    <button
                                        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow" data-pseudo="${participant.pseudo}"><i
                                            class="fa-solid fa-plus"></i></button>
                                            <button
                                            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow" data-pseudo=${participant.pseudo}><i
                                            class="fa-solid fa-user-minus"></i></button>
                                            <button
                                            class="modifyParticipant bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow" id="${participant.id}" data-pseudo="${participant.pseudo}"><i
                                            class="fa-solid fa-pencil"></i>
                                            </button>
                                            </div>
                                            </div>
                                            </div>`
    })
}

const participantFormulaire = document.forms['participantFormulaire']

const buttonAjouter = document.getElementById("addButton")
const pseudoMessage = document.getElementById("pseudoMessage")

buttonAjouter.addEventListener("click", event => {
    event.preventDefault()
    ajouterParticipant()
})


function ajouterParticipant() {
    console.log("test",id);
    
     pseudoEntrer = participantFormulaire.pseudoInput.value
     nomEntrer = participantFormulaire.nomInput.value
  
     
    console.log("test",id);

    if (trouverIndex(id) !== null) {
            let index= trouverIndex(id)
            console.log("index",index);
            
        update(index, pseudoEntrer, nomEntrer)
        affichageParticipants()
        return
    }
    console.log("here");
    
    scoreEnter = '0'

    id = participants.length + 1
    if (isValid(participants)) {
        participants.push({ pseudo: pseudoEntrer, nom: nomEntrer, score: scoreEnter, id })
        console.log(participants)
    }
    affichageParticipants()


}
function trouverIndex(idCherche) {
    return participants.findIndex(p => p.id == idCherche)   
}

function isValid(participants) {
    let valid = true

    participants.forEach(participant => {
        if (participant.pseudo == pseudoEntrer) {
            pseudoMessage.textContent = 'Ce pseudo est deja utiliser, veulliez entrer un nouveau pseudo'
            valid = !valid
            return
        }
    })
    return valid
}

function modifyParticipant() {

    const modifyParticipantBtn = participantsList.querySelectorAll(".modifyParticipant")

    modifyParticipantBtn.forEach((btn) => btn.addEventListener("click", event => {
       
        

        participantFormulaire.pseudoInput.value = participants.find(participant => participant.pseudo == event.currentTarget.dataset.pseudo).pseudo
        participantFormulaire.nomInput.value = participants.find(participant => participant.pseudo == event.currentTarget.dataset.pseudo).nom
        id = event.currentTarget.id
        

    }))
    //  participants.forEach((participant) => {
    //         let participantMod = find(participant => participant.pseudo == event.currentTarget.dataset.pseudo)
    //         buttonAjouter.addEventListener("click", event => {
    //             event.preventDefault()
    //             participantMod.pseudo = participantFormulaire.pseudoInput.value
    //             participantMod.nom = participantFormulaire.nomInput.value
    //             affichageParticipants()
    //         })
    //     })
}
function update(index, pseudo, nom) {
    console.log(participants[index]);

    participants[index].pseudo = pseudo;
    participants[index].nom = nom

}


modifyParticipant()

