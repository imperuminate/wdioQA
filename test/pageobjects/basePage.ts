module.exports = class basePage{

    open (path) {
        return browser.url(`https://demoqa.com/${path}`)
    }

    

}