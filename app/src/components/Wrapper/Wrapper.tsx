import { useLocation } from 'react-router-dom'
import { Box } from '../../../../src'
import { Sidebar } from '../Sidebar/Sidebar'

export const Wrapper = ({ children }) => {
  const { pathname } = useLocation()
  const isHomepage = pathname === '/'
  const sidebarWidth = 280

  return isHomepage
    ? children
    : (
      <>
        <Sidebar s={{ width: sidebarWidth }} />
        <Box
          s={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            marginLeft: [0, null, null, sidebarWidth],
            padding: ['l', 'xl', 'xxl', 'xxxl'],
            overflow: 'hidden'
          }}
        >
          { children }
        </Box>
      </>
    )
}
