window.addEventListener('load', () => {
    fetchApi();
});

async function fetchApi(){
    const api = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo');
    const json = await api.json();
    users = json.results.map(user => {
        const { name, picture, dob, gender, email, location } = user;
        return {
            name: name.first + ' ' + name.last,
            picture: picture.large,
            age: dob.age,
            gender: gender,
            email: email,
            country: location.country,
            city: location.city
        };
    });
}