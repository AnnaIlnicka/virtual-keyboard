//const line1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
//const line2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&#92;', 'Del'];
//const line3 = ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
//const line4 = ['ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'ShiftRight'];
//const line5 = ['CtrlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', '←', '↓', '→', 'CtrlRight'];


const body = ['96', '49', '50', '51', '52', '53', '54', '55', '56', '57', '48', '45', '61', '8678',
'8644', '113', '119', '101','114', '116', '121', '117', '105', '111', '112', '91', '93', '92', '8592',
'8613', '97', '115', '100', '102', '103', '104', '106', '107', '108', '59', '39', '8629',
 '8679', '47', '122', '120', '99', '118', '98', '110', '109', '46', '44', '47', '9650', '8679',
'10034', '10070', '8896', '8194', '8896', '10034', '9664', '9660', '9658'];



//<form action="/index.html">
//<textarea id="virtual-keyboard" name="virtual-keyboard" rows="4" cols="50">
//At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
//</textarea>
///</form>



//document.onkeydown = function(event){ commit only this part
    //console.log(event);
    //body.push(event.key);
    //console.log(body);
//}




function init(){
    let out = '';
    for (let i = 0; i < body.length; i++){
        if (i==14 || i==29 || i==42 || i==56){
            out +='<div class="clearfix"></div>';
        }
       out +='<div class="v-key">'+String.fromCharCode(body[i])+'</div>';
    }
   document.querySelector('body').innerHTML = out;
}

init();


document.onkeydown = function (event) {

}







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
    const row1 = document.createElement('div');
    row1.className = 'row1';
    keyboard.append(row1);
    const row2 = document.createElement('div');
    row2.className = 'row2';
    keyboard.append(row2);
    const row3 = document.createElement('div');
    row3.className = 'row3';
    keyboard.append(row3);
    const row4 = document.createElement('div');
    row4.className = 'row4';
    keyboard.append(row4);
    const row5 = document.createElement('div');
    row5.className = 'row5';
    keyboard.append(row5);
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