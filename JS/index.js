const mobileNav = document.querySelector(".mobileNavbarBtn");
const navHeader = document.querySelector('.header');

// navbar collaps JS starts
const toggleNavbar = () => {
    navHeader.classList.toggle("active")
    navHeader.classList.toggle("header1")
};
mobileNav.addEventListener('click', () => toggleNavbar())
// navbar collaps JS ends


// Dark mode JS starts
const toggleDM = document.getElementById('toggleDark')
const body = document.querySelector('body');
const header = document.querySelector('header');


toggleDM.addEventListener('click', function () {
    this.classList.toggle('bi-toggle-on')
})
// Dark mode JS ends


// Contact JS starts
const submit = document.querySelector('.button')
const submitButton = (() => {
    alert("Success!!\nThis is a Sample Contact Form")
})

// Contact JS ends

// Project Js starts
// Creating Javascript code for dynamic projects import
// Create an Object to store the values
projectData = [
    {
        img: "/Images/Digital-clock.png",
        alti: "Digital-clock",
        title: "Digital Clock",
        info: "Basic digital clock Created With the help of HTML CSS and JAVASCRIPT. Has 12 Hours as well as 24 Hours format with an Additional Darkmode feature. It display the Indian Standard Time",
        buttonLink: "https://himanshu-karpe-digital-clock.netlify.com"
    },
    {
        img: "/Images/manipulateyourtext.png",
        alti: "Manipulate Your Text",
        title: "Manipulate Your Text",
        info: "It provides an intuitive and user-friendly interface for editing text documents. With its sleek design and responsive layout, you can easily edit your documents with just a few clicks. Whether you're a writer, student, or professional, this text editor is perfect for all your needs.",
        buttonLink: "https://manipulateyourtext.netlify.app/"
    },
    {
        img: "/Images/coming-soon.gif",
        alti: "Coming-Soon",
        title: "Coming Soon",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo fugiat autem non reiciendis odit ex sit animi obcaecati, aut perferendis, at numquam consectetur repellat sint voluptatibus expedita aliquam! Neque?",
        buttonLink: "https://himanshu-karpe.in"
    },
    {
        img: "/Images/coming-soon.gif",
        alti: "Coming-Soon",
        title: "Coming Soon",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo fugiat autem non reiciendis odit ex sit animi obcaecati, aut perferendis, at numquam consectetur repellat sint voluptatibus expedita aliquam! Neque?",
        buttonLink: "https://himanshu-karpe.in"
    },
    {
        img: "/Images/coming-soon.gif",
        alti: "Coming-Soon",
        title: "Coming Soon",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo fugiat autem non reiciendis odit ex sit animi obcaecati, aut perferendis, at numquam consectetur repellat sint voluptatibus expedita aliquam! Neque?",
        buttonLink: "https://himanshu-karpe.in"
    },
    {
        img: "/Images/coming-soon.gif",
        alti: "Coming-Soon",
        title: "Coming Soon",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo fugiat autem non reiciendis odit ex sit animi obcaecati, aut perferendis, at numquam consectetur repellat sint voluptatibus expedita aliquam! Neque?",
        buttonLink: "https://himanshu-karpe.in"
    },
    {
        img: "/Images/coming-soon.gif",
        alti: "Coming-Soon",
        title: "Coming Soon",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo fugiat autem non reiciendis odit ex sit animi obcaecati, aut perferendis, at numquam consectetur repellat sint voluptatibus expedita aliquam! Neque?",
        buttonLink: "https://himanshu-karpe.in"
    },
    {
        img: "/Images/coming-soon.gif",
        alti: "Coming-Soon",
        title: "Coming Soon",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo fugiat autem non reiciendis odit ex sit animi obcaecati, aut perferendis, at numquam consectetur repellat sint voluptatibus expedita aliquam! Neque?",
        buttonLink: "https://himanshu-karpe.in"
    }

]

// Creating forEach loop to iterate over ever object element in an array
function proj(){

    projectData.forEach((element, indexValue) => {
        // Storing the Values
        const cards = document.querySelector(".cards");
        // Creating a Div inside a variable
        const card = document.createElement('div');
        card.classList = 'card';
        const content = `
        <img class="cardImg" src="${projectData[indexValue].img}" alt="${projectData[indexValue].alti}">
        <div class="card_content">
        <h3 class="cardTitle">${projectData[indexValue].title}</h3>
        <p class="cardInfo">${projectData[indexValue].info}</p>
        </div>
        <a target="_blank" href="${projectData[indexValue].buttonLink}"><button class="cardButton" type="button">Visit</button></a>
        `;
        // Appending the Value to the div
        card.innerHTML += content;
        cards.appendChild(card);
    });
}
// Project Js ends
    

// Education Js starts
// Creating Javascript code for dynamic education cards import
// Create an Object to store the values
educationData = [
    {
        img: "/Images/omkarSchool.jpg",
        alti: "Omkar School",
        title: "Omkar School",
        info: "Completed by school education from Omkar English Medium School(SSC Board Maharashtra) on 2016-17 with 63.60%",
        buttonLink: "https://www.omkarcbse.in/"
    },
    {
        img: "/Images/modelCollege.jpg",
        alti: "Model College",
        title: "Model College",
        info: "Completed by 10+2 education from Model English College(Mumbai Univeristy) on 2018-19 with 73.38%",
        buttonLink: "https://model-college.edu.in/"
        
    },
    {
        img: "/Images/modelCollege.jpg",
        alti: "Model College",
        title: "Model College",
        info: "Completed by B.com Degree from Model English College(Mumbai University) on 2021-22 with A+ and CGPI: 8.44",
        buttonLink: "https://model-college.edu.in/"
        
    },
    {
        img: "/Images/aptech.png",
        alti: "Aptech Learning",
        title: "Aptech Learning",
        info: "Completed by BCA Degree from Aptech Computer Education Learning(Pune University) on 2021-22 with A+ and CGPI: 7.71",
        buttonLink: "https://www.aptechlearning.com/"
        
    }
]

// Creating forEach loop to iterate over ever object element in an array
function education(){

    educationData.forEach((element, indexValue) => {
        // Storing the Values
        const ecards = document.querySelector(".ecards");
        // Creating a Div inside a variable
        const ecard = document.createElement('div');
        ecard.classList = 'ecard';
        const econtent = `
        <img class="ecardImg" src="${educationData[indexValue].img}" alt="${educationData[indexValue].alti}">
        <div class="ecard_content">
        <h3 class="ecardTitle">${educationData[indexValue].title}</h3>
        <p class="ecardInfo">${educationData[indexValue].info}</p>
        <a target="_blank" href="${educationData[indexValue].buttonLink}"><button class="ecardButton" type="button">Visit</button></a>
        </div>
        `;
        // Appending the Value to the div
        ecard.innerHTML += econtent;
        ecards.appendChild(ecard);
    });
}
// Education Js ends

// Skills Js Starts
// Skills Js ends



