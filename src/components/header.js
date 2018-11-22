import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const Container = styled.div`
  ${tw`bg-indigo-lightest py-8 px-4`};
`
const Title = styled.h1`
  ${tw`max-w-md mx-auto text-grey-darkest my-0 font-mono`};
`
const StyledLink = styled(Link)`
  ${tw`no-underline text-inherit`};
`

const Header = ({ siteTitle }) => (
  <Container>
    <StyledLink to="/">
      <Title>{siteTitle}</Title>
    </StyledLink>
  </Container>
)

export default Header
