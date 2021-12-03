import React, { useCallback, useMemo, useState } from 'react'
import {
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
import TheButton from '../components/TheButton'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Login = ({ isLogged, LoggedState }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userLoginInfo, setUserLoginInfo] = useState({})

  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value)
  }, [])

  const onChangePassword = useCallback(e => {
    setPassword(e.target.value)
  }, [])

  const navigate = useNavigate()
  const h1Style = useMemo(
    () => ({
      fontWeight: 300,
      marginBottom: '20px'
    }),
    []
  )

  const labelStyle = useMemo(
    () => ({
      fontWeight: 300,
      fontSize: '12px'
    }),
    []
  )

  const containerStyle = useMemo(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }))

  const onSubmitLogin = useCallback(
    e => {
      e.preventDefault()
      setUserLoginInfo({
        email,
        password
      })
      LoggedState(true)
      navigate('/')
    },
    [email, password]
  )

  return (
    <Container style={containerStyle}>
      <h1 style={h1Style}>로그인</h1>
      <Form onSubmit={onSubmitLogin}>
        <FormGroup>
          <Label style={labelStyle} for="user-email">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="user-email"
            placeholder="example@example.com"
            value={email}
            onChange={onChangeEmail}
          />
          <FormFeedback>
            Uh oh! Looks like there is an issue with your email. Please input a
            correct email.
          </FormFeedback>
          <FormFeedback valid>
            That's a tasty looking email you've got there.
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label style={labelStyle} for="user-password">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="user-password"
            placeholder="********"
            value={password}
            onChange={onChangePassword}
          />
        </FormGroup>
        <TheButton
          children="로그인"
          block
          color="primary"
          style={{ marginBottom: '10px' }}
        />
        <TheButton
          children={
            <Link
              to="/users/signup"
              style={{ textDecoration: 'none', color: '#fff' }}
            >
              회원가입
            </Link>
          }
          block
          color="success"
        />
      </Form>
    </Container>

    // <Container>
    //   <h1>로그인</h1>
    //   <Row>
    //     <FormGroup>
    //       <Input placeholder="Username" />
    //       <Input placeholder="Password" />
    //       <TheButton text="로그인" className="login" />
    //       <TheButton text="회원가입" color="primary" className="signup" />
    //       <Link to="/users/search">비밀번호를 잊으셨습니까?</Link>
    //     </FormGroup>
    //   </Row>
    // </Container>
  )
}

export default Login
