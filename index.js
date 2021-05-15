setTimeout(func, 1000);

function func() {
    let metatagDescription = document.getElementsByTagName('meta')[3];
    let metatagKeywords = document.getElementsByTagName('meta')[4];
    let hOne = document.querySelector('h1');

    metatagDescription.content = result.page_meta.meta_description;
    metatagKeywords.content = result.page_meta.meta_keywords;
    document.title = result.page_meta.title;
    hOne.innerText = result.page_meta.h1;

    let footer = document.getElementById('foote');
    let inform1 = document.createElement(result.page_text[0].tag);
    inform1.innerText = result.page_text[0].content
    let inform2 = document.createElement(result.page_text[1].tag);
    inform2.innerText = result.page_text[1].content
    let inform3 = document.createElement(result.page_text[2].tag);
    inform3.innerText = result.page_text[2].content
    footer.appendChild(inform1);
    footer.appendChild(inform2);
    footer.appendChild(inform3);



    for (let i = 1; i < 7; i++) {
        let img1 = document.getElementsByTagName('img')[i];
        img1.src = "src/images/" + i + ".jpg";
    }

    for (let i = 0; i < 6; i++) {
        let nameCar = document.getElementsByClassName('nameCar')[i];
        nameCar.innerText = result.stock[i].model
    }

    for (let i = 0; i < 6; i++) {
        let prices = document.getElementsByClassName('prices')[i];
        prices.innerText = "€ " + result.stock[i].price;
    }

    for (let i = 0; i < 6; i++) {
        let years = document.getElementsByClassName('year')[i];
        years.innerText = result.stock[i].year;
    }

    for (let i = 0; i < 6; i++) {
        let mileages = document.getElementsByClassName('mileage')[i];
        mileages.innerText = result.stock[i].mileage + " km";
    }

    for (let i = 0; i < 6; i++) {
        let axle = document.getElementsByClassName('axle_configuration')[i];
        axle.innerText = result.stock[i].axle_configuration;
    }

    for (let i = 0; i < 6; i++) {
        let texts = document.getElementsByClassName('text')[i];
        texts.innerText = " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et porro error quibusdam doloribus sequi distinctio, nihil perferendis voluptate, eum consectetur nesciunt placeat reprehenderit architecto harum. Veritatis aperiam maiores dolorum harum.";
    }

    for (let i = 0; i < 4; i++) {
        let navigations = document.getElementsByTagName('a')[i];
        navigations.innerText = result.nav[i].text;
        navigations.href = result.nav[i].href;
    }

    for (let i = 4; i < 7; i++) {
        let breadcrumb = document.getElementsByTagName('a')[i];
        breadcrumb.innerText = result.breadcrumbs[i - 4].text;
        breadcrumb.href = result.breadcrumbs[i - 4].href;
    }

    // let logos = document.getElementById('logoFooter');
    // logos.innerText = result.page_meta.h1;

}