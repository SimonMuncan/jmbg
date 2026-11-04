const regioni = {
    "01": { drzava: "Stranci bez državljanstva bivše SFRJ", region: "Stranci u BiH" },
    "02": { drzava: "Stranci bez državljanstva bivše SFRJ", region: "Stranci u Crnoj Gori" },
    "03": { drzava: "Stranci bez državljanstva bivše SFRJ", region: "Stranci u Hrvatskoj" },
    "04": { drzava: "Stranci bez državljanstva bivše SFRJ", region: "Stranci u Makedoniji" },
    "05": { drzava: "Stranci bez državljanstva bivše SFRJ", region: "Stranci u Sloveniji" },
    "07": { drzava: "Stranci bez državljanstva bivše SFRJ", region: "Stranci u Srbiji (bez pokrajina)" },
    "08": { drzava: "Stranci bez državljanstva bivše SFRJ", region: "Stranci u Vojvodini" },
    "09": { drzava: "Stranci bez državljanstva bivše SFRJ", region: "Stranci na Kosovu i Metohiji" },

    "10": { drzava: "Bosna i Hercegovina", region: "Banja Luka" },
    "11": { drzava: "Bosna i Hercegovina", region: "Bihać" },
    "12": { drzava: "Bosna i Hercegovina", region: "Doboj" },
    "13": { drzava: "Bosna i Hercegovina", region: "Goražde" },
    "14": { drzava: "Bosna i Hercegovina", region: "Livno" },
    "15": { drzava: "Bosna i Hercegovina", region: "Mostar" },
    "16": { drzava: "Bosna i Hercegovina", region: "Prijedor" },
    "17": { drzava: "Bosna i Hercegovina", region: "Sarajevo" },
    "18": { drzava: "Bosna i Hercegovina", region: "Tuzla" },
    "19": { drzava: "Bosna i Hercegovina", region: "Zenica" },

    "21": { drzava: "Crna Gora", region: "Podgorica" },
    "26": { drzava: "Crna Gora", region: "Nikšić" },
    "29": { drzava: "Crna Gora", region: "Pljevlja" },

    "30": { drzava: "Hrvatska", region: "Osijek, Slavonija region" },
    "31": { drzava: "Hrvatska", region: "Bjelovar, Virovitica, Koprivnica, Pakrac, Podravina region" },
    "32": { drzava: "Hrvatska", region: "Varaždin, Međimurje region" },
    "33": { drzava: "Hrvatska", region: "Zagreb" },
    "34": { drzava: "Hrvatska", region: "Karlovac" },
    "35": { drzava: "Hrvatska", region: "Gospić, Lika region" },
    "36": { drzava: "Hrvatska", region: "Rijeka, Pula, Istra i Primorje region" },
    "37": { drzava: "Hrvatska", region: "Sisak, Banovina region" },
    "38": { drzava: "Hrvatska", region: "Split, Zadar, Dubrovnik, Dalmacija region" },
    "39": { drzava: "Hrvatska", region: "Ostalo" },

    "41": { drzava: "Makedonija", region: "Bitola" },
    "42": { drzava: "Makedonija", region: "Kumanovo" },
    "43": { drzava: "Makedonija", region: "Ohrid" },
    "44": { drzava: "Makedonija", region: "Prilep" },
    "45": { drzava: "Makedonija", region: "Skopje" },
    "46": { drzava: "Makedonija", region: "Strumica" },
    "47": { drzava: "Makedonija", region: "Tetovo" },
    "48": { drzava: "Makedonija", region: "Veles" },
    "49": { drzava: "Makedonija", region: "Štip" },

    "50": { drzava: "Slovenija", region: "Slovenija" },

    "71": { drzava: "Centralna Srbija", region: "Beograd region" },
    "72": { drzava: "Centralna Srbija", region: "Šumadija" },
    "73": { drzava: "Centralna Srbija", region: "Niš region" },
    "74": { drzava: "Centralna Srbija", region: "Južna Morava" },
    "75": { drzava: "Centralna Srbija", region: "Zaječar" },
    "76": { drzava: "Centralna Srbija", region: "Podunavlje" },
    "77": { drzava: "Centralna Srbija", region: "Podrinje i Kolubara" },
    "78": { drzava: "Centralna Srbija", region: "Kraljevo region" },
    "79": { drzava: "Centralna Srbija", region: "Užice region" },

    "80": { drzava: "AP Vojvodina", region: "Novi Sad region" },
    "81": { drzava: "AP Vojvodina", region: "Sombor region" },
    "82": { drzava: "AP Vojvodina", region: "Subotica region" },
    "85": { drzava: "AP Vojvodina", region: "Zrenjanin region" },
    "86": { drzava: "AP Vojvodina", region: "Pančevo region" },
    "87": { drzava: "AP Vojvodina", region: "Kikinda region" },
    "88": { drzava: "AP Vojvodina", region: "Ruma region" },
    "89": { drzava: "AP Vojvodina", region: "Sremska Mitrovica region" },

    "91": { drzava: "AP Kosovo i Metohija", region: "Priština region" },
    "92": { drzava: "AP Kosovo i Metohija", region: "Kosovska Mitrovica region" },
    "93": { drzava: "AP Kosovo i Metohija", region: "Peć region" },
    "94": { drzava: "AP Kosovo i Metohija", region: "Đakovica region" },
    "95": { drzava: "AP Kosovo i Metohija", region: "Prizren region" },
    "96": { drzava: "AP Kosovo i Metohija", region: "Kosovsko Pomoravski okrug" }
};

