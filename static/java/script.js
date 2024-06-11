

// Define a function to display the welcome message
function displayWelcomeMessage() {
    var welcomeMessage = "Hi, I'm FitBuddy, your fitness chatbot, here to help you reach your health and fitness goals!";
    appendMessage("Chatbot", welcomeMessage);
}

// Call the function to display the welcome message when the page loads
window.onload = function() {
    displayWelcomeMessage();
};

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    appendMessage("You", userInput);
    document.getElementById("user-input").value = "";
    getResponse(userInput);
}

function appendMessage(sender, message) {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");

    if (sender === "Chatbot") {
        messageElement.classList.add("chatbot-message");
    }
    
    messageElement.innerHTML = "<strong>" + sender + ":</strong> " + message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(userInput) {
    var responses = {
        "hi": "Hello!",
        "how are you?": "I'm fine, thank you!",
        "what's your name?": "I'm just a simple chatbot.",
        "bye": "Goodbye!",
        "how do you do it?": "I was trained!",
        "how do i choose the right trainer for my goals?": "We'll match you with expert trainers based on your goals, preferences, and availability.",
        "do you offer personalized workout sessions?": "Yes, as a member, you can book sessions with your preferred trainer for tailored guidance and support.",
        "what does the fitness assessment involve?": "Our comprehensive fitness assessment includes measurements, fitness tests, and goal-setting sessions.",
        "will the assessment help me set realistic goals?": "Absolutely! The assessment will help identify your strengths, weaknesses, and areas for improvement to tailor your fitness plan.",
        "do you offer beginner-friendly workout plans?": "Yes, our plans are designed to help you ease into fitness and build strength.",
        "can i perform my workout sessions at home or do i have to be in the gym?": "Our workout plans are designed to be adaptable, whether you're working out at home or in the gym.",
        "can i switch between different workout plans based on my progress?": "Yes, you can switch between workout plans to keep your routine fresh and challenging.",
        "i can see that you have membership plans?": "I see you're interested in our membership plans! We offer the Basic plan, Advance plan and Premium plan. Which one suits you best?",
        "advance plan": "With our Advanced plan, unlock tools & support to supercharge your fitness journey\n"
                        + "1. Access the fitness assessment to track your fitness progress and goals\n"
                        + "2. Access our vibrant community\n"
                        + "3. Customized workout sessions\n"
                        + "4. Receive personalized nutrition plans\n"
                        + "5. Access a dedicated coach thrice a week",
        "basic plan": "Our basic plan is free and accessible to all, but has limited benefits",
        "premium plan": "Enjoy all the features of the Advance Plan, plus\n"
                        + "1. Daily accountability with trainers and members of the community\n"
                        + "2. Personalized guidance\n"
                        + "3. Daily access to trainers\n"
                        + "4. Calorie counter tracker\n"
                        + "5. Monthly fitness challenges and reward points", 
        "what are the membership plans?": "Basic plan (free)\n"
                                          + "Advance plan ($70)\n"
                                          + "Premium plan ($100)",
        "what payment options are available?": "We offer flexible payment options including monthly, quarterly, and annually.",
        "what exercises are best for burning fat?": "Cardio exercises like running, cycling, and HIIT workouts are great for burning fat! Take our Fitness Assessment to know more",
        "can you recommend a low-calorie meal plan for weight loss?": "Our nutrition experts can create a personalized meal plan tailored to your weight loss goals.",
        "what are some high-calorie foods i can incorporate into my diet?": "Nutrient-dense foods like nuts, avocados, and lean meats can help you bulk up!",
        "what supplements can you recommend for weight gain?": "Protein powders, creatine, and mass gainers can be helpful supplements for gaining weight.",
        "can you suggest a muscle-building workout routine?": "Our trainers can design a strength training program to help you build muscle effectively.",
        "what's the best way to increase muscle mass?": "Focus on compound exercises like squats, deadlifts, and bench presses for maximum muscle growth. Our trainers can help you go farther.", 
        "pre-workout routine to maximize performance?": "Fuel up with a balanced meal or snack 1-2 hours before your workout, and stay hydrated!", 
        "what's the best way to recover after intense workouts?": "Try focusing on proper nutrition, hydration, and getting enough rest to aid in recovery.",
        "recommendations for reducing stress through fitness?": "I would suggest mind-body exercises like yoga and meditation. Our trainers can take you through these processes and more.",  
        "can you suggest a balanced meal plan for overall health?": "Our nutritionists can create a balanced meal plan rich in fruits, vegetables, lean proteins, and whole grains. Our membership plans offer you personalised nutritional plan. Get started now!", 
        "list exercises for improving flexibility and mobility?": "Yoga, Pilates, and dynamic stretching exercises can improve flexibility and mobility. You can connect with our trainers to provide you personal sessions.",
        "can i connect with members who have similar fitness goals for support and accountability?": "Absolutely, our Advance and Premium plans offer this opportunity.",
        "how do you keep members motivated to stick to their fitness goals?": "Our expert trainers provide daily support, motivation, and accountability to keep you on track.",
        "can i upgrade my membership any time?": "Yes, you can do this easily through your dashboard",                            
        "what's fitfusion about?": "FitFusion is your go-to destination for a dynamic fitness experience. We're dedicated to fostering a vibrant community where both men and women can thrive in their pursuit of fitness growth and a healthy lifestyle. Our platform offers a diverse range of fitness modalities and expert guidance tailored to individual needs, ensuring that everyone can find their perfect fit. Whether you're a beginner or a seasoned fitness enthusiast, our supportive community and innovative approach will empower you to achieve your goals and embrace a healthier, more fulfilling life. Join us at FitFusion and embark on a transformative journey towards your best self.",
        "that's nice": "Wow, that's kind of you to say. Thank you!",
        "makes sense": "That's great to hear. You are welcome anytime.",
        // Add more responses here
    }; 

    var response = responses[userInput.toLowerCase()];
    if (response) {
        appendMessage("Chatbot", response);
    } else {
        appendMessage("Chatbot", "Hey there! Welcome to FitFusion! While I may not have all the answers, I'm here to support you in reaching your fitness goals. Whether it's losing weight, building muscle, or improving your overall health, I'm here to help! Feel free to ask me anything fitness-related, and let's crush those goals together!");
    }
}
