import { useState, useEffect } from 'react'
import { computeLoadLength } from '../utils/computeLoadLength'
//return 설명은 아래에
export const useInterSection = (data, loadLength = 10) => {
  const [loading, setLoading] = useState(false)
  const [loadCount, setLoadCount] = useState(0)
  const [defaultLoadLength, setDefaultLoadLength] = useState(loadLength)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [target, setTarget] = useState(null)

  const [slidedData, setSlidedData] = useState([
    ...data.slice(
      0,
      computeLoadLength(data.length, defaultLoadLength, loadCount)
    )
  ])

  const sliceCurrentData = () => {
    const loadLength = computeLoadLength(
      data.length,
      defaultLoadLength,
      loadCount
    )
    return data.slice(currentIndex, currentIndex + loadLength)
  }

  const getMoreItem = async () => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setLoadCount(prev => ++prev)
    setCurrentIndex(
      currentIndex +
        computeLoadLength(data.length, defaultLoadLength, loadCount) +
        1
    )
    const newItems = sliceCurrentData()
    setSlidedData(items => items.concat(newItems))
    setLoading(false)
  }

  const onInterSection = async ([entry], observer) => {
    if (entry.isIntersecting && !loading) {
      observer.unobserve(entry.target)
      await getMoreItem()
      observer.observe(entry.target)
    }
  }

  useEffect(() => {
    let observer
    if (target) {
      observer = new IntersectionObserver(onInterSection, {
        threshold: 0.4
      })
      observer.observe(target)
    }
    return () => observer && observer.disconnect()
  }, [target])

  return [loading, slidedData, setTarget]
}
//지금 버전은 데이터가 많을 때 프론트에서 데이터 전체를 가지고 있고 설정한 개수만큼 불러와서 보여주는 형태입니다.
//loading은 로딩 애니메이션을 보여주기 위한 플래그입니다.
//slideData는 콘텐츠입니다. 스크롤을 하면 slidedData 배열에 값이 추가되므로
//map 메소드를 이용해서 화면에 뿌려줄 수 있습니다.
//setTarget은 인피니트 스크롤링이 아래 방향으로 수행된다면 뿌려준 데이터의 아래 엘리먼트 ref에 대입해주세요
//윗 방향으로 동작은 고려하지 않고 코드를 작성했기 때문에 계속 데이터를 불러오는 버그가 있습니다.
