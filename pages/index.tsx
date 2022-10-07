import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import TableComponent from '../components/robot-table'
import { Robot } from '../models/Robot'
import GetRobotList from './api/get-robot-list'

export const getStaticProps: GetStaticProps = async () => {
  const robotData = await GetRobotList();
  return {
    props: {
      robotData
    }
  }
};

const Home = ({robotData}: Robot) => {
  return(
    <div>
      <Head>
        <title>Robot List Warehouse</title>
      </Head>
      <main>
        <TableComponent robotData={robotData} />
      </main>
    </div>
  )
}

export default Home;
