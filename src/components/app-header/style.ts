import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 0.875rem;
  color: #fff;
  .active {
    background-color: #000000;
  }
  .content {
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding: 0 1rem;
  }
  .divider {
    width: 100%;
    height: 5px;
    background: #c20c0c;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  ul {
    display: flex;
    padding-left: 1.25rem;
    a {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 1rem;
      color: #fff;
    }
  }
  .logo {
    display: block;
    width: 176px;
    height: 70px;
  }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #787878;
  font-size: 0.875rem;
  > .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    margin-right: 1rem;
    input {
      &::placeholder {
        font-size: 0.75rem;
      }
    }
  }
`
