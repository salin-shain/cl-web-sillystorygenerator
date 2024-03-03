const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
let arr1 = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let arr2 = ['the soup kitchen', 'Disneyland', 'the White House'];
let arr3 = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
randomize.addEventListener('click', result);

function result() {
  let name = 'BOB'
  if(customName.value !== '') {
    name = customName.value;

  }
  let weight = 200;
  let temperature = 92;
  if(document.getElementById("uk").checked) {
    weight = Math.round(300);
    temperature =  Math.round(94);

  }

  let str = `It was ${temperature} fahrenheit outside, so ${randomValueFromArray(arr1)} went for a walk. When they got to ${randomValueFromArray(arr2)}, they stared in horror for a few moments, then ${randomValueFromArray(arr3)}. ${name} saw the whole thing, but was not surprised — ${randomValueFromArray(arr1)} weighs ${weight} pounds, and it was a hot day.`

  story.textContent = str;
  story.style.visibility = 'visible';
}