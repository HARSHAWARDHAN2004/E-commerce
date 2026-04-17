import React from 'react'
import Navbar from './Navabar'
import AllRoutes from './AllRoutes'

export default function Admin({Routes}) {
   return (
      <> <Navbar RouteData={Routes} />
            <AllRoutes RouteData={Routes} />
            <div> ADmin</div>
      </>
    )
}
