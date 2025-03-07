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
    { "msg" : "Hello World" },
    { "msg" : "Blah Blah" },
    { "msg" : "I love cats" }
  ];

function update(messages) {
    const messagesList = document.getElementById('messagesList');
    
    messagesList.innerHTML = '';

    messages.forEach(message => {
        const listItem = document.createElement('li');
        listItem.textContent = message.msg;
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
