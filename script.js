const timeElement = document.querySelector('[data-testid="currentUTCTime"]');
const newTimeElement= new Date().getTime();
timeElement.textContent=newTimeElement.toString()