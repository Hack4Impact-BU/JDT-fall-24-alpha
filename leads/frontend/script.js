function toggle() {
    var element = document.getElementById('hideshow1');
    var buttonElement = document.getElementsByClassName('toggler')[0];
    if (element.style.display == 'none') {
        element.style.display = 'block';
        buttonElement.innerHTML = 'Hide';
    } else {
        element.style.display = 'none';
        buttonElement.innerHTML = 'Show';
    }
}

// This function accepts a user's message and returns a response from the server
async function getResponse (userMessage) { // 'async' keyword is used to define an asynchronous function
    // Wrap the code in a try-catch block to handle errors
    try{
        const ENDPOINT = 'http://localhost:4000/chat'; // Define the endpoint URL

        /**
         * Fetch the response from the server
         * The 'await' keyword pauses the execution of the function until the fetch completes
         */
        const response = await fetch(ENDPOINT, {
            method: 'POST', // Specify the HTTP method
            headers: {
                'Content-Type': 'application/json' // Specify the content type
            },
            body: JSON.stringify({ userMessage }) // Convert the data to a JSON string
        }); 

        // If something goes wrong
        if (!response.ok){
            throw new Error('Oops, something went wrong!'); // Throw an error
        }

        // If all goes well, parse the response JSON and return the response
        const { message } = await response.json();
        return message;
    } 
    // Handle the error
    catch (error){
        console.error(error);
        return 'Oops! Something went wrong.';
    }
}

// grabbing our form element from the DOM
const chatForm = document.querySelector("form");

chatForm.addEventListener('submit', async (event) => { // another 'async' function here
    event.preventDefault(); // prevent the default form submission behavior - page reload

    // Get the user's message from the form
    const formData = new FormData(chatForm);
    const userMessage = formData.get('user-input');

    // Get the chatbot's response
    const response = await getResponse(userMessage);
    
    // Create a new <p> element to display the response
    const responsePara = document.createElement('p');
    responsePara.className = 'chatbot-response';
    responsePara.textContent = response;

    // Create a new <p> element to display the user's message
    const userPara = document.createElement('p');
    userPara.className = 'user-message';
    userPara.textContent = userMessage;
    
    // Append the response to the chat window
    const chatDiv = document.querySelector('#chat');
    chatDiv.appendChild(userPara);
    chatDiv.appendChild(responsePara);
    
    return;
})