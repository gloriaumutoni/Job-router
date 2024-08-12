import { useParams } from "react-router-dom";

const CareersDetail = () => {
    const {id}=useParams()  
    return ( 
        <div> 
            <h2>{id}</h2>
        </div>
     );
}
 
export default CareersDetail;