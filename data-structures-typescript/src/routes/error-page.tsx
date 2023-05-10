import { useRouteError,isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage(){
    const  error = useRouteError();

    return(
        <div>
            <h1>Ooops wrong page...</h1>
            <p>That's awkward. <i>{
            isRouteErrorResponse(error) ? "The page is " + error.statusText  : "unexpected error ocurred."}
            </i></p>
        </div>
    )
}