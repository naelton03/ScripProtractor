'use strict';

import {browser} from "protractor";

export class ScenarioHelper {

    visitUrl(url){
        return browser.get(url)
            .catch((e) => Promise.reject(`erro ao tentar acessar a url ${url}\n${e}`));
    }

    getUrl(){
        return browser.getCurrentUrl();
    }
}