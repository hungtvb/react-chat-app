import {ChatEngine} from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {

    return (

        <ChatEngine
            height="100vh"
            projectID="1be04ce9-758c-4f32-a56b-89329f1a253e"
            userName="hung.tvb"
            userSecret="06021996Bl("
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}        
        />
    )
}

export default App;