import { Variants } from 'framer-motion'
import React from 'react'
import Logo from '../Logos'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import * as Styled from './styles'

const logoVariants: Variants = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 180,
      duration: 0.5
    }
  }
}
const Header: React.FC = () => {
  return (
    <Styled.Header>
      <Logo variants={logoVariants} />
      <DesktopNavigation />
      <MobileNavigation />
    </Styled.Header>
  )
}

export default Header
