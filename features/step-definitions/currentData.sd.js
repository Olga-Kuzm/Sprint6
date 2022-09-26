const {defineParameterType, Given, When, Then }= require('@wdio/cucumber-framework')

defineParameterType({
    regexp: /\<([^)]+)\>/,
    name: 'phrase',
    useForSnippets: true,
    transformer(str) {
        return str;
    },

})

When('I transform "{phrase}" string to {string}', (phrase, string)=>{
    this.phrase = phrase;
    this.string = string
})

Then ('I check transformation', ()=>{
    expect (this.phrase).toEqual(this.string)
})