
// Budget Controller
var budgetController = (function(){

    var Expense = function(id, description, value){
        this.id = id;
        this.description = descrition;
        this.value = value;
    };
    var Income = function(id, description, value){
        this.id = id;
        this.description = descrition;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }

    };

    return{
        addItem: function(type, des, val){
            var newItem, ID;
            
            // Create new ID
            ID = data.allItems[type][data.allItems[type].length -1].id + 1;

            // Create new item based on 'inc' or 'exp' type
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            }else{
                newItem = new Income(ID,des, val);
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);
            return newItem;

        }
    };
  
})();


// UI Controller
var UIController = (function(){
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    return {
        getInput: function(){
            return{
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
                
            };
        },
        getDOMstrings: function(){
            return DOMstrings;
        }    
        
    };
    

})();


// Global APP controller
var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function(){
        var DOM = UICtrl.getDOMstrings(); 
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event){
    
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    };


    
    var ctrlAddItem = function(){
        // 1. Get the filed input data
        var input = UICtrl.getInput();
        console.log(input);

        // 2. Add the item to the budget controller
        budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI


    };

    return {
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
        }
    };

})(budgetController,UIController);

controller.init();