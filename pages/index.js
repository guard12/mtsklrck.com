import { useTheme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import { Card } from '../src/card'

export default function Home() {
  const theme = useTheme()
  return (
    <div>
      <main 
        style={{ 
          backgroundColor: theme.palette.background.main, 
          height: "100vh",
        }}>
        <div style={{ fontFamily: "Break", paddingLeft: "20%", paddingTop: "20px", fontSize: "3em" }}>MK</div>
       <Card />
       <footer style={{bottom: "20px", position: "fixed", width: "100%"}}>
         <div style={{textAlign: "center" }}> <Typography variant="body2">"When something is important enough, you do it even if the odds are not in your favor." - Elon Musk</Typography>
         </div>
        </footer>
      </main>
    </div>
  )
}
