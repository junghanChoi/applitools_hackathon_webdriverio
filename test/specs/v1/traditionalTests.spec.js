//const should = chai.should
//const assert = chai.assert
const chai = require('chai')
const should = chai.should
const expect = chai.expect
const assert = chai.assert

import loginPage from '../../../pages/loginPage'
//const loginPage = require('../../../pages/loginPage').default


describe('Traditional way of e2e testing', ()=>{
    //const loginPage = require('../../../pages/loginPage')

    describe('UI elements check', ()=>{
        loginPage.open()
        it('should have placeholders', ()=>{
            expect(loginPage.input.getAttribute('placeholder')).to.equal('Enter your username')
            expect(loginPage.password.getAttribute('placeholder')).to.equal('Enter your password')

            expect(loginPage.loginHeader.getText()).to.equal('Login Form')
            expect(loginPage.getSnsList()).to.have.lengthOf(3)
        })
    })

    describe('Login form tests', ()=>{
        loginPage.open()
        it('empty username and password', ()=>{
            loginPage.clickLoginButton()
            expect(loginPage.getAlertText()).to.equal('Both Username and Password must be present')
        })
        it('only username input and submit', ()=>{
            loginPage.setCredential('babo','')
            loginPage.clickLoginButton()
            expect(loginPage.getAlertText()).to.equal('Password must be present')
            loginPage.input.clearValue()
        })
        it('only password input and sumbit',()=>{
            loginPage.setCredential('','abc')
            loginPage.clickLoginButton()
            expect(loginPage.getAlertText()).to.equal('Username must be present')
        })
    })

    describe('Table sort function', ()=>{
        it('table sort!',()=>{
        loginPage.open()
        loginPage.setCredential('abc','def')
        
        loginPage.clickLoginButton()
        let dashboard = require('../../../pages/dashboardpage').default
        dashboard.amountCol.click()
        let numbers = dashboard.getAmountNumbers();
        numbers.forEach(element => {
            console.log(element)
        });

        var L=numbers.length, i=0, prev;
        while(i<L-1){
            prev = numbers[i];
            console.log("Prev:"+prev+" next:"+ numbers[i+1])
            assert.isTrue(prev<numbers[++i])
        }
        })
    })
})