const peoples = fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo');

window.addEventListener('load', () => {

    console.log(peoples);

});