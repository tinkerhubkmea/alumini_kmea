const product = [
    {
        id: 0,
        image: 'image/gg-1.jpg',
        name: 'Name',
        about: 'about',
    },
    {
        id: 1,
        image: 'image/hh-2.jpg',
        name: 'killjoy',
        about: 'about',
    },
    {
        id: 2,
        image: 'image/ee-3.jpg',
        name: 'ness',
        about: 'about',
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        name: 'name',
        about: 'about',
    },
    {
        id: 4,
        image: 'image/bb-1.jpg',
        name: 'name',
        about: 'about',
    },
    {
        id: 5,
        image: 'image/cc-1.jpg',
        name: 'name',
        about: 'about',
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.name.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, name, about } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${name}</p>
                    <h2> ${about}</h2>
                <button>View More</button>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);
var navLinks = document.getElementById("navLinks");
        function showMenu(){
            navLinks.style.right = "-90px";
        }
        function hideMenu(){
            navLinks.style.right ="-285px";
        }

