const defaultRobotron = document.querySelector('img#robotron');
const robotronColors = [
    'black',
    'blue',
    'pink',
    'red',
    'white',
    'yellow'
];

function changeRobotronColor() {
    let robotronColor = Math.round(Math.random() * 5);
    let robotronImg = `img/robotron/robotron-${robotronColors[robotronColor]}.png`;
    defaultRobotron.setAttribute('src', robotronImg);
}