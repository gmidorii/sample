import * as React from 'react'

interface LinkProps {
  name: string
}

const LinkC: React.SFC<LinkProps> = props => {
  return <div>Link!! {props.name}</div>
}

LinkC.defaultProps = {
  name: 'default'
}

export default LinkC
