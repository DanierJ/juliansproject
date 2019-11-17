$('#exampleModalScrollable').on('show.bs.modal', function (e) {
    console.log(e.relatedTarget.dataset.title);

    const modal = $(this);

    const card = getData(e.relatedTarget.dataset.title);

    fillInfo(modal, card);

});



const getData = title => {

    let info = {};

    switch(title) {
        case "Messi": 
            info.title = "Messi";
            info.body = "Messi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni a, aspernatur illo vel quos commodi quas vero blanditiis nulla expedita corporis, possimus sint similique id incidunt sequi, eius optio dolores recusandae. Reiciendis rem ab nihil officia reprehenderit inventore dolorum quisquam adipisci. Deleniti a optio odio placeat quod inventore alias iste esse autem earum omnis perferendis, eos eum quia culpa nihil nisi voluptatibus asperiores? Qui laudantium ex dicta inventore dolore, sint aut error! A, unde impedit error dolor ab ipsa, exercitationem, quidem at inventore minima eligendi facere iusto minus nemo porro totam consequuntur vitae. Impedit nobis hic aut aperiam error quam, quo voluptatum cumque placeat, repellat porro fuga nulla dolores provident quod similique nisi obcaecati. Quia, assumenda molestias. Deleniti vero ea labore repellat corporis distinctio sapiente esse delectus, molestias, et tempore? Minus quae omnis nihil debitis aspernatur cupiditate fugiat quidem, distinctio dolores quod fugit! Fugit eligendi eaque, accusamus itaque et quam dignissimos velit tempora maxime natus, ea excepturi quaerat ipsam! Voluptatum illo temporibus excepturi quis, eaque dolorem nemo consequuntur mollitia sunt nesciunt nihil. Natus eligendi temporibus quidem odio ex. Corporis dolor impedit facere id. Alias magnam corporis voluptatem sed laboriosam aperiam aliquid tenetur incidunt explicabo, tempora sint! Possimus nostrum sint optio!"
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