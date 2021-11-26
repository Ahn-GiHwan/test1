import React, { useCallback } from 'react'
import { Button } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { toggleExample2 } from './reducers/exampleReducer'

const App = () => {
  const { example2 } = useSelector(state => state.exampleReducer)
  const dispatch = useDispatch()

  const onToggleExample2 = useCallback(() => {
    dispatch(toggleExample2)
  }, [])

  return (
    <div className="container">
      <div>
        <Button color="primary" onClick={onToggleExample2}>
          example2 toggle
        </Button>
      </div>
      {example2 && <div>example2 is true</div>}
    </div>
  )
}

export default App
