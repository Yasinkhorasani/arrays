//Lege ein Array mit 10 Stellen an und fülle jede Speicherstelle mit einer zufälligen ganzen Zahl zwischen 0 und 100.
//Lass den gesamten Inhalt ausgeben.
const zufall = (min=0, max=100) => ~~(Math.random() * (max - min + 1) + min);
let a = [], anzahl = 10;
for (let i = 0; i < anzahl; i++) {
    a.push(zufall())
}
console.log( a ); 
//(andere Loesung)
const zufall = (min = 0, max = 100) => ~~(Math.random() * (max - min + 1) + min);
let a = new Array(10);
for (let i = 0; i < a.length; i++) {
    a[i] = zufall();
}
console.log(a);


//Lass den Durchschnitt aller Zahlen in diesem Array ausgeben. 
let durchschnitt = a.reduce((a,b) => a+b) / a.length;
console.log (durchschnitt); 


//Lass nur die Speicherstellen des Array ausgeben, die kleiner sind als 20. 
const zufall = (min = 0, max = 100) => ~~(Math.random() * (max - min + 1) + min);

let a = new Array(10);
for (let i = 0; i < a.length; i++) a[i] = zufall();

a.forEach( el => {
    if( el < 20 ) console.log( el );
})
console.log( a.join(', ') );
//(andere Loesung)
 const zufall = (min = 0, max = 100) => ~~(Math.random() * (max - min + 1) + min);
const zufall = (min = 0, max = 100) => ~~(Math.random() * (max - min + 1) + min);
let a = new Array(10);
for (let i = 0; i < a.length; i++) a[i] = zufall();

console.log( a.filter( el => el < 20 ).join(', ') );



//Ermittle, wieviele der Elemente kleiner sind als 20
const threshold = 20;
const zufall = (min = 0, max = 100) => ~~(Math.random() * (max - min + 1) + min);
let a = new Array(10);
for (let i = 0; i < a.length; i++) a[i] = zufall();

console.log(a.filter(el => el < threshold).join(', '));
console.log(a.filter(el => el < threshold).length);
//(zweite Loesung)
const threshold = 20;

const zufall = (min = 0, max = 100) => ~~(Math.random() * (max - min + 1) + min);
let a = new Array(10);
for (let i = 0; i < a.length; i++) a[i] = zufall();
      
console.log(a);

console.log(a.reduce((anzahl, el) => {
 if (el < threshold) return anzahl + 1
 else return anzahl
}, 0));


//Erzeuge ein Array, welches die Zahlen von 0 bis 100 enthält.
//Lege eine Funktion an, die dieses Array durchmischt.
let a = [];
for (let i = 0; i < 100; i++) a.push(i);

for (let i = 0; i < a.length; i++) {
    let z = ~~(Math.random() * a.length);
    [a[i], a[z]] = [a[z], a[i]];
}
console.log(a.join(', '));


//Erzeuge ein Array, das die Zahlen von 1 bis 5 enthält.
//Tausche dann die zweite und die vierte Speicherstelle gegeneinander aus und lass das Array ausgeben.
let a = [1, 2, 3, 4, 5];
let temp = a[1];
a[1] = a[3];
a[3] = temp;
console.log(a);


//Lass den Benutzer einen Text eingeben und ermittle dann, wie viele Leerzeichen in diesem Text vorkommen.
let s = prompt('Eingabe:');
let count = 0;
for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') count++;
}
console.log(count);


//Lass den Benutzer einen Text eingeben und ermittle dann, wie viele Leerzeichen in diesem Text vorkommen.(andere loesung)
let s = prompt('Eingabe:');
let count = s.split(' ').length - 1
console.log(count); 


