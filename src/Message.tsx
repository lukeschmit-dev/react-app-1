

function Message() {
    const name = "Luke"
    if (name)
        return <h1>Hello {name}</h1>;
    else 
        return <h1>Not</h1>
}

export default Message;