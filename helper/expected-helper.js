'use strict';
/*
* Classe Helper para Auxiliar com metodos de espera
*
*/
import { browser } from "protractor";
import { protractor } from "protractor/built/ptor";

export class ExpectedHelper {

    waitForElementClickable(element) {
        return browser.wait(browser.ExpectedConditions.elementToBeClickable(element), 1000 * 70)
            .catch((e) => Promise.reject(`\nO Elemento ${element.locator()} não está clicável\n${e}`));
    }

    waitForElementContain(element, text) {
        return browser.wait(browser.ExpectedConditions.textToBePresentInElement(element, text), 1000 * 10)
            .catch((e) => Promise.reject(e + element.locator() == undefined
                ? `\n Elemento ${element.locator()}`
                : `\n Elemento ${element.locator()} não contém ${text} Ou nao foi encontrado`));
    }

    waitForElementIsPresent(element) {
        return browser.wait(browser.isElementPresent(element), 1000 * 20)
            .catch((e) => Promise.reject(e + '\nElemento' + element.locator() + 'Não está presente'));
    }

    WaitForEleementDisabled(element) {
        return browser.wait(protractor.ProtractorExpectedConditions.elementIsDisabled(element), 1000 * 10)
    }
}