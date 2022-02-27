function loadBuddies() {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displaybuddies(data));
}
loadBuddies();

const displaybuddies = data => {
    // console.log(data);
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for(const buddy of buddies){
        // console.log(buddy.name);
        // console.log(buddy.name.first, buddy.name.last);
        const p = document.createElement('p');
        p.innerText = `
        Name: ${buddy.name.first} ${buddy.name.last} 
        email: ${buddy.email}
        phone: ${buddy.phone}
        `;
        buddiesDiv.appendChild(p);
    }
}

