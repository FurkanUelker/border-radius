let rect = document.querySelector('.rect');

let top_left_input = document.querySelector('#top-left');
let top_right_input = document.querySelector('#top-right');
let bottom_left_input = document.querySelector('#bottom-left');
let bottom_right_input = document.querySelector('#bottom-right');
let copyBtn = document.querySelector('.copy-button');

let top_left_value, top_right_value, bottom_left_value, bottom_right_value;

top_left_input.onchange = () => {
    top_left_value = top_left_input.value;
    rect.style.borderTopLeftRadius = `${top_left_value}px`;

    console.log(`${top_left_value}px`);
}

top_right_input.onchange = () => {
    top_right_value = top_right_input.value;
    rect.style.borderTopRightRadius = `${top_right_value}px`;

    console.log(`${top_right_value}px`);
}

bottom_left_input.onchange = () => {
    bottom_left_value = bottom_left_input.value;
    rect.style.borderBottomLeftRadius = `${bottom_left_value}px`;

    console.log(`${bottom_left_value}px`);
}

bottom_right_input.onchange = () => {
    bottom_right_value = bottom_right_input.value;
    rect.style.borderBottomRightRadius = `${bottom_right_value}px`;

    console.log(`${bottom_right_value}px`);
}

function copyStringToClipboard (str) {
    let el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
 }

copyBtn.onclick = () => {
    let borderRadius = `border-radius: ${top_left_value}px ${top_right_value}px ${bottom_right_value}px ${bottom_left_value}px;`;
    copyStringToClipboard(borderRadius);
    console.log(borderRadius);
}


