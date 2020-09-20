import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.primaryDark };
    height: 100%;
    width: 100%;
`

export const MenuContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.primaryDark };
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight };
    position: fixed;
    z-index: 10;
    width: inherit;
`

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.primaryLight };
    font-size: 16px;
`

export const MenuItem = styled.a`
    color: ${({ theme }) => theme.colors.primaryLight };
    cursor: pointer;
`