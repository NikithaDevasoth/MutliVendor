import React from 'react'

const Welcome = () => {
    const firmName = localStorage.getItem("firmName")

  return (
    <div className='welcomeSection'>
        <h2>Welcome {firmName}</h2>
        <div className="landingImage">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPVVNVQ1UMiNg0JU5TQyxBP68VXSR05hjrVA&s' alt='welcome' />
        </div>
    </div>
  )
}

export default Welcome