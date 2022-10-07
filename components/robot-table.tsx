import { Button, Input, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { useEffect, useMemo, useState } from "react";
import { Robot } from "../models/Robot"
import filter from "../utils/filter";
import useSortableData from "../utils/sort-table";



const TableComponent = ({robotData} : Robot) => {
    const [search, setSearch] = useState("");
    useEffect(() => setSearch("Search for RobotId"),[]);

    const { robotDataItems, requestSort, sortConfig } = useSortableData(robotData);
    const getClassNamesFor = (name: any) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return(
        <div><Input type ="text" id="filter" onKeyUp={filter} size="lg" placeholder={search} />
            <TableContainer>
                <Table id="robotTable" variant="striped" colorScheme="blue">
                    <TableCaption placement="top" fontSize={34}>Robot List in warehouse</TableCaption>
                    <Thead>
                     <Tr>
                        {/* <Th><Button type="button" onClick={() => requestSort("robotId")}>Robot Id</Th></Button> */}
                        <Th><Button type ="button" onClick={() => requestSort("robotId")} className={getClassNamesFor("robotId")}>Robot ID</Button></Th>
                        <Th isNumeric><Button type ="button" onClick={() => requestSort("batteryLevel")} className={getClassNamesFor("batteryLevel")}>Battery Level</Button></Th>
                        <Th isNumeric><Button type ="button" onClick={() => requestSort("y")} className={getClassNamesFor("y")}>Y coordinate</Button></Th>
                        <Th isNumeric><Button type ="button" onClick={() => requestSort("x")} className={getClassNamesFor("x")}>X coordinate</Button></Th>
                    </Tr>
                    </Thead>
                    <Tbody >
                    {robotDataItems.map((robot, robotIndex) => (
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