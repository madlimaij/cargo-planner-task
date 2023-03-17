import React from 'react'

type LogoProps = {
    logo: string
}

const Home: React.FC<LogoProps> = ({logo}) => {
  return (
    <div className="text-center py-5 h-25">
    <img
      src={logo}
      alt="Logo"
      className="img-fluid w-75 py-5 my-5"
    />
  </div>
  )
}

export default Home