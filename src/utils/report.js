import Swal from 'sweetalert2'

const report = reportTitle => {
  return Swal.fire({
    title: '문제 오류 신고',
    inputLabel: `"${reportTitle}"에 대한 문제`,
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

export default report
