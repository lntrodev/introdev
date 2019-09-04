/** @jsx jsx */
import { jsx } from "theme-ui"

const Hero = ({ children }) => (
  <div
    sx={{
      textAlign: 'center',
      padding: '0 15%'
    }}
  >
    <h2>28 de Setembro - 8:00 às 12:00</h2>
    { children }
    <div sx={{ marginTop: '1em' }}>
      <h3 sx={{ margin: 0 }}>
        UFPI | CCN - Auditório Prof Dr. João Benício de Melo Neto
      </h3>
      <small>(Departamento de Matemática - ao lado da sala 251)</small>
    </div>
  </div>
)

export default Hero
