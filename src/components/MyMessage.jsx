const MyMessage = ({message}) => {


    const handleImageClick = (event) => {
        event.preventDefault();

        window.open(event.target.src, '_blank');
    }

    if(message?.attachments?.length > 0){
        const file = message.attachments[0].file;
        const alt = file.substring(file.lastIndexOf('/') + 1 , file.indexOf('?'));
        return(
            <img src={file}
                alt={alt}
                className="message-image"
                style={{float:'right', cursor: 'pointer'}}
                onClick={handleImageClick}>
            </img>
        );
    }

    return(

        <div className="message"
            style={{float:'right', marginRight:'18px', color:'white',backgroundColor:'#3B2A50'}}>
            {message.text}
        </div>
    );

}

export default MyMessage;