function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function applique(f, tab) {
    return tab.map(f);
}

//console.log(fact(6));

//applique(fact,[1,2,3,4,5,6]);

//applique(function(n) { return (n+1); } , [1,2,3,4,5,6]);

msgs = [
    { "msg": "Hello World", "date": "2025-03-08 12:30", "pseudo": "Alice" },
    { "msg": "Blah Blah", "date": "2025-03-08 12:35", "pseudo": "Bob" },
    { "msg": "I love cats", "date": "2025-03-08 12:40", "pseudo": "Charlie" }
];

function update(messages) {
    const messagesList = document.getElementById('messagesList');
    messagesList.innerHTML = '';

    messages.forEach(message => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${message.pseudo}</strong> : ${message.msg} <br><small>${message.date}</small>`;
        messagesList.appendChild(listItem);
    });
}

function toggleMode() {
    const body = document.body;
    
    body.classList.toggle('dark');

    const button = document.getElementById('toggleModeButton');
    if (body.classList.contains('dark')) {
        button.textContent = 'Passer en mode clair';
    } else {
        button.textContent = 'Passer en mode sombre';
    }
}
