/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

async function fetchGitHubUsers() {
  const response = await fetch('https://api.github.com/users');
  return await response.json();
}
async function updateGitHubUserCount() {
  const usersData = await fetchGitHubUsers();
  const userCountTextElement = document.getElementById('userCountText');
  const userCount = usersData.length;
  userCountTextElement.textContent = `Number of GitHub users: ${userCount}`;
}
function handleButtonClick() {
  updateGitHubUserCount();
}
const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', handleButtonClick);