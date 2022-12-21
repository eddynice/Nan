import {useState} from "react"
import  { Page} from "react-pdf";
import  {Document} from "react-pdf";
import Js from "../assest/cv updates.pdf"
const Resume = ()=>{
    const [numberPages, setNumPage] = useState(null);
    const [pageNumber, setPageNumber] = useState(1)

    function onDocumentLoadSuccess({numberPages}){
setNumPage(numberPages)
    }

    return(
        <div>
            <Document file={Js}>
            <Page pageNumbeer={1}/>
            </Document>
           

        </div>
    )
}

export default Resume