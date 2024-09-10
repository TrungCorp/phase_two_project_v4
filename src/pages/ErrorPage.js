import { useRouteError } from "react-router-dom"
function ErrorPage(){
    const error = useRouteError()
    console.error(error)
    return(
        <main>
            <h1>Oops! An error has occurred!</h1>
        </main>
    )
}
export default ErrorPage