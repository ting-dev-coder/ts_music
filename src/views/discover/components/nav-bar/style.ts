import styled from 'styled-components'

// ${(props) => props.theme.color.primary}
export const NavWrapper = styled.div`
  height: 30px;
  background: #c20c0c;
  .nav {
    display: flex;
    position: relative;
    top: -4px;
    padding-left: 180px;

    .item {
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 0.75rem;
        margin: 8px 1rem 0;
        color: #fff;
        font-size: 0.75rem;
        &:hover,
        &.active {
          text-decoration: none;
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
  }
`
