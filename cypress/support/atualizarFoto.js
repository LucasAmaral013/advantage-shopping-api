function atualizarFoto() {

    const response =  cy.request({
        method: 'POST',
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/748704368/fone.jpeg/yellow?product_id=14',
        form: true,
        headers: {
            Authorization: 'Bearer ' + Cypress.env('token'),
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: {
        }
    });
    return response;
}



function img(){

    cy.request({
        url:'https://cdn.sistemawbuy.com.br/arquivos/965bec97633d2ff47fb53e70cb483da6/produtos/66390f6a2f209/6941055163163-90-663a079a92ccc.jpg',
        enconding: 'base64',
    }).then((response) => {
        const base64Content = response.body
        const mime = response.headers['content-type'] 
        const imageDataUrl = `data:${mime};base64,${base64Content}`
    })

}

export default {atualizarFoto}

