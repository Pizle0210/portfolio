import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Dolapo Fajobi Portfolio'
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse CSS-in-JS
      <div
        style={{
          fontSize: 20,
          background: 'linear-gradient(135deg, #050505 0%, #111111 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0070f3',
          borderRadius: '8px',
          fontWeight: 900,
          border: '1px solid rgba(0, 112, 243, 0.3)',
          boxShadow: '0 0 10px rgba(0, 112, 243, 0.2)',
        }}
      >
        DF
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
