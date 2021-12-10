let containerModal = document.getElementById("container");
let a = 0;
let myWindows;
const modalPage = function (DivElement) {

    this.div = DivElement;

    this.createDivElement = () => {
        let createDiv = document.createElement(DivElement);
        createDiv.id = "modalPage";
        containerModal.append(createDiv);
    }

    this.createP = (text) => {
        let createP = document.createElement("p");
        createP.innerHTML = text;
        document.getElementById("modalPage").append(createP);
    }

    this.createHeader = (headerElement) => {
        let createHeader = document.createElement(headerElement);
        createHeader.style.width = "100%";
        createHeader.style.height = "5rem";
        createHeader.style.background = "rgba(67, 170, 178, 0.41)";
        createHeader.style.borderRadius = "12px 12px 0 0";
        document.getElementById("modalPage").prepend(createHeader);
    }


    this.createButtonElement = (buttonElement, textButton) => {
        a++;
        let createButton = document.createElement(buttonElement);
        createButton.innerHTML = textButton;
        createButton.id = a;
        createButton.style.borderRadius = "12px";
        createButton.style.borderColor = "#43aab2"
        createButton.style.background = "#43aab2"
        createButton.style.marginTop = "14rem"
        document.getElementById("modalPage").append(createButton);
    }

    this.createFooter = (footerElement) => {
        let createFooter = document.createElement(footerElement);
        createFooter.style.width = "100%";
        createFooter.style.height = "5rem";
        createFooter.style.background = "rgba(67, 170, 178, 0.41)";
        createFooter.style.marginTop = "2.7rem";
        createFooter.style.borderRadius = "0 0 12px 12px";
        document.getElementById("modalPage").append(createFooter);
    }


    this.hideModal = () => {
        document.getElementById('1').addEventListener('click', () => {
            containerModal.style.display = "none";
        })
    }

    this.openPage = () => {
        document.getElementById('2').addEventListener('click', () => {
            let features = "width=400px, height=400px";
            myWindows = window.open("https://google.com", '', features);
            myWindows.moveTo(1100, 200);
        })
    }

    this.closePage = () => {
        document.getElementById('3').addEventListener('click', () => {
            myWindows.close();
        })
    }


}

let modalTest = new modalPage('div');

modalTest.createDivElement();
modalTest.createP("Ma modal page !");
modalTest.createHeader('header');
modalTest.createButtonElement('button', "Close");
modalTest.createButtonElement('button', "Ouvrir une page");
modalTest.createButtonElement('button', "Fermer la page");
modalTest.createFooter('footer');
modalTest.hideModal();
modalTest.openPage();
modalTest.closePage();