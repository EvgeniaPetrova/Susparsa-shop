class Quantity {
    constructor(node) {
        this.element = node;
        this.input = this.element.querySelector(SELECTORS.INPUT);
        this.decreaseBtn = this.element.querySelector(SELECTORS.DECREASE);
        this.increaseBtn = this.element.querySelector(SELECTORS.INCREASE);
        
        this.decreaseBtn.addEventListener('click', this.decrease.bind(this)); 
        this.increaseBtn.addEventListener('click', this.increase.bind(this)); 
        this.input.addEventListener('change', this.change.bind(this)); 
    }

    decrease() {
        if (+this.input.value === 2) {
            this.input.value = --this.input.value;
            this.decreaseBtn.setAttribute("disabled", "disabled")
       } else if (+this.input.value > 1) {
            this.input.value = --this.input.value;
       }
    }
    increase() {
       if (+this.input.value === 1) {
            this.input.value = ++this.input.value;
            this.decreaseBtn.removeAttribute("disabled")
       } else if (+this.input.value >= 2) {
            this.input.value = ++this.input.value;
       }
    }
    change() {
        if (+this.input.value === 1) {
            this.decreaseBtn.setAttribute("disabled", "disabled")
       } else if (+this.input.value > 1) {
            this.decreaseBtn.removeAttribute("disabled")
        } 
    }
}
 document.querySelectorAll(SELECTORS.QUANTITY)
 .forEach((quantityEl) => {
   new Quantity(quantityEl);
 });
