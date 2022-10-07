import { Input, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { Robot } from "../models/Robot"

const filter = () => {
    var tr, td, searchValue, i;
    var input = document.getElementById("filter")
    var filter = input.value.toUpperCase()
    var table = document.getElementById("robotTable")
    tr = table.getElementsByTagName("tr")

    //Loop through rows to find ID
    for (i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[0]
        if(td){
            searchValue = td.textContent || td.innerText;
            if(searchValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = ""
            }
            else{
                tr[i].style.display = "none"
            }
        }
        
    }
}

const TableComponent = ({robotData} : Robot) => {
    const [search, setSearch] = useState("")
    useEffect(() => setSearch("Search for RobotId"),[])
    return(
        <div><Input type ="text" id="filter" onKeyUp={filter} size="lg" placeholder={search} />
            <TableContainer>
                <Table id="robotTable" variant="striped" colorScheme="blue">
                    <TableCaption placement="top" fontSize={34}>Robot List in warehouse</TableCaption>
                    <Thead>
                     <Tr>
                        <Th>Robot Id</Th>
                        <Th isNumeric>Battery Level</Th>
                        <Th isNumeric>Y coordinate</Th>
                        <Th isNumeric>X coordinate</Th>
                    </Tr>
                    </Thead>
                    <Tbody >
                    {robotData.map((robot, robotIndex) => (
                        <Tr key={robotIndex}>
                            <Td>{robot.robotId}</Td>
                            <Td isNumeric>{robot.batteryLevel}</Td>
                            <Td isNumeric>{robot.y}</Td>
                            <Td isNumeric>{robot.x}</Td>
                        </Tr>
                ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>

    )
}

export default TableComponent;