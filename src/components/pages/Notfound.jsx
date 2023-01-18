import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Notfound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => navigate('/'), 3000)
  }, [])

  return (
    <div className="notfoundtextposition">
      <div className="notfoundtextposition-inside">
        <h1>404</h1>
        <h3 className="text-uppercase">Page Not Found !</h3>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  )
}