function datumPostoji(dan, mesec, godina) {
    const datum = new Date(godina, mesec - 1, dan);
    return datum.getFullYear() === godina
        && datum.getMonth() === mesec - 1
        && datum.getDate() === dan;
}

function izracunajKontrolnuCifru(cifre) {
    const [A, B, V, G, D, Dj, E, Zh, Z, I, J, K] = cifre;

    let L = 11 - ((7 * (A + E) + 6 * (B + Zh) + 5 * (V + Z) + 4 * (G + I) + 3 * (D + J) + 2 * (Dj + K)) % 11);

    if (L > 9) {
        L = 0;
    }

    return L;
}

function proveriJmbg(jmbg) {
    if (!/^\d{13}$/.test(jmbg)) {
        return { greska: "JMBG mora sadržati tačno 13 cifara." };
    }

    const cifre = jmbg.split("").map(Number);

    const dan = Number(jmbg.slice(0, 2));
    const mesec = Number(jmbg.slice(2, 4));
    const ggg = Number(jmbg.slice(4, 7));
    const rr = jmbg.slice(7, 9);
    const bbb = Number(jmbg.slice(9, 12));
    const k = cifre[12];

    const godina = ggg >= 800 ? 1000 + ggg : 2000 + ggg;

    if (!datumPostoji(dan, mesec, godina)) {
        return { greska: "Datum rođenja iz JMBG-a ne postoji." };
    }

    const region = regioni[rr];
    if (!region) {
        return { greska: "Region sa oznakom " + rr + " ne postoji." };
    }

    if (izracunajKontrolnuCifru(cifre) !== k) {
        return { greska: "Kontrolna cifra nije ispravna." };
    }

    return {
        dan: dan,
        mesec: mesec,
        godina: godina,
        drzava: region.drzava,
        region: region.region,
        pol: bbb < 500 ? "Muški" : "Ženski",
        jedinstveniBroj: jmbg.slice(9, 12),
        kontrolnaCifra: k
    };
}

function formatirajDatum(dan, mesec, godina) {
    const dd = String(dan).padStart(2, "0");
    const mm = String(mesec).padStart(2, "0");
    return dd + "." + mm + "." + godina + ".";
}

const forma = document.getElementById("forma");
const rezultat = document.getElementById("rezultat");

function prikaziGresku(poruka) {
    rezultat.className = "greska";
    rezultat.textContent = poruka;
}

function dodajRed(naziv, vrednost) {
    const red = document.createElement("p");
    const oznaka = document.createElement("strong");
    oznaka.textContent = naziv + ": ";
    red.appendChild(oznaka);
    red.appendChild(document.createTextNode(vrednost));
    rezultat.appendChild(red);
}

forma.addEventListener("submit", function (e) {
    e.preventDefault();

    const ime = document.getElementById("ime").value.trim();
    const prezime = document.getElementById("prezime").value.trim();
    const jmbg = document.getElementById("jmbg").value.trim();

    if (ime === "" || prezime === "") {
        prikaziGresku("Unesite ime i prezime.");
        return;
    }

    const podaci = proveriJmbg(jmbg);

    if (podaci.greska) {
        prikaziGresku(podaci.greska);
        return;
    }

    rezultat.className = "uspeh";
    rezultat.innerHTML = "";

    dodajRed("Ime i prezime", ime + " " + prezime);
    dodajRed("JMBG", jmbg);
    dodajRed("Datum rođenja", formatirajDatum(podaci.dan, podaci.mesec, podaci.godina));
    dodajRed("Pol", podaci.pol);
    dodajRed("Država / oblast", podaci.drzava);
    dodajRed("Region", podaci.region);
    dodajRed("Jedinstveni broj", podaci.jedinstveniBroj);
    dodajRed("Kontrolna cifra", podaci.kontrolnaCifra + " (ispravna)");
});
