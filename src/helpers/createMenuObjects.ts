type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu:MenuOptions) => {
    let objeto_retorno = {
        all:false,
        dog:false,
        cat:false,
        fish:false        
    };

    if (activeMenu !== ''){
        objeto_retorno[activeMenu] = true;
    };

    return objeto_retorno;
}