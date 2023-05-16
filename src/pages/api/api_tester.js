const api_tester = "https://jsonplaceholder.typicode.com/users"

 export default async function testApiSSR  (req, res) {
    const result = await fetch(api_tester)

    let newVar = await result.json()

    console.log(result, "==> result API_Tester")

    //return res.json(result)
    res.json(newVar)
}
