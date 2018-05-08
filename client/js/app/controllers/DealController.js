class DealController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputValue = $('#value');
        this._dealsList = new DealsList();
        
        this._dealView = new DealView($('#negociacoesView'));
        this._dealView.update(this._dealsList);
        
        this._message= new Message();
        this._messageView = new messageView($('#messageView'));
        this._messageView.update(this._message);
        
    }
    
    add(event) {
        
        event.preventDefault();
        this._dealsList.add(this._createDeal());
        this._dealView.update(this._dealsList);
        
        this._message.text = 'Negociação addda com sucesso';
        this._messageView.update(this._message);
        
        this._clearForm();   
    }
    
    _createDeal() {
        
        return new Deal(
            DateHelper.textoParaData(this._inputDate.value),
            this._inputQuantity.value,
            this._inputValue.value);    
    }
    
    _clearForm() {
     
        this._inputDate.value = '';
        this._inputQuantity.value = 1;
        this._inputValue.value = 0.0;
        this._inputDate.focus();   
    }
}