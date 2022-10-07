import { Tab, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { Robot } from "../models/Robot"
import GetRobotList from "../pages/api/get-robot-list" 

export const TableComponent = ({robotData} : Robot) => {
    return(
        <TableContainer>
            <Table variant="striped" colorScheme="blue">
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
    )
}

export default TableComponent;