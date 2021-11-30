import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { Alert } from 'reactstrap'
import Swal from 'sweetalert2'
import InterviewTemplate from '../components/Interview/InterviewTemplate'
import TheButton from '../components/TheButton'
import speech from '../utils/speech'

const Interview = () => {
  const [QTimer, setQTimer] = useState(false)
  const [ATimer, setATimer] = useState(false)

  const [QTime, setQTime] = useState(10)
  const [ATime, setATime] = useState(11)

  const [mode, setMode] = useState('ready')

  const navigate = useNavigate()
  // const dispatch = useDispatch()
  const { id } = useParams()

  const exQuestion = {
    id: 0,
    title: 'react hook의 useEffect에 대해 설명하세요'
  }

  useEffect(() => {
    setMode('ready')
    // dispatch를 통해 알맞은 문제가져오기
    // dispatch(getQestion(id))
  }, [])

  useEffect(() => {
    if (QTime === 10) return
    if (QTime === 0) {
      setQTimer(false)
      setATimer(true)
      setATime(ATime => ATime - 1)
      setMode('answer')
    } else {
      setTimeout(() => {
        setQTime(QTime => QTime - 1)
      }, 1000)
    }
  }, [QTime])

  useEffect(() => {
    if (ATime === 11) return
    if (ATime === 0) {
      //문제 푼 후 페이지 이동
      navigate('/question/answer')
    } else {
      setTimeout(() => {
        setATime(ATime => ATime - 1)
      }, 1000)
    }
  }, [ATime])

  const clickEvents = {
    startBtnClick: () => {
      setQTimer(true)
      setMode('question')
      speech(exQuestion.title, () => {
        setQTime(QTime => QTime - 1)
      })
    },
    reportClick: QData => {
      Swal.fire({
        title: '문제 오류 신고',
        inputLabel: `"${QData.title}"에 대한 문제`,
        input: 'textarea',
        icon: 'info',
        inputAttributes: {
          autocapitalize: 'on'
        },
        showCancelButton: true,
        confirmButtonText: '신고하기',
        confirmButtonColor: 'red',
        inputValidator: value => {
          if (!value) {
            return '내용을 입력해 주세요'
          }
        }
      }).then(({ isConfirmed, value }) => {
        if (isConfirmed) {
          // 전송하기 클릭 시 dispatch로 데이터 보내기
          Swal.fire(value)
        }
      })
    }
  }

  const interviewTemplateProps = {
    ready: {
      title: (
        <span>
          면접을 시작합니다.
          <br />
          편안한 마음으로 대답해주세요 😀
        </span>
      ),
      subTitle: (
        <TheButton
          text="시작"
          color="primary"
          clickFunc={clickEvents.startBtnClick}
        />
      ),
      notice: (
        <Alert fade={false}>
          <h4 className="alert-heading">주의 사항❗️</h4>
          <span>
            - 문제는 <b>텍스트</b>와 <b>음성</b>으로 주어집니다.
            <br /> - 문제를 읽는 <b>음성이 끝난 후 10초의 시간</b>이 주어지고,
            10초 후에는<b> 문제를 다시 볼 수 없습니다.</b>
          </span>
        </Alert>
      )
    },
    question: {
      title: exQuestion.title,
      subTitle: (
        <>
          {QTime}
          <TheButton
            text="문제 오류 신고"
            type="report"
            reportData={exQuestion}
            clickFunc={() => clickEvents.reportClick(exQuestion)}
          />
        </>
      )
    },
    answer: {
      title: '대답해 주세요 😃',
      subTitle: (
        <>
          {ATime}
          <TheButton
            text="문제 오류 신고"
            type="report"
            reportData={exQuestion}
            clickFunc={() => clickEvents.reportClick(exQuestion)}
          />
        </>
      )
    }
  }

  const { ready, question, answer } = interviewTemplateProps

  switch (mode) {
    case 'ready':
      return (
        <InterviewTemplate
          title={ready.title}
          subTitle={ready.subTitle}
          notice={ready.notice}
        />
      )
    case 'question':
      return (
        <InterviewTemplate
          title={question.title}
          subTitle={question.subTitle}
        />
      )
    case 'answer':
      return (
        <InterviewTemplate title={answer.title} subTitle={answer.subTitle} />
      )
    default:
      return Swal.fire({ title: '잘못된 접근입니다. ', icon: 'error' })
  }
}

export default Interview
