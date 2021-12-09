Cypress.Commands.add("ValidarHcPayment", function() {

    var paymentSystemInfo = `query paymentSystemInfo{
        paymentSystemInfo{
          name
          version
        }
      }`
    cy.request({
        method: 'POST',
        url: Cypress.env("UrlPayment"),
        body: {
            query: paymentSystemInfo
        },
        headers: {
            'authentication': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwYmFjMzdlNS1iZjhkLTRhYjgtYWQ4Mi1iZTYzMzY5Nzc3ZTQiLCJhdWQiOiIwYjI2ZjEwZi01YjMxLTQ4NjQtYWJmNC02MGFkNmYyNmU1MTUiLCJpYXQiOjE1MTYyMzkwMjIsInVpdCI6IkNVU1RPTUVSIiwianRpIjoiOWJkOWY5N2ItYzlhOS00ZmU4LWE3YjItZmQ4Mjk4Y2NlNDk0In0.DXhLT86GfoPTFlxCgG9U8sscJ_tjw1Y-LCyYm6nDCUA'
        }
    })
})