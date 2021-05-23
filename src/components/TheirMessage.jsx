const TheirMessage = ({message, lastMessage}) => {

    const isFisrtMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    const handleImageClick = (event) => {
        event.preventDefault();

        window.open(event.target.src, '_blank');
    }

    return(

        <div className="message-row">
            {isFisrtMessageByUser && (
                <div
                    className="message-avatar"
                    style={{backgroundImage:`url(${message?.sender?.avatar})`}}
                />
            )}
            {message?.attachments?.length > 0 
             ?  (
                <img src={message.attachments[0].file}
                    alt={message.attachments[0].file.substring(message.attachments[0].file.lastIndexOf('/') + 1 , message.attachments[0].file.indexOf('?'))}
                    className="message-image"
                    style={{marginLeft: isFisrtMessageByUser ? '4px' : '48px'}}
                    onClick={handleImageClick}>
                </img>
            )
            : (
                <div className="message"
                    style={{float:'left', backgroundColor:'#CABCDC',marginLeft: isFisrtMessageByUser ? '4px' : '48px'}}>
                    {message.text}
                </div>
            )
        }
        </div>
    );
}

export default TheirMessage;