let baseUrl = "https://60c8ed887dafc90017ffbd56.mockapi.io/robots"

const GetRobotList = async () => {
    const res = await fetch(baseUrl)
    const robotList = await res.json()
    return robotList
}
export default GetRobotList;