const SELECTORS = {                    
   ACCORDION: '.accordion',           
   BUTTON: '.accordion__button',
   CONTENT: '.accordion__section',
   QUANTITY: '.quantity',           
   INPUT: '[data-counter]',
   DECREASE: '[data-action="decrease"]',
   INCREASE: '[data-action="increase"]'
 };
 
 const STATES = {
   EXPANDED: 'expanded',
   ANIMATED: 'animated',
   COLLAPSED: 'collapsed',
 };
 
 const ANIMATION_CONFIG = {
   duration: 800,
   easing: 'ease-out',
   fill: 'forwards',
 };
 
 class Accordion {
   constructor(node) {
     this.element = node;
     this.button = this.element.querySelector(SELECTORS.BUTTON);
     this.content = this.element.querySelector(SELECTORS.CONTENT);
 
     this.animation = null;
     this.state = STATES.COLLAPSED;
 
     this.button.addEventListener('click', this.toggle.bind(this)); 
   }
 
   toggle() {
     switch (this.state) {
       case STATES.COLLAPSED:
         this.expand();
         break;
       case STATES.EXPANDED:
         this.collapse();
         break;
       default:
        return;
     }
   }

   collapse() {
     this.state = STATES.ANIMATED;
     this._animateContent(true, STATES.COLLAPSED);
     this.button.setAttribute('aria-expanded', 'false');
   }
 
   expand() {
    this.content.removeAttribute('hidden');
     this.state = STATES.ANIMATED;
     this._animateContent(false, STATES.EXPANDED);
     this.button.setAttribute('aria-expanded', 'true');
   }
 
   _animateContent(reverse, endState) {
     const config = ANIMATION_CONFIG;
     config.direction = reverse ? 'reverse' : 'normal';
 
     if (this.animation) {
       this.animation.cancel();
     }
 
     this.animation = this.content.animate(
       {
         minHeight: ['0px',`${this.content.scrollHeight}px`],
         height: ['0px', 'auto'],
         overflow: ['hidden', 'visible'],
       },
       config,
     );
 
     this.animation.addEventListener('finish', () => {
       this.animation = null;
       this.state = endState;
 
       if (endState === STATES.COLLAPSED) {
         this.content.setAttribute('hidden', 'true');
       }
     });
   }
 }
 document.querySelectorAll(SELECTORS.ACCORDION)
 .forEach((accordionEl) => {
   new Accordion(accordionEl);
 });