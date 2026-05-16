import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Dolapo Fajobi Portfolio'
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse CSS-in-JS
      <div
        style={{
          fontSize: 80,
          background: 'linear-gradient(135deg, #050505 0%, #111111 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0070f3',
          borderRadius: '40px',
          fontWeight: 900,
          border: '4px solid rgba(0, 112, 243, 0.4)',
          boxShadow: '0 0 40px rgba(0, 112, 243, 0.3)',
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
