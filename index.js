const API_KEY = "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";
const submitButton = document.querySelector('#submit')
const outPutElement = document.querySelector('#output')
const inputElement = document.querySelector('input')
const historyElement = document.querySelector('.history')
const buttonElement = document.querySelector('button')

function chandeInput(value){
    const inputElement = document.querySelector('input')
    inputElement.value = value
}
async function getMessage() {
    console.log('clicked')
    const options = {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${API_KEY}`,
                            "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                model: "gpt-3.5-turbo",
                                messages: [{role: "user", content: "hello!"}],
                                max_tokens: 100
                            })
                        }
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        outPutElement.textContent = data.choices[0].message.content
        if (data.choices[0].message.content && inputElement.value) {
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.value
            pElement.addEventListener('click', () => chandeInput())
            historyElement.append(pElement)
        }
    } catch (error){
        console.error(error)
    }
}

submitButton.addEventListener('click', getMessage)


function clearInput(){
    inputElement.value =''
}

buttonElement.addEventListener('click', clearInput)





// const chatInput = document.querySelector(".chat-input textarea");
// const sendChatBtn = document.querySelector("#send-btn");
//  const chatbox = document.querySelector(".chatbox");

// let userMessage;
// const API_KEY = "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";

// const createChatLi = (message, className) => {
//     const chatLi = document.createElement("li");
//     chatLi.classList.add("chat", className);
//     let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class= "material-symbols-outlined"><i class="fa-solid fa-robot"></i></span><p>${message}</p>`;
//     chatLi.innerHTML = chatContent;
//     //     chatLi.querySelector("p").textContent = message;
//      return chatLi;
// }


// const generateResponse = async () =>{
//     const API_URL = "https://api.openai.com/v1/chat/completions";
//     const requestOptions = {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${API_KEY}`
//                     },
//                     body: JSON.stringify({
//                         model: "gpt-3.5-turbo",
//                         messages: [{role: "user", content: userMessage}],
//                         max_tokens: 2048
//                     })
//             } 
//             fetch (API_URL, requestOptions).then(res => res.json()).then(data => {
//                 console.log(data);
//             }).catch((error) =>{
//                 console.log(error);
//             })
// }



// const handleChat = () => {
//     userMessage = chatInput.value.trim();
//     if(!userMessage) return;

//     // createChatLi(userMessage, " outgoing");
//     // chatInput.value = "";


//     chatbox.appendChild(createChatLi(userMessage, "outgoing"));
//     // chatInput.scrollTo(0, chatbox.scrollHeight);

//     setTimeout(() => {
//         chatbox.appendChild(createChatLi("Thinking...", "incoming"));
//     //     chatbox.appendChild(incomingChatLi);
//         generateResponse();
//     }, 600);
// }
//     sendChatBtn.addEventListener("click", handleChat);


// const chatbotToggler = document.querySelector(".chatbot-toggler")

// let userText = '';
// const API_KEY = "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";

// const createElement = (html, className) => {
//     const chatDiv = document.createElement("li");
//     chatDiv.classList.add("chat", className);
//     let chatContent = className === "outgoing"  ? `<p>${html}</p>` : `<span class="material-symbols-outlined"><i class="fa-solid fa-robot"></i></span><p>${html}</p>`;
//     chatDiv.innerHTML = chatContent;
//     return chatDiv;
// }
// const pElement = document.createElement("p");
// async function getChatResponse(){
//     console.log('clicked')
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${API_KEY}`
//             },
//             body: JSON.stringify({
//                 model: "gpt-3.5-turbo",
//                 messages: [{role: "user", content: userText}],
//                 max_tokens: 100
//             })
//     } 
//     try{
//         const response = await fetch("https://api.openai.com/v1/chat/completions",options)
//         const data = await response.json()
//        console.log(data)
//        pElement.textContent = data.choices[0].message.content
//        if(data.choices[0].message.content){
//         const pElement = document.createElement('p')
//         pElement.textContent
//        }
//    } catch (error) {
//        console.log(error)
//    } 
//    const incomingChatDiv = createElement(userText, "incoming");      
//    incomingChatDiv.querySelector("thinking...").remove();
//    incomingChatDiv.querySelector(".chatbox").appendChild(pElement);
// }

    


// const getChatResponse = ()  => {
//     const API_URL = "https://api.openai.com/v1/chat/completions";
//     const p
//     const requestOptions = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${API_KEY}`
//             },
//             body: JSON.stringify({
//                 model: "gpt-3.5-turbo",
//                 messages: [{role: "user", content: userText}]
//             })
//         }
//     fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
//         console.log(data)
//     }).catch((error) => {
//         console.log(error);
//     })
        // try{
        //     const response = await (await fetch(API_URL, requestOptions)).json();
        //     console.log(response);
        // }catch(error) {
        //     console.log(error);
// const showTyping = () =>{
//         chatbox.appendChild(createElement("Thinking...", "incoming"))

//         const incomingChatDiv = createElement(userText, "incoming");
//         chatbox.appendChild(incomingChatDiv);
//         getChatResponse();

// }
     

// const handleOutgoingChat = () => {
//     userText = chatInput.value.trim();
//     // const html = `<p>${userText}</p>`;
//     if(!userText) return;


//     const outgoingChatDiv = createElement(userText, "outgoing");
//     chatbox.appendChild(outgoingChatDiv);


//     setTimeout(
//         showTyping, 500);  

// }



// sendChatBtn.addEventListener("click", handleOutgoingChat);


// let userMessage;

// const API_KEY ="sk-TxKu9fnJYxyxIVINv7tmT3BIbkFJ7h8ZZSRIdV2eesIHCA2P";
// const messageElement = incomingChatLi.querySelector("p");

// const createChatLi = (message, className) => {
//     const chatLi = document.createElement("li");
//     chatLi.classList.add("chat", className);
//     let chatContent = className === "outgoing" ? `<p></p>` : `<span class= "material-symbols-outlined">smart_toy</span><p></p>`;
//     chatLi.innerHTML = chatContent;
//     chatLi.querySelector("p").textContent = message;
//     return chatLi;
// }

// const generateResponse = (incomingChatLi) => {
//     const API_URL = "https://api.openai.com/v1/chat/completions";

//     const requestOptions = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${API_KEY}`
//         },
//         body: JSON.stringify({
//             model: "gpt-3.5-turbo",
//             messages: [{role: "user", content: userMessage}]
//         })
//     }
//     fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
//         messageElement.textContent = data.choices[0].message.content;
//     }).catch((error) => {
//         messageElement.textContent = " Oops! Something went wrong. Please try again.";
//     }).finally(() => chatInput.scrollTo(0, chatbox.scrollHeight));
// }

// const handleChat = () => {
//     userMessage = chatInput.value.trim();
//     if(!userMessage) return;
//     chatInput.value = "";


//     chatbox.appendChild(createChatLi(userMessage, "outgoing"));
//     chatInput.scrollTo(0, chatbox.scrollHeight);

//     setTimeout(() => {
//         const incomingChatLi = createChatLi("Thinking...", "incoming")
//         chatbox.appendChild(incomingChatLi);
//         generateResponse(incomingChatLi);
//     }, 600);
// }

// sendChatBtn.addEventListener("click", handleChat);
// chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));