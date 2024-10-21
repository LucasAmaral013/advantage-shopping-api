function buscarProduto() {

    const response =  cy.request({
        method: 'GET',
        url: 'www.advantageonlineshopping.com/catalog/api/v1/products/search?name=hp elite x2',
        headers: {
        },
        body: {

        }
    });
    return response;
}

export default {buscarProduto}