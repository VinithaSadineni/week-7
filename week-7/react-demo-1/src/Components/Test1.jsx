function Test1(props){
    let{message1,message2}=props.messages
return (
    <div className="bg-amber-200 border p-10 m-5">
        <h1>Test1 Component</h1>
        <p className="text-3xl">{message1}</p>
        <p className="text-3xl">{message2}</p>
    </div>
)
}

export default Test1