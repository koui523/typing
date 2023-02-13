let untyped = '';
let typed = '';
let score = 0;


const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');


const textLists = [
    '<!DOCTYPE html>',
    '<meta name="description" content="">',
    '<meta charset="utf-8">',
    '<head></head>',
    '<body></body>',
    '<header></header>',
    '<main></main>',
    '<footer></footer>',
    '<!---->',
    '<p></p>',
    '<h></h>',
    '<ul></ul>',
    '<ol></ol>',
    '<hr></hr>',
    '<br>',
    '<div></div>',
    '<table></table>',
    '<tr></tr>',
    '<th></th>',
    '<td></td>',
    '<img src="">',
    '<a href=""></a>',
    '<form></form>',
    '<input type="text" placeholder="">',
    '<label></label>',
    '<select></select>',
    '<option></option>',
    '<textarea></textarea>',
    '<input type="radio" name="">',
    '<input type="checkbox">',
    '<form action=""',
    '<input type="submit" value="">',
    '<input type="reset" value="">',
    '<nav></nav>',
    '<article></article>',
    '<section></section>',
    '<audio src="" controls></audio>',
    '<video src="" controls width="" height=""></video>',
    '<details open></details>',
    '<sammary></sammary>',
    '<iframe src="URL" weight="" height=""',
];

const keyPress = e => {

    if (e.key !== untyped.substring(0, 1)) {
        wrap.classList.add('mistyped');

        setTimeout(() => {
            wrap.classList.remove('mistyped');
        }, 100);
        return;
    }

    score++;
    typed += untyped.substring(0, 1);
    untyped = untyped.substring(1);
    typedfield.textContent = typed;
    untypedfield.textContent = untyped;

    if (untyped === '') {
        createText();
    }
};


const createText = () => {

    typed = '';
    typedfield.textContent = typed;

    let random = Math.floor(Math.random() * textLists.length);

    untyped = textLists[random];
    untypedfield.textContent = untyped;
};



const rankCheck = score => {

    let text = '';

    if (score < 100) {
        text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
    } else if (score < 200) {
        text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;
    } else if (score < 300) {
        text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;
    } else if (score >= 300) {
        text = `あなたのランクはSです。\nおめでとうございます!`;
    }

    return `${score}文字打てました!\n${text}\n【OK】リトライ / 【キャンセル】終了`;
};



const timer = () => {

    let time = countdown.textContent;

    const id = setInterval(() => {
        time--;
        countdown.textContent = time;

        if (time <= 0) {
            gameOver(id);
        }
    }, 1000);
};



const gameOver = id => {
    clearInterval(id);

    const result = confirm(rankCheck(score));

    if (result == true) {
        window.location.reload();
    }
};



start.addEventListener('click', () => {

    timer();

    createText();

    start.style.display = 'none';

    document.addEventListener('keypress', keyPress);
});

untypedfield.textContent = '開始';
