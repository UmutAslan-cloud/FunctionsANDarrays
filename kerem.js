/**
 * Kerem Beyin toptancilardan aldigi yedek parcalar belirlenecek
 * Kerem bey icin bir envanter olusturulacak
 * Bu envantere kaydedilen araba parcalari asagidaki islemlerden gecirilecek.
 * 1. Parca isimleri büyük harflere cevrilecektir.
2. Parca isimlerinden sayilar cikartilacaktir.
3. Parca isimleri tersine cevrilecektir.
4. Her parcanin basina KEREMAG_ eklenecektir.
5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. Date nesnesi)
 */

let carParts = ["sk23a", "jayir34bed", "at4444alab", "tn67aj", "ireso56rak", "atro98pak", "ra9f", "noyisnap89süs", "rös76nes"];
let keremInventory = [];

function toCap(capitalP) {
    let result = String(capitalP).toUpperCase().split(",")
    return result
}

function deleteNum(dlist) {
    let result = String(dlist).replace(/[0-9]/g, '');
    return result
}

function reverse(rlist) {
    let result = String(rlist).split("").reverse().join("");
    return result
}
//Tum Fonksiyonlar kullanilabilir olmasi icin tek bir fonksiyonda birlestirildi.
function Inventor(plist) {
    let resultrev = reverse(plist)
    let resultToCap = toCap(resultrev)
    let resultDel = deleteNum(resultToCap);
    let keremlist = resultDel.split(",")
    return keremlist;

}

keremInventory = keremInventory.concat(Inventor(carParts));
keremInventory.forEach(function (element, index) {
    keremInventory[index] = 'KEREMAG_ ' + element + " " + new Date();

});
console.log(keremInventory);