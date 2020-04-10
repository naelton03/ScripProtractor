'use strict';

import { ActionHelper } from "../helper/action-helper";
import { by } from "protractor";
import { GenerateData } from "../helper/GenerateData-helper";

const generateData = new GenerateData();
const actionHelper = new ActionHelper();

var senha = 'senhaSite';
export class PaginaInicial {
    constructor() {

        var senha = 'senhaSite';

        this.url = 'http://www.cardappion.com.br/';
        this.btnCadastrar = element(by.css('#navbar-collapse > ul > li:nth-child(3) > a[href="http://www.cardappion.com.br/register"]'));
        this.inputNomeNegocio = element(by.id('tenant'));
        this.inputNome = element(by.id('name'));
        this.inputEmail = element(by.id('email'));
        this.inputPassWord = element(by.id('password'));
        this.confirmarSenha = element(by.id('password-confirm'));

    }



    clickCadastrar() {
        let cadastrarInicial = this;

        return actionHelper.waitAndClickElement(cadastrarInicial.btnCadastrar);

    }

    escreverNomeNegocio(){
        let cadastrarInicial = this;

        return actionHelper.trySendKeys(this.inputNomeNegocio, 'teste');
    }

    escreverNome(){
        let cadastrarInicial = this;

        return actionHelper.trySendKeys(cadastrarInicial.inputNome, 'teste automatizado cardappion');
    }

    escreverEmail(){
        let cadastrarInicial = this;

        return actionHelper.trySendKeys(cadastrarInicial.inputEmail, generateData.getRandomEmail());
    }

    escreverSenha(){
        let cadastrarInicial = this;

        return actionHelper.trySendKeys(cadastrarInicial.inputPassWord, senha );
    }

    escreverConfirmarSenha(){
        let cadastrarInicial = this;

        return actionHelper.trySendKeys(cadastrarInicial.confirmarSenha, senha  );
    }





};

