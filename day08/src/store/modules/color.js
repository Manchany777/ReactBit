// 1. 액션 생성
// 모듈이름을 앞에 붙여주므로 액션명 중복 방지
const RED = 'color/RED'
const GREEN = 'color/green'
const BLUE = 'color/blue'
const MAGENTA = 'color/magenta'

// 2. 액션 내보내기
export const red = () => ({ type: RED })
export const green = () => ({ type: GREEN })
export const blue = () => ({ type: BLUE })
export const magenta = () => ({ type: MAGENTA })

// 3. 초기값
const initialState = { color: 'hotpink' }

// 4. 리듀서 만들기 - state, action 파라미터를 참조하여, 새로운 상태 객체를 반환한다.
// state에는 반드시 초기값을 주어야 한다.
const reducer = (state=initialState, action) => { // state : 현태 상태, action : 액션 객체
    switch(action.type){
        case RED: return { color: 'red' }
        case GREEN: return { color: 'green' }
        case BLUE: return { color: 'blue' }
        case MAGENTA: return { color: 'magenta' }
        default: return state // default는 반드시 작성해야 한다.
    }
}

export default reducer // 컴포넌트가 아니라 순수 자바스크립트