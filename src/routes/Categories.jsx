import React, { useEffect, useState, useCallback } from 'react'
import { Container, Input, Row, Col, Button } from 'reactstrap'
import Swal from 'sweetalert2'
import '../scss/components/Categories.scss'

import CategoryCard from '../components/CategoryCard'
import SearchButton from '../components/SearchButton'
import ProfileDetail from '../components/ProfileDetail'
import { useSelector } from 'react-redux'

const Categories = props => {
  // category data
  const fetchCategoryData = useSelector(
    state => state.categoryReducer.categories
  )
  // 가변 데이터
  const [data, setData] = useState([])
  // tag data
  const fetchCareerTagData = useSelector(state => state.career.careers)
  // 검색어
  const [query, setQuery] = useState('')
  // search form on/off
  const [mode, setMode] = useState(true)

  // api에서 데이터 가져오기
  useEffect(() => {
    setData(fetchCategoryData)
  }, [fetchCategoryData])

  //카데고리 중복 선택
  const [choiceCategories, setChoiceCategories] = useState([]) //선택한 카데고리가 담긴 배열: 카데고리의 id가 들어있음.
  const choiceMulitleCategories = useCallback(
    e => {
      const currentChoicedId = e.target.parentElement.parentElement.id
      e.target.parentElement.parentElement.classList.toggle('choice')

      if (choiceCategories.includes(currentChoicedId)) {
        //이미 선택한 카데고리를 고르면 배열에서 삭제함 (토글 기능)
        setChoiceCategories(prev => [
          ...prev.filter(
            el => el.toUpperCase() !== currentChoicedId.toUpperCase()
          )
        ])
      } else {
        setChoiceCategories(prev => [...prev, currentChoicedId])
      }
    },
    [choiceCategories]
  )

  //풀 문제 개수 설정
  const settingNumberQuestions = () => {
    let totalQuestion = 0
    // console.log(categories[0].props.children.props.card.count)
    for (let i = 0; i <= choiceCategories.length - 1; i++) {
      totalQuestion +=
        categories[choiceCategories[i]].props.children.props.card.count
    }
    console.log(totalQuestion)
    //console.log(categories)
    Swal.fire({
      title: `선택하신 카테고리 문제는 모두 ${totalQuestion} 문제 입니다. 풀 문제 개수를 지정해주세요.`,
      input: 'number',
      inputPlaceholder: 'ex. 5',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Go!',
      showLoaderOnConfirm: true,
      preConfirm: '',
      allowOutsideClick: () => !Swal.isLoading()
    }).then(result => {
      if (result.isConfirmed) {
      }
    })
  }

  // 카테고리 카드 생성 -> 컴포넌트로 나눌까 생각중
  const categories =
    data &&
    data.map(card => (
      <Col key={card.id} md={4} sm={6} xs={12} id={card.id}>
        <CategoryCard
          card={card}
          choiceMulitleCategories={choiceMulitleCategories}
        />
      </Col>
    ))

  // 검색어 세팅
  const onChange = useCallback(e => {
    setQuery(e.target.value)
  }, [])
  // 초기 fetchData 불러오기
  const reset = useCallback(() => {
    setData(fetchCategoryData)
  }, [])
  const onKeyUp = useCallback(
    e => {
      const enter = 13
      // 검색어가 없을 때, 모든 카테고리 보여주기
      if (!e.target.value.length) reset()
      // enter 입력 시, 해당 카테고리 보여주기
      if (e.keyCode === enter) {
        if (!e.target.value.length) return
        const filters = [...fetchCategoryData].filter(el => {
          const pattern = `^${query}`
          const regex = new RegExp(pattern, 'gi')
          return (
            el.title.match(regex)?.join('').toUpperCase() ===
            query.toUpperCase().trim()
          )
        })
        setData(filters)
      }
    },
    [query]
  )
  const selectTag = useCallback(text => {
    const tags = [...fetchCategoryData].filter(tag => tag.tag.includes(text))
    setData(tags)
  }, [])
  const toggleInputForm = () => setMode(!mode)
  const careerTagsView = fetchCareerTagData.map((tag, idx) => (
    <Button
      key={idx}
      className="career-card"
      onClick={e => selectTag(e.target.textContent)}
    >
      {tag.careerTitle}
    </Button>
  ))

  return (
    <div>
      <Container>
        <Row>
          <Col xs={mode ? 6 : 3}>
            <ProfileDetail />
          </Col>
          {mode ? (
            <Col xs={6}>
              <SearchButton onClick={toggleInputForm} />
            </Col>
          ) : (
            <>
              <Col xs={7} sm={7}>
                <Input
                  onKeyUp={onKeyUp}
                  onChange={onChange}
                  value={query}
                  style={{ margin: '20px 0' }}
                />
              </Col>
              <Col xs={2}>
                <SearchButton onClick={toggleInputForm} />
              </Col>
            </>
          )}
        </Row>
        <section>
          <span className="main-section_title">Career</span>
          <div className="career-wrapper">{careerTagsView}</div>
        </section>
        <Row>
          <span className="main-section_title">Category</span>
          <div>내가 선택한 카테고리 : {choiceCategories.join(', ')}</div>
          <Button onClick={settingNumberQuestions}> 시작 </Button>
          {categories}
        </Row>
      </Container>
    </div>
  )
}

export default Categories
