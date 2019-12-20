import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledUL = styled.ul`
  margin: 0;
`

const Styledli = styled.li`
  display: inline;
  margin: 0 20px 0 0;
  color: #ffffff;
`

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#212121`,
      marginBottom: `1.45rem`,
      position: "fixed",
      top: "0px",
      width: "100%",
      zIndex: "999",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#999999`,
            textDecoration: `none`,
          }}
        >
          carl michael lang | portfolio
        </Link>
      </h1>
      <StyledNav>
        <StyledUL>
          <Styledli>
            <StyledLink to="/">home</StyledLink>
          </Styledli>
          <Styledli>
            <StyledLink to="/websites">websites</StyledLink>
          </Styledli>
          <Styledli>
            <StyledLink to="/apps">apps</StyledLink>
          </Styledli>
          <Styledli>
            <StyledLink to="/cv">cv</StyledLink>
          </Styledli>
          <Styledli>
            <StyledLink to="/music">music</StyledLink>
          </Styledli>
        </StyledUL>
      </StyledNav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
