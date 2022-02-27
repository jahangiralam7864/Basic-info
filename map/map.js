// // button test info
// function myFunction() {
//     document.getElementById('demo').innerHTML = "Hello Bangladesh";
//     // console.log("md jahangir alam");
//   }
// // json object add print
function testPage() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data));
    
}
testPage();


function displayPost(posts) {
    const postContainer = document.getElementById('posts');
    for(const post of posts){
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
        console.log(post);  // kono vabe display te print korty parlam na
    }   
}


function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then( data => displayAlbums(data));
}
loadAlbums();
function displayAlbums(albums) {
    console.log(albums);
    const albumContainer = document.getElementById('albums');
    for(const album of albums){
        const p = document.createElement('p');
        p.innerText = album.title;
        albumContainer.appendChild(p);
    }
}
//  loop kore albums bar korbo
function displayAlbums() {
    const albumContainer = document.getElementById('albums1');
    for(const album of albums1 ){
       const p = document.createElement('p');
       p.innerText =  album.title;
       albumContainer.appendChild(p);
    }
}
















//  ------ ------  //

// // step three
//  for(const number of numbers){
//      const result = doubleOld(number);
//      output.push(result);
//  }
//  console.log(output);

// // map kore kono valu print kora
// const print = numbers.map(x => x * 2);
// console.log(print);

// // const square a valu k array print kora
// const square = numbers.map(x => x * x);
// console.log(square);



const info={ 
    data: [ 
        { 
            language:"Javascript", 
            library:"React" 
        } 
    ] 
}  
console.log(info.data[0].library);