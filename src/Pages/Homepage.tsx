import { Herosection } from "../components/section/Herosection";

const Homepage = () =>{
    console.log(localStorage.getItem('theme'))
    return(
        <>
        <div>
            <Herosection/>
        </div>
        </>
    )
}
export default Homepage;