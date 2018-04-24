function init() {
    // -------------------DROP DOWN MENU

    const liFirma = document.querySelector('.firma');
    const liGaleria = document.querySelector('.galeria');
    const liKontakt = document.querySelector('.kontakt');

    const ulFirmaDropdown = liFirma.querySelector('.dropdown');
    const ulGaleriaDropdown = liGaleria.querySelector('.dropdown');
    const ulKontaktDropdown = liKontakt.querySelector('.dropdown');

    function showMenu(e) {
        if (e.target.className === 'firma' || e.target.parentNode.className === 'firma') {
            ulFirmaDropdown.style.display = 'block';
        }
        else if (e.target.className === 'galeria' || e.target.parentNode.className === 'galeria') {
            ulGaleriaDropdown.style.display = 'block';
        }
        else if (e.target.className === 'kontakt' || e.target.parentNode.className === 'kontakt') {
            ulKontaktDropdown.style.display = 'block';
        }
    }

    function hideMenu(e) {
        ulFirmaDropdown.style.display = 'none';
        ulGaleriaDropdown.style.display = 'none';
        ulKontaktDropdown.style.display = 'none';
    }

    liFirma.addEventListener('mouseover', showMenu);
    liFirma.addEventListener('mouseout', hideMenu);

    liGaleria.addEventListener('mouseover', showMenu);
    liGaleria.addEventListener('mouseout', hideMenu);

    liKontakt.addEventListener('mouseover', showMenu);
    liKontakt.addEventListener('mouseout', hideMenu);

    //-------------- KONIEC DROPDOWN MENU

    //-------------- Ukrywanie napisów na zdjeciach w sekcji DWA

    const chairClair = document.querySelector('.secondSection article:first-child');
    const chairMargarita = document.querySelector('.secondSection article:nth-child(2)');

    const chairClairDiv = chairClair.querySelector('div');
    const chairMargaritaDiv = chairMargarita.querySelector('div');

    function hideBackground(e) {
        if (e.target === chairClair) {
            chairClairDiv.style.display = 'none';
        } else if (e.target === chairMargarita) {
            chairMargaritaDiv.style.display = 'none';
        }
    }

    function showBackground() {
        chairClairDiv.style.display = 'block';
        chairMargaritaDiv.style.display = 'block';
    }

    chairClair.addEventListener('mouseover', hideBackground);
    chairClair.addEventListener('mouseout', showBackground);

    chairMargarita.addEventListener('mouseover', hideBackground);
    chairMargarita.addEventListener('mouseout', showBackground);

    //-------------- KONIEC Ukrywanie napisów na zdjeciach w sekcji DWA

    //-------------- SLIDER

    const nextBtn = document.querySelector('.more');
    const prevBtn = document.querySelector('.less');
    const liElements = document.querySelectorAll('.slider li');

    var count = 0;

    liElements[0].classList.add('visible');

    function showNext() {
        liElements[count].classList.remove('visible');
        count++;
        if (count >= liElements.length) {
            count = 0;
        }
        liElements[count].classList.add('visible');
    }

    function showPrev() {
        liElements[count].classList.remove('visible');
        count--;
        if (count < 0) {
            count = liElements.length - 1;
        }
        liElements[count].classList.add('visible');
    }


    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    //-------------- SLIDER END

    //-------------- APPLICATION START

        //dropdown list

    const formBtn = document.querySelectorAll('section.choice_part div.form span.list_arrow');

    function toggleList() {
        const ul = this.nextElementSibling;
        ul.classList.toggle('hidden');
    }


    for (var i = 0; i < formBtn.length; i++) {
        formBtn[i].addEventListener('click', toggleList)
    }

        // END dropdown list

        // pick options

    const liChairType = document.querySelectorAll('ul#chairType li');
    const liColorType = document.querySelectorAll('ul#colorType li');
    const liMaterialType = document.querySelectorAll('ul#materialType li');
    const checkboxTransport = document.querySelector('input#transport');

    const summaryChairType = document.querySelector('div.summary_panel h4');
    const summaryColorType = document.querySelector('div.summary_panel span.color');
    const summaryMaterialType = document.querySelector('div.summary_panel span.pattern');
    const summaryTransport = document.querySelector('div.summary_panel span.transport');

    const valueChairType = document.querySelector('div.summary_panel h4.value');
    const valueColorType = document.querySelector('div.summary_panel span.color.value');
    const valueMaterialType = document.querySelector('div.summary_panel span.pattern.value');
    const valueTransport = document.querySelector('div.summary_panel span.transport.value');

    var sum = document.querySelector('div.sum strong');

    sum.dataset.typeValue = '0';
    sum.dataset.colorValue = '0';
    sum.dataset.materialValue = '0';
    sum.dataset.transportValue = '0';

    var chairType;
    var colorType;
    var materialType;

    function pickOption1() {
        chairType = this.textContent;
        summaryChairType.textContent = 'Chair ' + chairType;
        valueChairType.textContent = this.dataset.price;
        sum.dataset.typeValue = this.dataset.price;
        sum.textContent = parseInt(sum.dataset.typeValue) + parseInt(sum.dataset.colorValue) + parseInt(sum.dataset.materialValue) + parseInt(valueTransport.dataset.transportPrice);
        const ul = this.parentElement;
        ul.classList.toggle('hidden');
    }
    function pickOption2() {
        colorType = this.textContent;
        summaryColorType.textContent = colorType;
        valueColorType.textContent = this.dataset.price;
        sum.dataset.colorValue = this.dataset.price;
        sum.textContent = parseInt(sum.dataset.typeValue) + parseInt(sum.dataset.colorValue) + parseInt(sum.dataset.materialValue) + parseInt(valueTransport.dataset.transportPrice);
        const ul = this.parentElement;
        ul.classList.toggle('hidden');
    }
    function pickOption3() {
        materialType = this.textContent;
        summaryMaterialType.textContent = materialType;
        valueMaterialType.textContent = this.dataset.price;
        sum.dataset.materialValue = this.dataset.price;
        sum.textContent = parseInt(sum.dataset.typeValue) + parseInt(sum.dataset.colorValue) + parseInt(sum.dataset.materialValue) + parseInt(valueTransport.dataset.transportPrice);
        const ul = this.parentElement;
        ul.classList.toggle('hidden');
    }

    for(var i = 0; i < liChairType.length; i++) {
        liChairType[i].addEventListener('click', pickOption1);
    }
    for(var i = 0; i < liColorType.length; i++) {
        liColorType[i].addEventListener('click', pickOption2);
    }
    for(var i = 0; i < liMaterialType.length; i++) {
        liMaterialType[i].addEventListener('click', pickOption3);
    }


    function checkBox() {
        if (summaryTransport.textContent == '') {
            summaryTransport.textContent = 'transport';
            valueTransport.dataset.transportPrice = checkboxTransport.dataset.transportPrice;
            valueTransport.textContent = valueTransport.dataset.transportPrice
            sum.textContent = parseInt(sum.dataset.typeValue) + parseInt(sum.dataset.colorValue) + parseInt(sum.dataset.materialValue) + parseInt(valueTransport.dataset.transportPrice);
        } else if (summaryTransport.textContent == 'transport') {
            summaryTransport.textContent = '';
            valueTransport.textContent = '';
            valueTransport.dataset.transportPrice = 0;
            sum.textContent = parseInt(sum.dataset.typeValue) + parseInt(sum.dataset.colorValue) + parseInt(sum.dataset.materialValue) + parseInt(valueTransport.dataset.transportPrice);
        }
    }


    checkboxTransport.addEventListener('click', checkBox);


    // END pick options

    //---------------- APPLICATION END

}

document.addEventListener('DOMContentLoaded', init);