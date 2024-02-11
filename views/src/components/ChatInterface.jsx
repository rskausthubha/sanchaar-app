import { useState } from "react"

import ChatFeed from "./ChatFeed"
import SendChat from "./SendChat"

const ChatInterface = () => {
    const [msgList, setMsgList] = useState([])
    const [prompt, setPrompt] = useState("")

    return (
        <div className="chatInterface">
            <ChatFeed msgList={msgList} />
            <SendChat prompt={prompt} />
        </div>
    )
}

export default ChatInterface