'use strict';

import {browser} from "protractor";

export class ClasseAuxiliar {
    constructor() {
        this.ambiente = '';
        this.base = '';
    }

    preparaAmbiente() {
        this.natureza = browser.params.natureza.toString();
        this.condicionamento = browser.params.condicionamento.toString();
    }

    getAmbiente(){
        return browser.params.ambiente.toString();
    }

    getBase(){
        return this.base;
    }
}