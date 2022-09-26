const { Given, When, Then } = require ('@wdio/cucumber-framework')

When ('I add {int} and {int}', async (num1, num2)=>{    
    const result = num1 + num2
    this.result = result
    
})

Then('The sum is {int}', async (sum)=>{ 
    expect (this.result).toEqual(sum)

})