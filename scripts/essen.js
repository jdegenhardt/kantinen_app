function essen_Menue(datum, e1, p1, e2, p2, e3, p3, e4, p4) {
    this.datum = datum;
    this.e1 = e1;
    this.e2 = e2;
    this.e3 = e3;
    this.e4 = e4;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;

    //Getter
    essen_Menue.prototype.getDatum = function () {
        return this.datum;
    }
    essen_Menue.prototype.getE1 = function () {
        return this.e1;
    }
    essen_Menue.prototype.getE2 = function () {
        return this.e2;
    }
    essen_Menue.prototype.getE3 = function () {
        return this.e3;
    }
    essen_Menue.prototype.getE4 = function () {
        return this.e4;
    }
    essen_Menue.prototype.getP1 = function () {
        return this.p1;
    }
    essen_Menue.prototype.getP2 = function () {
        return this.p2;
    }
    essen_Menue.prototype.getP3 = function () {
        return this.p3;
    }
    essen_Menue.prototype.getP4 = function () {
        return this.p4;
    }
    //Setter
    essen_Menue.prototype.setDatum = function (datum) {
        this.datum = datum;
    }
    essen_Menue.prototype.setE1 = function (essen) {
        this.e1 = essen;
    }
    essen_Menue.prototype.setE2 = function (essen) {
        this.e2 = essen;
    }
    essen_Menue.prototype.setE3 = function (essen) {
        this.e3 = essen;
    }
    essen_Menue.prototype.setE4 = function (essen) {
        this.e4 = essen;
    }
    essen_Menue.prototype.setP1 = function (preis) {
        this.p1 = preis;
    }
    essen_Menue.prototype.setP2 = function (preis) {
        this.p2 = preis;
    }
    essen_Menue.prototype.setP3 = function (preis) {
        this.p3 = preis;
    }
    essen_Menue.prototype.setP4 = function (preis) {
        this.p4 = preis;
    }

}

function essen_makeRequest(id, attribute) {

    var apiUrl = 'https://graph.facebook.com/'
    if (attribute != '') {
        attribute = '/' + attribute;
    }
    var token = 'AAACZCEZAB3PGkBALunsPJTKatfNov6KQgPbcwZBhk6UCn95OEurBfPk4KQowA3g7K8MLZBLQOutnLYKvDHFXShOX8JCRVuPnhhkux7vQ8gZDZD';
    url = apiUrl + id + attribute + '?access_token=' + token;
    $.getJSON(url, function (data) {
        var menue1 = essen_createMenue(data.data[0].message);
        var menue2 = essen_createMenue(data.data[1].message);
        essen_fuellen("1", menue1);
        essen_fuellen("2", menue2);
    });
}

function essen_handleRequest() {
    var menue1 = essen_createMenue(json.data[0].message);
    var menue2 = essen_createMenue(json.data[1].message);
    essen_fuellen("1", menue1);
    essen_fuellen("2", menue2);
}

function essen_createMenue(message) {
    //Variablen
    var zahl = new RegExp("[0-9]");
    var euro = "\u20ac";
    var absatz = "\n";
    var menue = new essen_Menue();
    //Datum auslesen
    menue.setDatum(message.substring(0, message.search("\n")).substring(message.search("f\u00fcr") + 4));
    //String anpassen
    message = message.substring(message.search(absatz) + 2);
    //E1 auslesen
    menue.setE1(message.substring(0, message.search(zahl) - 2));
    //String anpassen
    message = message.substring(message.search(zahl));
    //P1 auslesen
    menue.setP1(message.substring(0, message.search(euro)));
    //String anpassen
    message = message.substring(message.search(euro) + 3);
    //E2 auslesen
    menue.setE2(message.substring(0, message.search(zahl) - 2));
    //String anpassen
    message = message.substring(message.search(zahl));
    //P2 auslesen
    menue.setP2(message.substring(0, message.search(euro)));
    //String anpassen
    message = message.substring(message.search(euro) + 3);
    //E3 auslesen
    menue.setE3(message.substring(0, message.search(zahl) - 2));
    //String anpassen
    message = message.substring(message.search(zahl));
    //P3 auslesen
    menue.setP3(message.substring(0, message.search(euro)));
    //String anpassen
    message = message.substring(message.search(absatz + absatz) + 2);
    //E4 auslesen
    menue.setE4(message.substring(0, message.search(zahl) - 3));
    //String anpassen
    message = message.substring(message.search(zahl));
    //P4 auslesen
    menue.setP4(message.substring(0, message.search(euro)));
    //String anpassen
    message = message.substring(message.search(euro) + 3);

    return menue;
}

function essen_fuellen(count, menue) {
    document.getElementById("T" + count).innerHTML = menue.getDatum();
    document.getElementById("T" + count + "e1").innerHTML = menue.getE1();
    document.getElementById("T" + count + "e2").innerHTML = menue.getE2();
    document.getElementById("T" + count + "e3").innerHTML = menue.getE3();
    document.getElementById("T" + count + "e4").innerHTML = menue.getE4();
    document.getElementById("T" + count + "p1").innerHTML = menue.getP1() + " &euro;";
    document.getElementById("T" + count + "p2").innerHTML = menue.getP2() + " &euro;";
    document.getElementById("T" + count + "p3").innerHTML = menue.getP3() + " &euro;";
    document.getElementById("T" + count + "p4").innerHTML = menue.getP4() + " &euro;";
}