//Erzeuge ein Array für Lottozahlen.
//D.h. Speichere in diesem Array sechs Zufallszahlen von 1 bis 49 und stelle dabei sicher, dass keine der Zahlen doppelt vorkommt.
let a = [];
const zufall = (min, max) => ~~(Math.random() * (max - min + 1) + min);
while (a.length < 6) {
    let z = zufall(1, 49);
    if (!a.includes(z)) a.push(z);
}
a.sort((a, b) => a - b);
console.log(a);

//Andere Loesung
const zufall = (min, max) => ~~(Math.random() * (max - min + 1) + min);
const makeLotto = () => {
    let stapel = [...new Array(49)].map((el, i) => i + 1);
    let lotto = [];
    for (let i = 0; i < 6; i++) {
        let z = zufall(0,stapel.length-1);
        lotto.push(stapel.splice(z,1)[0]);
    }
    lotto.sort((a, b) => a - b);
    return(lotto);
}
console.log ( makeLotto() );

//Kompakter Loesung
const zufall = (min, max) => ~~(Math.random() * (max - min + 1) + min);
const makeLotto = () => {
    let stapel = [...new Array(49)].map((el, i) => i + 1);
    let lotto = [...new Array(6)].map(() => stapel.splice(zufall(0, stapel.length - 1), 1)[0]);
    lotto.sort((a, b) => a - b);
    return (lotto);
}
console.log(makeLotto());



//Erzeuge ein Array mit 10 zufälligen Zahlen.
//Lege eine echte Kopie dieses Arrays an. D.h. eine Änderung in dem originalen Array darf die Kopie nicht ändern.
let a = [];
for ( let i = 0; i < 10; i++) 
    a.push(~~(Math.random()*100));

let b = a.map(el => el);
a[0] = -1;
console.log( b );

//alternative
let a = [];
for ( let i = 0; i < 10; i++) 
    a.push(~~(Math.random()*100));

let b = [...a];
a[0] = -1;
console.log( b );



//Erzeuge zwei Arrays mit jeweils 10 zufälligen Zahlen.
//Erzeuge ein neues Array und führe die beiden vorigen Arrays darin zusammen.
let a = [1,2,3];
let b = [11,22,33];
let all = [...a, ...b];
console.log(all);
//Erweitere dieses Array um drei zufällige Zahlen.
let a = [];
let z = () => ~~(Math.random()*100);
for ( let i = 0; i < 10; i++) 
    a.push(z());

let b = [...a, z(), z(), z()];
console.log(a);
console.log(b);



//Lege zwei Arrays mit einigen Vor- und Nachnamen an.
//Erzeuge 20 zufällige Vorname/Nachname-Kombinationen und lass sie ausgeben.
const zufallErzeugen = (min, max) => ~~(Math.random() * (max - min + 1) + min);
const zufallsAuswahl = (sammlung) => {
    return sammlung[zufallErzeugen(0,sammlung.length-1)];
}
let name = `${zufallsAuswahl(weiblich)} ${zufallsAuswahl(nachnamen)}`;
console.log(name);



//Lass einige der Kombinationen Doppelnamen tragen.

let maennlich = ['Ralf', 'Erwin', 'Jürgen', 'Harald', 'Stefan'];
let weiblich = ['Erika', 'Julia', 'Rosamunde', 'Melanie', 'Jasmin'];
let nachnamen = ['Schmidt', 'Müller', 'Meyer', 'Schulz', 'Kowalski'];

const zufallErzeugen = (min, max) => ~~(Math.random() * (max - min + 1) + min);

const zufallsAuswahl = (sammlung, anzahl) => {
    let auswahl = [];
    sammlung = [...sammlung];
    for (let i = 0; i < anzahl; i++) {
        auswahl.push(sammlung.splice(zufallErzeugen(0, sammlung.length - 1), 1)[0]);
    }
    return auswahl;
}

let name = zufallsAuswahl(weiblich, zufallErzeugen(1,2)).join('-');
name += ' ';
name += zufallsAuswahl(nachnamen, zufallErzeugen(1,2)).join('-');

console.log(name);