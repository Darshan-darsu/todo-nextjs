'use client';
import React, { useState } from 'react'

const Footer = () => {
    const [date] =React.useState(new Date())
  return (
    <footer class="container text-gray-400  body-font mycolor">
        {/* <p>{date}</p> */}
    {/*  */}
    <p>Footer</p>
  </footer>
  )
}

export default Footer