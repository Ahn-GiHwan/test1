import React, { useMemo } from 'react'
import {
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
import TheButton from '../components/TheButton'

const SignUp = () => {
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
  return (
    <Container style={containerStyle}>
      <h1 style={h1Style}>회원가입</h1>
      <Form>
        <FormGroup>
          <Label style={labelStyle} for="user-name">
            Username
          </Label>
          <Input type="text" name="name" id="user-name" placeholder="홍길동" />
        </FormGroup>
        <FormGroup>
          <Label style={labelStyle} for="user-email">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="user-email"
            placeholder="example@example.com"
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
          />
        </FormGroup>
        <TheButton children="회원가입" block />
      </Form>
    </Container>
  )
}

export default SignUp
