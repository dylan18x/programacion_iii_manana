const emogis = ['🐶', '🐱', '🐸', '🐢']

export default function EmogiList(){
    return(
        <>
            <p></p>
            <ul>
                {emogis.map((emogi,index)=>(
                    <li key={index}>{emogi}</li>
                ))}
            </ul>
        </>
    )
}