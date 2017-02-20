/**
  * Arrow functions
 */

var names = ['james','adam', 'julius'];

names.forEach(function(name) {
   console.log('forEach',name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach( (name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('James'));

var person = {
    name: 'jon',
    greet: function () {
       names.forEach( (name) => {
           console.log(this.name + ' says fuck you to ' + name);
       }) 
    }
};

person.greet();