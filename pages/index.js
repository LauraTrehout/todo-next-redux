import styled, { ThemeProvider } from 'styled-components'

import Head from 'next/head'
import Image from 'next/image'

import Tasks from '../components/Tasks'
import SelectedTask from '../components/SelectedTask'
import Header from '../components/Header'
import GlobalStyles from '../styles/Global'

const theme = {
  colors: {
    main: '#DB4437',
    bg: '#F2F2F2',
    greyTxt: '#909191'
  }
}
const MainContainer = styled.div`
height: 100%;
display: flex;
`
export default function Home() {
  return (
    <div>
      <Head>
        <title>todoist</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
            <Header />
            <MainContainer>
            <Tasks theme={theme} />
            <SelectedTask />
            </MainContainer>
        </ThemeProvider>
      </main>
    </div>
  )
}
