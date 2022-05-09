import { useTheme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import { Card } from '../src/card'
import { Logo } from '../src/logo'

export const Home = () => {
  const theme = useTheme()
  return (
    <div>
      <main 
        style={{ 
          backgroundColor: "#000", 
          height: "100vh",
        }}>
        <div style={{ textAlign: "center", paddingTop: "20px", marginRight: "20px" }}><Logo /></div>
        <div style={{ textAlign: "center", paddingTop: "20px" }}>CLASSY | MINIMALIST</div>
        
       <Card />
        <footer style={{bottom: "20px", position: "fixed", width: "100%", padding: "10px"}}>
          <div style={{textAlign: "center" }}> <Typography variant="body2">"When something is important enough, you do it even if the odds are not in your favor." - Elon Musk</Typography>
          </div>
          </footer>
      </main>
    </div>
  )
}
