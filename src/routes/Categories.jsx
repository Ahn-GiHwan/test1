import React, { useEffect, useState } from 'react'
import { Container, Input, Row, Col, Label, Button } from 'reactstrap'
import '../scss/components/Categories.scss'

import CategoryCard from '../components/CategoryCard'
import SearchButton from '../components/SearchButton'
import ProfileDetail from '../components/ProfileDetail'

const Categories = props => {
  // 초기 데이터
  const [initialData, setInitialData] = useState([])
  // 가변 데이터
  const [data, setData] = useState([])
  // 커리어 데이터
  const [career, setCareer] = useState([])
  // 검색어
  const [query, setQuery] = useState('')
  // search form on/off
  const [mode, setMode] = useState(true)

  // api에서 데이터 가져오기
  useEffect(() => {
    const fetchData = [
      {
        id: 1,
        title: '복습하기',
        count: 23,
        career: ['All', 'Front-End', 'Back-End']
      },
      {
        id: 2,
        title: '네트워크',
        count: 23,
        career: ['All', 'Front-End', 'Back-End']
      },
      {
        id: 3,
        title: 'React',
        count: 23,
        career: ['All', 'Front-End']
      },
      {
        id: 4,
        title: '공통 질문',
        count: 23,
        career: ['All', 'Front-End', 'Back-End']
      },
      {
        id: 5,
        title: 'JavaScript',
        count: 23,
        career: ['All', 'Front-End']
      },
      {
        id: 6,
        title: 'Node Express',
        count: 23,
        career: ['All', 'Back-End']
      }
    ]
    setData(fetchData)
    setInitialData(fetchData)
  }, [])

  useEffect(() => {
    const fetchCareer = [
      { title: 'All', color: 'primary' },
      { title: 'Front-End', color: 'warning' },
      { title: 'Back-End', color: 'success' }
    ]
    setCareer(fetchCareer)
  }, [])

  // 카테고리 카드 생성 -> 컴포넌트로 나눌까 생각중
  const categories = data.map(card => (
    <Col key={card.id} sm={6} xs={6}>
      <CategoryCard card={card} />
    </Col>
  ))

  // 검색어 세팅
  const onChange = e => {
    setQuery(e.target.value)
  }

  // 초기 fetchData 불러오기
  const reset = () => {
    setData(initialData)
  }

  const onKeyUp = e => {
    const enter = 13
    // 검색어가 없을 때, 모든 카테고리 보여주기
    if (!e.target.value.length) reset()
    // enter 입력 시, 해당 카테고리 보여주기
    if (e.keyCode === enter) {
      const filters = [...data].filter(
        el => el.title.toUpperCase() === query.toUpperCase().trim()
      )
      setData(filters)
    }
  }

  const selectCareer = text => {
    const career = [...initialData].filter(el => el.career.includes(text))
    setData(career)
  }

  return (
    <div>
      <Container>
        <Row>
          <Col xs={mode ? 6 : 3}>
            <ProfileDetail />
          </Col>
          {mode ? (
            <Col xs={6}>
              <SearchButton onClick={() => setMode(!mode)} />
            </Col>
          ) : (
            <>
              <Col xs={7} sm={7}>
                <Input onKeyUp={onKeyUp} onChange={onChange} value={query} />
              </Col>
              <Col xs={2}>
                <SearchButton onClick={() => setMode(!mode)} />
              </Col>
            </>
          )}
        </Row>
        <section>
          <span className="main-section_title">Career</span>
          <div className="career-wrapper">
            {career.map((card, idx) => (
              <Button
                key={idx}
                color={card.color}
                className="career-card"
                onClick={e => selectCareer(e.target.textContent)}
              >
                {card.title}
              </Button>
            ))}
          </div>
        </section>
        <Row>
          <span className="main-section_title">Category</span>
          {categories}
        </Row>
      </Container>
    </div>
  )
}

export default Categories
