// 1. 액션 생성
// 모듈이름을 앞에 붙여주므로 액션명 중복 방지
const TIGGER = 'animal/TIGER'
const DOG = 'animal/DOG'
const CAT = 'animal/CAT'
const CHICK = 'animal/CHICK'

// 2. 액션 내보내기 (리듀서가 받아서 처리할 수 있도록)
export const tiger = () => ({ type: TIGGER })
export const dog = () => ({ type: DOG })
export const cat = () => ({ type: CAT })
export const chick = () => ({ type: CHICK })

// 3. 초기값
// 이번엔 초기값이 두 개이다 주의
const initialState = { name: '', crying: '' }


// 4. 리듀서 만들기 - state, action 파라미터를 참조하여, 새로운 상태 객체를 반환한다.
// state에는 반드시 초기값을 주어야 한다.
const reducer = (state=initialState, action) => { // state : 현태 상태, action : 액션 객체
    switch(action.type){
        case TIGGER : 
            return { name: '호랑이', crying: '어~흥' }
        case DOG: 
            return { name: '강아지', crying: '멍~멍'  }
        case CAT : 
            return { name: '고양이', crying: '야~옹'  }
        case CHICK : 
            return { name: '병아리', crying: '삐~약'  }
        default: // default는 반드시 작성해야 한다.
            return state 
    }
}

export default reducer // component가 아니라 순수 *.js 파일이다.