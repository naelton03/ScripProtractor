'use strict';

export class ConverterHelper {
    converteNumeroprocuracao(mensagem){
        return mensagem.substr(35).trim().replace(/\s/g,'');
    }
}