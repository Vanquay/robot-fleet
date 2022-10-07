import { Divider, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import TableComponent from '../components/robot-table'
import { Robot } from '../models/Robot'
import GetRobotList from './api/get-robot-list'

export const getStaticProps: GetStaticProps = async () => {
  const robotData = await GetRobotList()
  return {
    props: {
      robotData
    }
  }
}

const Home: NextPage = ({robotData}: Robot) => {
  return(
    <TableComponent robotData={robotData} />
  )
}

export default Home
