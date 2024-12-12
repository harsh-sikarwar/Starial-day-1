
let grandchild = document.getElementsByClassName('hvrc');
let box = document.getElementsByClassName('olay');

console.log(grandchild.length);
console.log(box)

for (let i = 0; i < grandchild.length; i++) {
     grandchild[i].addEventListener('mouseenter', () => {
        box[i].classList.add('hovered'); // Add the class when the grandchild is hovered
      });}


for (let i = 0; i < grandchild.length; i++) {
     grandchild[i].addEventListener('mouseleave', () => {
        box[i].classList.remove('hovered'); // Remove the class when the hover ends
      })
}