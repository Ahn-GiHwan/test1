let voices = []
const setVoiceList = () => {
  voices = window.speechSynthesis.getVoices()
}
setVoiceList()
if (window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = setVoiceList
}

export const speech = (txt, func) => {
  if (!window.speechSynthesis) {
    alert(
      '음성 재생을 지원하지 않는 브라우저입니다. 크롬, 파이어폭스 등의 최신 브라우저를 이용하세요'
    )
    return
  }
  const lang = 'ko-KR'
  const utterThis = new SpeechSynthesisUtterance(txt)
  utterThis.onend = () => {
    // tts가 끝나면
    setTimeout(() => {
      func()
    }, 1000)
  }
  utterThis.onerror = function (event) {
    console.log('error', event)
  }
  let voiceFound = false
  for (let i = 0; i < voices.length; i++) {
    if (
      voices[i].lang.indexOf(lang) >= 0 ||
      voices[i].lang.indexOf(lang.replace('-', '_')) >= 0
    ) {
      utterThis.voice = voices[i]
      voiceFound = true
    }
  }
  if (!voiceFound) {
    alert('voice not found')
    return
  }
  utterThis.lang = lang
  utterThis.pitch = 1
  utterThis.rate = 0.8
  window.speechSynthesis.speak(utterThis)
}

export default speech
