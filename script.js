const body = ['96', '49', '50', '51', '52', '53', '54', '55', '56', '57', '48', '45', '61', '8678',
'8644', '113', '119', '101','114', '116', '121', '117', '105', '111', '112', '91', '93', '92', '8592',
'8613', '97', '115', '100', '102', '103', '104', '106', '107', '108', '59', '39', '8629',
 '8679', '47', '122', '120', '99', '118', '98', '110', '109', '46', '44', '47', '9650', '8679',
'10034', '10070', '8896', '8194', '8896', '10034', '9664', '9660', '9658'];

function init(){
    let out = '';
    for (let i = 0; i < body.length; i++){
        if (i==14 || i==29 || i==42 || i==56){
            out +='<div class="clearfix"></div>';
        }
       out +='<div class="v-key" id="v-key" data="'+ body[i] +'" >'+ String.fromCharCode (body[i]) + '</div>';
    }
   document.querySelector('body').innerHTML = out;
}

init();


document.onkeydown = function (event) {
console.log(event.code);
console.log(event.key);
document.querySelectorAll('body .v-key').forEach(function(element){
    element.classList.remove('active');
});
document.querySelector('body .v-key[data="' + event.key + '"]') .classList.add ('active');
}

document.querySelectorAll('body .v-key').forEach(function(element){
    element.onclick = function(event){
        document.querySelectorAll('body .v-key').forEach(function(element){
            element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
        console.log(code);
    }
});


function getBody() {
    const container = document.createElement('div');
    container.className = 'container';
    document.body.append(container);
    const p = document.createElement('p');
    p.className = 'title';
    p.innerHTML = 'Виртуальная клавиатура';
    container.prepend(p);
    const text = document.createElement('textarea');
    text.className = 'textarea';
    container.append(text);
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    container.append(keyboard);
    const description = document.createElement('p');
    description.className = 'description';
    description.innerHTML = 'Клавиатура создана для операционной системы Windows';
    container.append(description);
    const language = document.createElement('p');
    language.className = 'language';
    language.innerHTML = 'Для переключения языка используйте комбинацию: зажать Ctrl + Alt';
    container.append(language);
  }
  
  getBody();