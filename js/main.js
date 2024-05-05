let body_tag = document.getElementsByTagName('body');
let theme = document.querySelector('.theme');
let green_theme = document.querySelector('.green-theme');

let btn_change_theme = document.querySelector('.btn-change-theme');


///change between card-items
let card_item = document.querySelectorAll('.card-item');

console.log(card_item);
card_item.forEach((item, index) => {
    item = card_item[index];
    item.onmouseover = function () {
        console.log(item);

        document.querySelector('.card-item.card-active').classList.remove('card-active');
        item.style.transition = `all linear .3s`;

        item.classList.add('card-active');

    }
});

//change color theme
btn_change_theme.onclick = function changeThemeColor() {
    if (body_tag[0].classList.contains('green-theme')) {
      console.log('green theme ok');
      body_tag[0].classList.remove('green-theme');
    } else {
        console.log('not green theme');
        console.log(theme);
        console.log(body_tag);
      body_tag[0].classList.add('green-theme');

    }

}