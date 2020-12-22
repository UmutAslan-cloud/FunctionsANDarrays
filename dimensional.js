/**
 * Asagida bir sinifta bulunan ogrencilerin bazi dersleri bize cift boyutlu array olarak verilmis
 * Bizden
 * - Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi
- Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi
- Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi
- Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi
- Sinifin en kötü oldugu dersi gostermesi
- Tüm derslerin en iyi ögrencilerini bulmasi
isteniyor.
Bu islemler icin array metodlari,donguler ve kosul ifadeleri kullanicaz.
index sirasiyla Matematik,Almanca,Ingilizce ve Cografya derslerine aittir.
*/
const notes = [
    ["Hans", 80, 90, 10, 50],
    ["Ulrich", 94, 36, 76, 74],
    ["Olaf", 30, 60, 34, 78],
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
];


const MATH = 1;
const GERMAN = 2;
const ENGLISH = 3;
const GEOGRAPHY = 4;

let matAvarage = 0
let germanAvarage = 0
let engAvarage = 0
let geoAvarage = 0

let mathNotes = []
let germanNotes = []
let engNotes = []
let geoNotes = []


let AVARAGE_GENERAL = (pNotesList, index, pLessonName) => {
    let sum = 0;
    sum = sum + Number(pNotesList[index][pLessonName])

    return sum;
}


function calcAvarage(note, divide) {
    let result = 0;
    result = note / divide.length;
    return result;
}
let maxNotes = (pnotes, index, pLessonName) => {
    let lessonNotes = pnotes[index][pLessonName]
    return lessonNotes
}



for (let index = 0; index < notes.length; index++) {
    matAvarage += AVARAGE_GENERAL(notes, index, MATH)
    germanAvarage += AVARAGE_GENERAL(notes, index, GERMAN)
    engAvarage += AVARAGE_GENERAL(notes, index, ENGLISH)
    geoAvarage += AVARAGE_GENERAL(notes, index, GEOGRAPHY)

}
let mathSum = calcAvarage(matAvarage, notes)
let gerSum = calcAvarage(germanAvarage, notes)
let engSum = calcAvarage(engAvarage, notes)
let geoSum = calcAvarage(geoAvarage, notes)
console.log(mathSum)
console.log(gerSum)
console.log(engSum)
console.log(geoSum)
//Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi
let overSeventy = []
for (let index = 0; index < notes.length; index++) {
    for (let j = 1; j < 5; j++) {
        if (notes[index][j] > 70) {
            overSeventy.push(notes[index][0])
        }

    }

}
console.log("===============")
// Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi
let overAvarageMath = [];
let overAvarageDeu = [];
let overAvarageEng = [];
let overAvarageGeo = [];

let overAvarage = (pnote, poverAvarage, plist, index) => {
    if (pnote > poverAvarage) {
        plist.push(notes[index][0])
    }
    return plist
}


for (let index = 0; index < notes.length; index++) {
    overAvarage(notes[index][MATH], mathSum, overAvarageMath, index)
    overAvarage(notes[index][GERMAN], gerSum, overAvarageDeu, index)
    overAvarage(notes[index][ENGLISH], engSum, overAvarageEng, index)
    overAvarage(notes[index][GEOGRAPHY], geoSum, overAvarageGeo, index)

}
console.log("Matematik Dersinden Ortalama üstü olanlar  " + overAvarageMath)
console.log("Almanca Dersinden Ortalama üstü olanlar  " + overAvarageDeu)
console.log("Ingilizce Dersinden Ortalama üstü olanlar  " + overAvarageEng)
console.log("Cografya Dersinden Ortalama üstü olanlar  " + overAvarageGeo)
console.log("===============")
/*  Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi
- Sinifin en kötü oldugu dersi gostermesi */
let maxValue = 0
let allLessons = [];
allLessons.push(mathSum, gerSum, engSum, geoSum)


maxValue = Math.max.apply(Math, allLessons)

if (maxValue == allLessons[0]) {
    console.log("En yuksek ders ortalamasi Matematik" + 59.125)
} else if (maxValue == allLessons[1]) {
    console.log("En yuksek ders ortalamasi Almanca" + 54.125)
} else if (maxValue == allLessons[2]) {
    console.log("En yuksek ders ortalamasi Ingilizce" + 55.125)

} else if (maxValue == allLessons[3]) {
    console.log("En yuksek ders ortalamasi Cografya  " + 61.75)
}
//En dusuk ders ortalamasi
let minValue = 0
minValue = Math.min.apply(Math, allLessons)

if (minValue == allLessons[0]) {
    console.log("En dusuk ders ortalamasi Matematik " + 59.125)
} else if (minValue == allLessons[1]) {
    console.log("En dusuk ders ortalamasi Almanca " + 54.125)
} else if (minValue == allLessons[2]) {
    console.log("En dusuk ders ortalamasi Ingilizce " + 55.125)

} else if (minValue == allLessons[3]) {
    console.log("En dusuk ders ortalamasi Cografya  " + 61.75)
}

console.log("=================")
//Tum derslerde en iyi ogrenciler

for (let index = 0; index < notes.length; index++) {
    mathNotes.push(maxNotes(notes, index, MATH))
    germanNotes.push(maxNotes(notes, index, GERMAN))
    engNotes.push(maxNotes(notes, index, ENGLISH))
    geoNotes.push(maxNotes(notes, index, GEOGRAPHY))
}

let mathMaxPerson = Math.max.apply(Math, mathNotes)
let gerMaxPerson = Math.max.apply(Math, germanNotes)
let engMaxPerson = Math.max.apply(Math, engNotes)
let geoMaxPerson = Math.max.apply(Math, geoNotes)

for (let notlar = 0; notlar < notes.length; notlar++) {
    if (mathMaxPerson == notes[notlar][MATH]) {
        console.log(`Matematik dersinden en iyi ogrenci ${notes[notlar][0]} ${notes[notlar][MATH]}`)
    } else if (gerMaxPerson == notes[notlar][GERMAN]) {
        console.log(`Almanca dersinden en iyi ogrenci ${notes[notlar][0]} ${notes[notlar][GERMAN]}`)
    } else if (engMaxPerson == notes[notlar][ENGLISH]) {
        console.log(`Ingilizce dersinden en iyi ogrenci ${notes[notlar][0]} ${notes[notlar][ENGLISH]}`)
    }
    if (geoMaxPerson == notes[notlar][GEOGRAPHY]) {
        console.log(`Cografya dersinden en iyi ogrenci ${notes[notlar][0]} ${notes[notlar][GEOGRAPHY]}`)
    }

}