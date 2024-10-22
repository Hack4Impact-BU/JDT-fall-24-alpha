async function getResponse (userMessage) {
    try {
        const ENDPOINT = "http://localhost:4000/chat";

        const response = await fetch(ENDPOINT, {
            method: 'POST',
            body: JSON.stringify({ userMessage })
        })

        if (!response.ok){
            throw new Error('Oops, something went wrong :(');
        }

        const { message } = await response.json();
        return message;
    } catch (error) {
        console.log(error);
        return error.message;
    }
}

const chatForm = document.querySelector('form');

chatForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(chatForm);
    const userMessage = formData.get('user-input');

    const responseMessage = await getResponse(userMessage);

    const responsePara = document.createElement('p');

    const userPara = document.createElement('p');
    userPara.textContent = userMessage;
    responsePara.textContent = responseMessage;

    const chatDiv = document.getElementById('chat');
    chatDiv.appendChild(userPara);
    chatDiv.appendChild(responsePara);
    
    return;
})