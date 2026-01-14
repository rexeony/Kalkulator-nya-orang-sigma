function getValue(id) {
    return parseFloat(document.getElementById(id).value);
}

function tambah() {
    document.getElementById("hasil").innerText =
        getValue("a") + getValue("b");
}

function kurang() {
    document.getElementById("hasil").innerText =
        getValue("a") - getValue("b");
}

function kali() {
    document.getElementById("hasil").innerText =
        getValue("a") * getValue("b");
}

function bagi() {
    let b = getValue("b");
    if (b === 0) {
        alert("Tidak bisa dibagi 0");
        return;
    }
    document.getElementById("hasil").innerText =
        getValue("a") / b;
}

function hitungDiskon() {
    let harga = getValue("harga");
    let diskon = getValue("diskon");

    let total = harga - (harga * diskon / 100);
    document.getElementById("total").innerText = total;
}

function hitungNilai() {
    let r =
        (getValue("n1") + getValue("n2") + getValue("n3")) / 3;

    let grade = "E";
    if (r >= 85) grade = "A";
    else if (r >= 70) grade = "B";
    else if (r >= 55) grade = "C";
    else if (r >= 40) grade = "D";

    document.getElementById("rata").innerText = r.toFixed(2);
    document.getElementById("grade").innerText = grade;
}