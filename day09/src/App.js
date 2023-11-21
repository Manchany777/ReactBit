import React from 'react';
import CountProvider from './contexts/CountContext';
import Count from './components/Count';
import ColorProvider from './contexts/ColorContext';
import Color from './components/Color';
import TodoProvider from './contexts/TodoContext';
import Todos from './components/Todos';

const App = () => {
  return (
    <>
      {/* 
      컨텍스트를 사용할 컴포넌트의 상위 컴포넌트에서 Provider로 감싸주어야 한다.
      Provider의 모든 하위 컴포넌트가 얼마나 깊이 위치해 있는지 관계 없이 컨텍스트의 데이터를 읽을 수 있다.
       */}

       {/* <CountProvider>
          <Count />
       </CountProvider> */}

       {/* <ColorProvider>
          <CountProvider>
            <Color />
          </CountProvider>
       </ColorProvider> */}

       <TodoProvider>
          <ColorProvider>
            <CountProvider>
              <Todos />
              <hr />
              <Color />
              <hr />
              <Count />
            </CountProvider>
          </ColorProvider>
       </TodoProvider>
    </>
  );
};

export default App;/*
context
- context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있다.
- context는 React 컴포넌트 트리 안에서 전역적(global)이라고 볼 수 있는 데이터를 공유할 수 있도록 고안된 방법이다.
  그러한 데이터로는 현재 로그인한 유저, 테마, 선호하는 언어 등이 있다.
- 데이터가 필요할 때마다 props를 통해 전달할 필요가 없이 context를 이용해 공유한다.

context API를 사용하기 위해서는 Provider, Consumer, createContext가 필요하다.
① createContext : context 객체를 생성한다.
                  createContext 함수 호출 시 Provider와 Consumer 컴포넌트 반환한다.
                  initialValue는 Provider를 사용하지 않았을 때 적용될 초기값을 의미한다.
② Provider : 생성한 context를 하위 컴포넌트에게 전달하는 역할을 한다.
③ Consumer : context의 변화를 감시하는 컴포넌트이다.
             설정한 상태를 불러올 때 사용한다.

useContext
- useContext 를 사용하면 기존의 Context 사용 방식보다 더 쉽고 간단하게 Context를 사용이 가능하고, 
  앞서 다뤘던 useState, useEffect와 조합해서 사용하기 쉽다는 장점이 있다.
- useContext를 사용할 때 주의해야 할 점은 Provider에서 제공한 value가 달라진다면 useContext를 사용하고 있는 모든 컴포넌트가 리렌더링 된다는 점이다.
  따라서 useContext를 사용할 때 value 부분을 메모제이션 하는데 신경을 써야한다.
  */