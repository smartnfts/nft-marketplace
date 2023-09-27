import { Paper, Typography } from '@mui/material'

export default function LowOnBalanceTip () {
  return (
    <Paper
      elevation={3}
      square
      sx={{
        p: '5px 15px'
      }}>
      <Typography variant="body2" color="text.secondary">
        Low on NRG? Use this <a href='https://faucet.energi.network/' target="_blank ">faucet</a> to get free test tokens!
      </Typography>
    </Paper>
  )
}
