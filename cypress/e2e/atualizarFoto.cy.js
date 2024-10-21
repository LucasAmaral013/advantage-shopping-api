import atualizarFoto from "../support/atualizarFoto"

before(function () {
    cy.apiLogin()
})

it("Atualizar a foto de um produto", async () =>{
     let response = await atualizarFoto.atualizarFoto()
     expect(response.body.id).equal(14);
     expect(response.body.image_id).to.exist;
     expect(response.status).equal(200);

})

