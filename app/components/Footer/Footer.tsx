import React from 'react'

function Footer() {

    const footerStyle=`backdrop-filter backdrop-blur-lg bg-opacity-50 border-t-[1px] border-slate-500 border-opacity-50 py-4 dark:text-slate-300`
  return (
    <div className={footerStyle}>
        <div className="container mx-auto sm:px-4 lg:px-[8rem]">
            Footer
        </div>
    </div>
  )
}

export default Footer