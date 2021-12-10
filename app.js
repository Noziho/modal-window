let containerModal = document.getElementById("container");
let a = 0;
let myWindows;
const modalPage = function (DivElement) {

    this.div = DivElement;

    this.createDivElement = () => {
        let createDiv = document.createElement(DivElement);
        createDiv.innerHTML = "Bonjour bienvenue sur ma modal Page !";
        createDiv.id = "modalPage";
        containerModal.append(createDiv);
    }

    this.createButtonElement = (buttonElement, textButton) => {
        a++;
        let createButton = document.createElement(buttonElement);
        createButton.innerHTML = textButton;
        createButton.id = a;
        document.getElementById("modalPage").append(createButton);
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
modalTest.createButtonElement('button', "Close");
modalTest.createButtonElement('button', "Ouvrir une page");
modalTest.createButtonElement('button', "Fermer la page");
modalTest.hideModal();
modalTest.openPage();
modalTest.closePage();