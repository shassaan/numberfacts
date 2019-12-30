const numberInput = document.querySelector('#number');
const factDiv = document.querySelector('#fact');
const factType = document.querySelector('#factType');
const searchBtn = document.querySelector('#searchBtn');
const monthDiv = document.querySelector('#monthDiv');
const month = document.querySelector('#month');
const divs = document.querySelectorAll('section');


factType.addEventListener('change', () => {
    if (factType.value === "date") {
        monthDiv.style.display = 'block';
        numberInput.value = "";
        numberInput.placeholder = 'Day'
        for (let index = 0; index < divs.length; index++) {
            divs[index].classList.remove('col-md-6')
            divs[index].classList.add('col-md-4')

        }

    } else {
        for (let index = 0; index < divs.length; index++) {
            divs[index].classList.remove('col-md-4')
            divs[index].classList.add('col-md-6')

        }
        monthDiv.style.display = 'none';
        numberInput.placeholder = 'Year,Trivia,Math'

    }
})

searchBtn.addEventListener('click', () => {
    factDiv.style.opacity = "0.3"
    searchBtn.disabled = true;
    searchBtn.innerHTML = "Searching...";
    let url = '';
    if (factType.value === "date") {
        url = `https://numbersapi.com/${month.value}/${numberInput.value}/date?default=No Fact Found.`;
    } else {
        url = `https://numbersapi.com/${numberInput.value}/${factType.value}?default=No Fact Found.`;
    }
    fetch(url, {
        method: "GET",
    }).then(res => res.text().then(data => {
        if (res.ok) {
            factDiv.innerHTML = data;
            factDiv.style.opacity = "4"
            searchBtn.disabled = false;
            searchBtn.innerHTML = "Search Fact";
        } else {
            factDiv.innerHTML = "No Fact Found.";
            factDiv.style.opacity = "4"
            searchBtn.disabled = false;
            searchBtn.innerHTML = "Search Fact";
        }
    })
        .catch(e => {
            factDiv.innerHTML = "Facts will appear here.";
            factDiv.style.opacity = "4"
            searchBtn.disabled = false;
            searchBtn.innerHTML = "Search Fact";
        })
    )


})
