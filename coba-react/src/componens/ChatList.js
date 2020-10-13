import React from 'react';
import ChatItem from './ChatItem'

export default function ChatList(props) {
    const nodeChat = props.chats.map(item =>
        <ChatItem
            key={item.id}
            id={item.id}
            name={item.name}
            message={item.message}
            sent={item.sent}
            resend={() => props.resend(item.id, item.name, item.message)}
            remove={() => props.remove(item.id)} />)

    return (
        <ul>{nodeChat}</ul>
                // <div className="shadow p-3 mb-5 bg-white">
                //     {nodeChat}
                // </div>
         
    )
} 