"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObject = void 0;
const createMenuObject = (activeMenu) => {
    let objeto_retorno = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };
    if (activeMenu !== '') {
        objeto_retorno[activeMenu] = true;
    }
    ;
    return objeto_retorno;
};
exports.createMenuObject = createMenuObject;
