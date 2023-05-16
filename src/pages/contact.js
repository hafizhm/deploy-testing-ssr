import { useEffect } from "react"

export default () => {

    useEffect(() => {
        getDataApi()
    }, []);

    async function getDataApi() {
        const data = await fetch("/api/api_tester")

        let newVarData = await data.json() 

        console.log(newVarData, "==> data API ")
    }

    return(
        <div>
            <p>
                <a href="mailto:hafizh@mail.com">Contact Me!</a>
            </p>
        </div>
    )
}