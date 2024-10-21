
Cypress.Commands.add('apiLogin', function(){

    cy.request({
        method: 'POST',
        url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login',
        headers: {
        },
        body: {
            "email":"lucasamaral@teste.com",
            "loginPassword": "Pwd123456",
            "loginUser": "lucas"
        }
    }).then (function(response){
        expect(response.status).to.eq(200)
        Cypress.env('token', response.body.statusMessage.token)
        cy.log(Cypress.env('token'))
    })

})


// function login(){

//     const response =  cy.request({
//         method: 'POST',
//         url: 'https://www.advantageonlineshopping.com/catalog/accountrest/api/v1/login',
//         headers: {
//         },
//         body: {
//             "email":"lucasamaral@teste.com",
//             "loginPassword": "Pwd123456",
//             "loginUser": "lucas"
//         }.then (function(response){
//             expect(response.status).to.eq(200)
//             Cypress.env('token', response.body.token)
//         })
//     });
//     return response;
// }

// export default {login}