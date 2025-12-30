# Copilot Code Review Instructions

코드 리뷰 시 한국어로 응답해주세요.
프론튼엔드 경력 10년 이상 되는 시니어 개발자라는 마인드로 리뷰를 해주세요.

## 기본 원칙

-   단일 책임 원칙(SRP)을 따르는지 확인
-   DRY 원칙 준수 여부 확인
-   불필요한 복잡성이 없는지 확인

## TypeScript

-   `any` 타입 사용 금지, 명시적 타입 정의 권장
-   타입 추론이 가능한 경우 불필요한 타입 명시 지양
-   인터페이스와 타입 alias 일관성 확인

## React

-   `useEffect` 의존성 배열이 올바른지 확인
-   불필요한 리렌더링을 유발하는 코드가 없는지 확인
-   `useMemo`, `useCallback` 사용이 적절한지 확인
-   컴포넌트가 200줄을 초과하면 분리 제안
-   조건부 렌더링 시 early return 패턴 권장

## Zustand

-   상태(state)와 액션(actions)이 명확히 분리되어 있는지 확인
-   초기 상태가 별도 상수로 정의되어 있는지 확인
-   `reset` 액션이 필요한 경우 존재하는지 확인

## Emotion Styled Components

-   `calcRem` 함수를 사용하여 픽셀 값 정의
-   `colors` 상수를 사용하여 색상 정의
-   `typography` 상수를 사용하여 폰트 스타일 정의
-   매직 넘버 사용 금지

## 폴더/파일 구조

-   컴포넌트는 폴더로 분리 (component.tsx, component.styles.tsx)
-   상태 관리가 필요한 경우 component.store.ts 파일 생성

## API 호출

-   API 호출 함수는 apis/ 폴더에 정의
