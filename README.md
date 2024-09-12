# when deploy backend on Render and frontend on Netlify

First, deploy backend on Render by connecting github:
1. set environment variable for Mongodb database MY_MONGO_URL = mongodb+srv://root:<password>@sneat-mern.ev2z81w.mongodb.net/?retryWrites=true&w=majority&appName=Sneat-MERN and PORT 5555
2. get the render link for backend

Then, deploy frontend on Netlify by connecting github:
1. set environment variable REACT_APP_currentUserId = '668caed44d8961612aeace6e' because Chat.jsx requires userId to access
2. set environment variable REACT_APP_baseURL = 'render link for backend' for access the backend
3. Build command set to CI= npm run build (npm run build will trigger error)

# structure of tables that manage Chat section/webpage - better because it enables filter on userChats

user {id, img, name,status, position,about,email,phone,avai}
userChats {id, userId, chats[{chatId, receiverId,lastMessage,updatedAt}]} 
chats default []
chats {id,messages[{senderId,text,createdAt}],createdAt}
messages default []

# structure below works if filter on userChats is not needed

conversation {id, receiverId, lastMessage, updatedAt&createdAt,receiver}
message {id, messages[] updatedAt&createdAt} 
