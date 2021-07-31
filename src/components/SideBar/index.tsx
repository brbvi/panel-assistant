import { Container } from './style'

import { Link } from 'react-router-dom'

export const SideBar: React.FC = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
      <Link to="/edit">Edit</Link>
      <Link to="/remove">Remove</Link>
    </Container>
  )
}
