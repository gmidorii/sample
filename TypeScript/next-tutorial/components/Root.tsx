import * as React from 'react'
import Head from 'next/head'
import Input from './Input'

interface RootProps {
  input?: string
}

const rootStyle = (
  <style jsx>{`
    #hello {
      background: red;
    }
  `}</style>
)

const Root: React.SFC<RootProps> = props => (
  <div>
    <Head>
      <title>Root</title>
    </Head>
    {rootStyle}
    <div id="hello">{props.input}</div>
    <Input />
  </div>
)

Root.defaultProps = {
  input: 'Hello!!'
}

export default Root
