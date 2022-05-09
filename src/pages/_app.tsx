import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Header from '../Components/Header'
import OrderProvider from '../context/Order'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <OrderProvider cartItems={[]} setCartItems>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </OrderProvider>
  )
}

export default MyApp
