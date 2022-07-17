const sideBadge = document.querySelector('.chat-widget__side')
sideBadge.addEventListener('click', onClick = () => {
    const chat = document.querySelector('.chat-widget');
    chat.className += ' chat-widget_active';
});

function onKey(e) {
    input = document.getElementById('chat-widget__input');
    if (e.key === 'Enter' && input.value) {
    
        const messages = document.querySelector( '.chat-widget__messages' );
        // добавит
        now = new Date().toLocaleTimeString();

        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">` + now + `</div>
            <div class="message__text">` + 
            input.value +
            `</div>
        </div>
        `;
        input.value = '';

        replyList = ['Я занят, не мешай работать',
            'Тебе не ответят в течение 234 дней',
            'Ничем не могу помочь',
            'Пошел нафиг',
            'Не пиши мне больше']

        var rand = Math.floor(Math.random()*replyList.length);
        var rValue = replyList[rand];

        messages.innerHTML += `
        <div class="message">
            <div class="message__time">` + now + `</div>
            <div class="message__text">` + 
            rValue +
            `</div>
        </div>
        `;

    }
}

document.addEventListener('keyup', onKey)