import { useNavigate, useParams } from "react-router-dom"

function About(){
    const navigate = useNavigate();
    let {username} = useParams();


    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate('/contact')


    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" value={username}/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default About