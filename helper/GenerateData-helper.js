'use strict';

export class GenerateData {

    gerarDataAtual() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;

        return today + protractor.Key.TAB;
    }


    gerarNumero() {
        return Math.floor(Math.random() * 100) + 1
    }

    getRandomEmail() {
        let strValues = "abcde12345";
        let strEmail = "";
        for (let i = 0; i < strValues.length; i++) {
            strEmail = strEmail + strValues.charAt(Math.round(strValues.length * Math.random()));
        }
        return strEmail + "@mymail.test";
    };

    getRandomNumber() {
        let randomNumber = "";
        let possible = "83988048307";
        for (let i = 0; i < possible.length; i++)
            randomNumber += possible.charAt(Math.floor(Math.random() * possible.length));
        return randomNumber;
    };

    getRandomNumberPR() {
        let randomNumber = "";
        let possible = "12345";
        for (let i = 0; i < possible.length; i++)
            randomNumber += possible.charAt(Math.floor(Math.random() * possible.length));
        return randomNumber;
    };

    getRandomString() {
        let randomText = "";
        let possible = "abcdefghjklm";
        for (let i = 0; i < possible.length; i++)
            randomText += possible.charAt(Math.floor(Math.random() * possible.length));
        return randomText;
    };
}