import { Box, Typography } from "@mui/material"
import './styles.sass'

const ErrorFallback = ({ error }) => {
  return (
    <Box role='alert' className="error-fallback-container">
      <Typography>Ops, something went wrong.</Typography>
      <Typography>{error.message}</Typography>
      <Typography>
        Go back to{' '}
        <a href="/">Home</a>
      </Typography>
    </Box>
  )
}

export default ErrorFallback