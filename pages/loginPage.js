import Page from './page'

class loginPage extends Page{
    open(){
        browser.url('/hackathon.html#')
    }

    get loginHeader(){return $('.auth-header')}

    get input(){return $('#username')}
    get password(){return $('#password')}

    get loginButton(){return $('#log-in')}

    get alert(){return $('.alert.alert-warning')}

    getAlertText(){
            browser.pause(200)
        return this.alert.getText()
    }
    getSns(index){
        return $(`.buttons-w a:nth-child(${index})`)
    }
    getSnsList(){
        return $$(`.buttons-w a`)
    }
    /**
     * 
     * @param {String} id 
     * @param {String} pw 
     */
    setCredential(id, pw){
        this.setUsername(id)
        this.setPassword(pw)
    }

    setUsername(text){
        this.input.click()
        this.input.keys(text)
    }

    setPassword(text){
        this.password.click()
        this.password.keys(text);
    }

    clickLoginButton(){
        this.loginButton.click();
    }

}


export default new loginPage()