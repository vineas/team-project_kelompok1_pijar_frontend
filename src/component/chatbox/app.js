const chatButton = document.querySelector(".chatbox__button");
const chatContent = document.querySelector(".chatbox__support");
const icons = {
  isClicked: '<img style="width: 100%;" src="../image/3297.webp" alt="chat">',
  isNotClicked:
    '<img style="width: 100%;" src="../image/3297.webp" alt="chat">',
};
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);
