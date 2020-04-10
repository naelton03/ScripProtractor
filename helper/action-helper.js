'use strict';

import { ExpectedHelper } from "./expected-helper";
import { browser } from "protractor";

const expectedHelper = new ExpectedHelper();

export class ActionHelper {

    trySendKeys(element, text) {
        return element.clear()
            .then(() => element.sendKeys(text))
            .catch((e) => Promise.reject(`O elemento ${element.locator()} não foi 
                encontrado ou não foi possível escrever ${text} nele \n${e}`));
    }

    waitAndClickElement(element) {
        return expectedHelper.waitForElementClickable(element)
            .then(() => element.click());
    }

    uploadAnexo(element) {
        let pdf_padrao = __dirname + '/PDF_TESTE.pdf';

        return element.sendKeys(pdf_padrao);
    }

}