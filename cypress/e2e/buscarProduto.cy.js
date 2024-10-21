import buscarProduto from "../support/buscarProduto"

it("Realizar a busca por um produto", async () =>{
  let response = await buscarProduto.buscarProduto('HP ELITE X2 1011 G1 TABLET')
  expect(response.status).equal(200);
  expect(response.body[0].products[0].productName).equal('HP Elite x2 1011 G1 Tablet')
  expect(response.body).length(1)
})