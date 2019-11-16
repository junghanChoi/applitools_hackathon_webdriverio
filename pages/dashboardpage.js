import Page from "./page";

class DashboardPage extends Page{
    get amountCol(){return $('#amount')}

    /**
     * get low arrays by index
     * @param {Number} name 
     */
    getRowsIndex(index){
        return browser.$$(`#transactionsTable tbody tr td:nth-child(${index})`)
        
    }
    /**
     * 
     * 
     */
    getAmountNumbers(){
        let rows = this.getRowsIndex(5);
        let newRow = Array();
        rows.forEach((e)=>{
            let text = e.getText();
            text = text.replace('USD','').replace(/ /g,'').replace(',','');
            e = parseFloat(text)
            newRow.push(e)
        })
        return newRow
    }


}


export default new DashboardPage()