// Events System - Variables

let eventname1 = 'Computer network'
let eventname2 = 'Free Software Fair'
let eventname3 = 'Database in medium-sized companies'
let eventname4 = 'How to Create Your Own Startup'
let speaker1 = 'Leandro'  
let speaker2 = 'Rodrigo'
let speaker3 = 'Cleyton'
let speaker4 = 'Ricardo'
let participants1 = ["Carlos","Sophia","Júlia","Valentina","Giovanna","Maria Eduarda","Heloísa","Laura","Lara","Cecília","Júlia","Henrique","João Lucas","Daniel","Murilo","Leonardo","Pietro","Joaquim","Caio","Vinicius","Bryan","João Miguel","Francisco","Jonathan","Ângelo","Manuel","Frederico","Aquiles","Pablo","Douglas","Santiago","Raul","Wilian","César","Fábio","Marcos","Muriel","Jonas","Anderson"]
let participants2 = ["Mariana","Sarah","Gabriela","Ana Júlia","Clara","Isis","Maria Alice","Alícia","Sofia","Valentina","Helena"]
let participants3 = ["Lívia","Ana","Alana","Isis","Clara","Gabriela","Yasmin","Lis","Maria","Ester","Nicole","Mariana","Melinda","Rebeca","Jade","Ariela","Luana","Marina","Ariana","Débora","Juliana","Belinda","Dulce","Raquel","Arthur","Samuel","Gustavo"]
let participants4 = ["Antônio","Davi Lucas","Thiago","Thomas","Enzo","Benjamim","Mateus","Caio","Felipe","David","Joaquim","Eduardo","Samuel","Hugo","Augusto","Levi","Diogo","Vicente","Rodrigo","Danilo","Filipe","Fernando","Renan","Apólo"]
let atualdate = 20-10-2021
let eventdate = 21-10-2021
let age = 21

// Comparison of dates

if(eventdate > atualdate) {
    console.log("That date is available!")
} else {
    console.log("It will not be possible to register for an invalid date")
}

// Age Conditional

if (age > 18) {
    console.log("Participant registration will be allowed!")
} else {
    console.log("Registration is not allowed by age!")
}

// Participant Conditional

if (participants1.length < 100) {
    console.log("There are vacancies for the event!")
} else {
    console.log("Registration will not be allowed for having exceeded the limit!")
}

// List attendees and speakers by event
console.log("-------List participants and lectures by event 1-------")
console.log(`Event: ${eventname1} |` + `Speaker: ${speaker1} | ` + `Participants: ${participants1}`)
console.log("-------List participants and lectures by event 2-------")
console.log(`Event: ${eventname2} |` + `Speaker: ${speaker2} | ` + `Participants: ${participants2}`)
console.log("-------List participants and lectures by event 3-------")
console.log(`Event: ${eventname3} |` + `Speaker: ${speaker3} | ` + `Participants: ${participants3}`)
console.log("-------List participants and lectures by event 4-------")
console.log(`Event: ${eventname4} |` + `Speaker: ${speaker4} | ` + `Participants: ${participants4}`)