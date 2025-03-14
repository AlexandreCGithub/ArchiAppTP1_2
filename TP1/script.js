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

const btnToggleModeButton = document.getElementById("toggleModeButton");
const btnUpdateButton = document.getElementById("updateButton");
const btnSendButton = document.getElementById("sendButton");
const btnDeleteButton = document.getElementById("deleteButton");

// get messages from backend: function used each time we need a refresh
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
        .catch(error => {
            console.error('Error fetching messages:', error);
        });
}

// page is loaded
document.addEventListener('DOMContentLoaded', () => {
    fetchMessages();
});

// button update is clicked
btnUpdateButton.addEventListener("click", function(){
    fetchMessages();
});



// button send message is clicked
btnSendButton.addEventListener("click", function(){
    const serviceUrl = getServiceUrl();
    const newMessage = document.getElementById('newMessage').value;
    const pseudo = document.getElementById('pseudo').value;

    if (newMessage.trim() !== '' && pseudo.trim() !== '') {
        const encodedMessage = encodeURIComponent(newMessage);
        const encodedPseudo = encodeURIComponent(pseudo);
        
        const url = serviceUrl + '/msg/post/' + encodedMessage + '?pseudo=' + encodedPseudo + '&date=' + new Date().toISOString();

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.id !== undefined) {
                    console.log('Message envoyé avec succès!');
                    fetchMessages();
                } else {
                    console.error('Erreur lors de l\'envoi du message.');
                    alert('Erreur lors de l\'envoi du message.');
                }
            })
            .catch(error => {
                console.error('Erreur:', error);
                alert('Erreur: ' + error);
            });
    } else {
        console.error('Le pseudo ou le message ne peut pas être vide.');
        alert('Le pseudo ou le message ne peut pas être vide.');
    }
});


// delete a message button is clicked
btnDeleteButton.addEventListener("click", function(){
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
                alert(`Erreur lors de la suppression du message avec ID ${id}.`);
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Erreur: ' + error);
        });
});

// change of light mode
btnToggleModeButton.addEventListener("click", function(){
    const body = document.body;
    
    body.classList.toggle('dark');

    const button = document.getElementById('toggleModeButton');
    if (body.classList.contains('dark')) {
        button.textContent = 'Passer en mode clair';
    } else {
        button.textContent = 'Passer en mode sombre';
    }
});



