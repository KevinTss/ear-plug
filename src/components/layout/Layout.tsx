import {ReactNode} from 'react'
import './Layout.styles.css'
import {Header} from '../header'
import {Aside} from '../aside'

type LayoutProps ={
  children: ReactNode
}

export const Layout = ({children}:LayoutProps)=> {
  return (
    <div className='container'>
      <Aside/>
      <main>
        <Header/>
        <h1 className="text-s font-bold underline">
      Hello world!
    </h1>
        {children}
      </main>
    </div>
  )
}
