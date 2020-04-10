'use strict';

import { ExpectedHelper } from "../helper/expected-helper";
import { ScenarioHelper } from "../helper/scenario-helper";

import { ClasseAuxiliar } from "../auxiliar/classe-auxiliar";
import { PaginaInicial } from "../page-object/PaginaInicial.po";


const classeAuxiliar = new ClasseAuxiliar();
const paginaInicial = new PaginaInicial();
const expectedHelper = new ExpectedHelper();
const scenarioHelper = new ScenarioHelper();



beforeAll(() => {
    classeAuxiliar.preparaAmbiente();
    browser.waitForAngularEnabled(false);
});

describe('Cadastro Linha Orçamentária', () => {


    it('Acessar página de login', () => {
        scenarioHelper.visitUrl(paginaInicial.url)
    });

    it('teste1', () => {
        paginaInicial.clickCadastrar()
    });

    it('Escrever nome negocio', () => {
        paginaInicial.escreverNomeNegocio()
    })

    it('Escrever nome ', () => {
        paginaInicial.escreverNome();
    })

    it('Escrever email ', () => {
        paginaInicial.escreverEmail();
    })
    it('Escrever senha ', () => {
        paginaInicial.escreverSenha();
    })

    it('confirmar senha ', () => {
        paginaInicial.escreverConfirmarSenha()
            .then(() => browser.sleep(5000000));
    })


});