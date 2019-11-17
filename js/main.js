$('#exampleModalScrollable').on('show.bs.modal', function (e) {

    const modal = $(this);

    const card = getData(e.relatedTarget.dataset.title);

    console.log(card)

    fillInfo(modal, card);

});



const getData = title => {

    let info = {};

    switch(title) {
        case "compresor-hermetico": 
            info.title = "Compresor hermetico";
            info.body = "Su motor eléctrico se encuentra acoplado directamente al compresor, y ambos dentro de una misma envolvente de acero que forman una unidad. Al ser herméticos no se puede realizar mantenimiento a su interior. Este a su alrededor tiene unos tubos que van soldados a su estructura envolvente, uno va dirigido a la zona de alta, el otro proviene de la zona de baja y el último tiene varias funciones como meter aceite y cargar refrigerante."
            break;
        case "Test":
            info.title = "TESTING";
            info.body = "BODY TEST";
            break;
        default: 
            info.title = "";
            info.body = "";
    }

    return info; 
};


const fillInfo = (modal, card) => {
    modal.find('.modal-title').text(card.title);
    modal.find('.modal-body').text(card.body);
};