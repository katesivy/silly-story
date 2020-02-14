const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



function result(newStory) {

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';



let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
    
let newStory = storyText;

newStory = newStory.replace(':insertx:', xItem);
newStory = storyText.replace(':inserty:', yItem);
newStory = storyText.replace(':insertz:', zItem); 
    

let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);
        
randomize.addEventListener('click', result);


  if(customName.value !== '') {
    name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14) + ' stone';
    let temperature =  Math.round((94 - 32) * (5 / 9)) + ' centigrade';
    newStory = storyText.replace('300 pounds', weight);
    newStory = storyText.replace('94 degrees', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

}




