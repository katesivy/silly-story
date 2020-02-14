const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
    
newStory = storyText.replace(':insertx:', insertX);
newStory[0];
newStory[1];
newStory[2]; 
/*newStory = storyText.replace(':inserty:', insertY[0, 1, 2]);
newStory = storyText.replace(':insertz:', insertZ[0. 1, 2]); */
    
        
randomize.addEventListener('click', result);

function result() {
let newStory = storyText;
let xItem = randomValueFromArray;
let yItem = randomValueFromArray;
let zItem = randomValueFromArray;
}

randomValueFromArray(insertX);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14) + ' stone';
    let temperature =  Math.round((94 - 32) * (5 / 9)) + ' centigrade';
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 degrees', temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}



