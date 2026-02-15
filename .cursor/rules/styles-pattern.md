# Emotion Styled-Components 스타일 규칙

## 파일 명명 규칙

-   스타일 파일은 `*.styles.tsx` 패턴으로 명명
-   컴포넌트와 같은 디렉토리에 위치

## Import 순서

**규칙:**

1. 외부 라이브러리
2. 내부 스타일 유틸리티

**예시:**

```typescript
import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";
import { clampVh, colors, typography } from "@/styles";
```

## 스타일 작성 패턴

### 1. 객체 리터럴 방식

```typescript
export const Container = styled.section({
    display: "flex",
    gap: clampVh(16),
    padding: clampVh(24),
});
```

### 2. Props가 있는 컴포넌트

```typescript
export const Button = styled.button<{ variant?: "primary" | "secondary" | "danger" }>(({ variant = "primary" }) => ({
    padding: `${clampVh(12)} ${clampVh(24)}`,
    borderRadius: clampVh(8),
    border: "none",
    cursor: "pointer",
    ...typography.p4,
    backgroundColor:
        variant === "primary"
            ? colors.gray100
            : variant === "secondary"
              ? colors.gray600
              : colors.red500,
    color: variant === "primary" ? colors.black900 : colors.gray100,
}));
```

## 필수 사용 유틸리티

### clampVh() 함수

모든 크기 값은 `clampVh()` 함수 사용:

```typescript
// ✅ GOOD
padding: clampVh(24),
gap: clampVh(16),
borderRadius: clampVh(12),

// ❌ BAD - 고정 픽셀 사용
padding: "24px",
```

### colors 객체

색상은 항상 `colors` 객체에서 가져오기:

```typescript
// ✅ GOOD
backgroundColor: colors.black900,
color: colors.gray100,

// ❌ BAD - 하드코딩된 색상
backgroundColor: "#080b0b",
```

### typography 객체

텍스트 스타일은 `typography` 객체 사용:

```typescript
// ✅ GOOD
export const Title = styled.h1({
    ...typography.h7,
    textAlign: "center",
});

// ❌ BAD - 직접 fontSize, lineHeight 지정
fontSize: "21px",
lineHeight: "21px",
```

## 반응형 디자인

미디어 쿼리는 객체 내부에 중첩:

```typescript
export const TeamLogo = styled.img({
    width: clampVh(120),
    height: clampVh(120),

    "@media (max-width: 768px)": {
        width: clampVh(60),
        height: clampVh(60),
    },
});
```

## 애니메이션

keyframes는 파일 상단에 정의:

```typescript
import { keyframes } from "@emotion/react";

const shimmer = keyframes`
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
`;

export const Skeleton = styled.div({
    animation: `${shimmer} 1.5s infinite ease-in-out`,
});
```

## 공통 스타일 재사용

베이스 스타일 객체를 만들어 재사용:

```typescript
const skeletonBase = {
    background: `linear-gradient(90deg, ${colors.black600} 25%, ${colors.black500} 50%, ${colors.black600} 75%)`,
    backgroundSize: "200% 100%",
    borderRadius: clampVh(8),
};

export const TeamLogo = styled.div({
    ...skeletonBase,
    width: clampVh(120),
    height: clampVh(120),
});
```

## HTML 시맨틱 태그 사용

적절한 시맨틱 태그 활용:

```typescript
// ✅ GOOD - 시맨틱 태그 사용
export const Container = styled.section({
    /* ... */
});
export const Article = styled.article({
    /* ... */
});
export const List = styled.ul({
    /* ... */
});

// ❌ BAD - 모든 것을 div로
export const Container = styled.div({
    /* ... */
});
```

## Export 규칙

모든 styled 컴포넌트는 named export:

```typescript
// ✅ GOOD
export const Container = styled.section({
    /* ... */
});
export const Header = styled.header({
    /* ... */
});

// ❌ BAD - default export
export default styled.section({
    /* ... */
});
```
