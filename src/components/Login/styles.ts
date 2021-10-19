import styled from '@emotion/styled'

export const Container = styled.div`
  width: 1110px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(12,1fr);
  column-gap: 30px;
`

export const GridContainer = styled.div`
  grid-column: 9 / 13;
  display: flex;
  align-items: center;
`

export const LoginContainer = styled.div`
  width: 100%;
  height: 307px;
`

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 37px;
`

export const GuideText = styled.div`
  color: #8395A7;
  font-size: 16px;
  margin-bottom: 12px;
`

export const InputID = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 0px;
  margin: 0px;
  margin-bottom: 24px;
  border: none;
  border-bottom: 1px solid #8395A7;
  outline: none;
`

export const InputPassword = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 0px;
  margin: 0px;
  margin-bottom: 24px;
  border: none;
  border-bottom: 1px solid #8395A7;
  outline: none;
`

export const LoginButton = styled.button`
  color: white;
  font-size: 16px;
  width: 100%;
  height: 36px;
  outline: none;
  text-align: center;
  margin-bottom: 8px;
  background-color: #1CD0A1;
  border: none;
  border-radius: 5px;
`
export const Semicolone = styled.div`
  color: #8395A7;
  font-size: 14px;
  text-align: center;
`