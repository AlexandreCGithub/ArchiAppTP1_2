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


// SERVER

function getServiceUrl()
{
    return document.getElementById('serviceUrl').value;
}

// get messages from backend: used at the page load and when update is clicked
function fetchMessages() {
    const serviceUrl = getServiceUrl();
    fetch(`${serviceUrl}/msg/getAll`)
        .then(response => response.json())
        .then(data => {
            const messagesList = document.getElementById('messagesList');
            messagesList.innerHTML = '';
            data.messages.forEach((message, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${message.pseudo}: ${message.msg} (${new Date(message.date).toLocaleString()})`;
                messagesList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching messages:', error));
}

// button update is clicked
function update() {
    fetchMessages();
}

// page is loaded
document.addEventListener('DOMContentLoaded', () => {
    fetchMessages();
});

// button post message is clicked
function postMessage() {
    const serviceUrl = getServiceUrl(); 
    const newMessage = document.getElementById('newMessage').value;
    if (newMessage.trim() !== '') {
        fetch(`${serviceUrl}/msg/post/${encodeURIComponent(newMessage)}`)
            .then(response => response.json())
            .then(data => {
                if (data.id !== undefined) {
                    console.log('Message envoyé avec succès!');
                    fetchMessages();
                } else {
                    console.error('Erreur lors de l\'envoi du message.');
                }
            })
            .catch(error => console.error('Erreur:', error));
    }
}

// delete a message
function deleteMessage() {
    const serviceUrl = getServiceUrl(); 
    const id = parseInt(document.getElementById('messageId').value, 10);
    fetch(`${serviceUrl}/msg/del/${id}`)
        .then(response => response.json())
        .then(data => {
            if (data.code === 0) {
                console.log(`Message avec ID ${id} supprimé avec succès.`);
                fetchMessages();
            } else {
                console.error(`Erreur lors de la suppression du message avec ID ${id}.`);
            }
        })
        .catch(error => console.error('Erreur:', error));
}

// change of light mode
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



