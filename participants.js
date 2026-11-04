const participants = [{
    pseudo: "labobo",
    nom: "labobo",
    score: "10"
}]


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
                                        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow" id="addToDefit"><i
                                            class="fa-solid fa-plus"></i></button>
                                            <button
                                            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow" id="deleteParticipant"><i
                                            class="fa-solid fa-user-minus"></i></button>
                                            <button
                                            class="modifyParticipant bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow"  data-pseudo=${participant.pseudo}><i
                                            class="fa-solid fa-pencil"></i>
                                            </button>
                                            </div>
                                            </div>
                                            </div>`
    })
}

const paricipantFormulaire = document.forms['paricipantFormulaire']

const buttonAjouter = document.getElementById("addButton")
const pseudoMessage = document.getElementById("pseudoMessage")

buttonAjouter.addEventListener("click", event => {
    event.preventDefault()
    ajouterParticipant()
})

function ajouterParticipant() {

    pseudoEntrer = paricipantFormulaire.pseudoInput.value
    nomEntrer = paricipantFormulaire.nomInput.value
    scoreEnter = '0'

    if (isValid(participants)) {
        participants.push({ pseudo: pseudoEntrer, nom: nomEntrer, score: scoreEnter })
        console.log(participants)
    }
    affichageParticipants()
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


