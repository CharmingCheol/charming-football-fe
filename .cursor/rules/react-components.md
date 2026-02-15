# React 컴포넌트 작성 규칙

---

## 📝 컴포넌트 네이밍 규칙

### 1. PascalCase 사용

```typescript
✅ UserProfile
✅ MatchOverview
✅ TeamCard

❌ userProfile
❌ match-overview
❌ team_card
```

### 2. 파일명과 컴포넌트명 일치

```
user-profile.tsx  →  const UserProfile = () => {}
team-card.tsx     →  const TeamCard = () => {}
error-state.tsx   →  const ErrorState = () => {}
```

### 3. 명확하고 설명적인 이름

```typescript
✅ UserProfileCard    // 무엇을 하는지 명확
✅ MatchInfoPanel     // 역할이 분명

❌ Item               // 너무 일반적
❌ Card               // 무슨 카드?
❌ Component1         // 의미 없음
```

### 4. 복합어 조합 패턴

```typescript
// [도메인][기능][타입]
UserProfilePanel; // User + Profile + Panel
RecentMatchList; // Recent + Match + List
TeamStatsTable; // Team + Stats + Table

// [대상][타입]
TeamCard; // Team + Card
UserAvatar; // User + Avatar
```

### 5. 상태 컴포넌트 네이밍

```typescript
SkeletonState; // 로딩 스켈레톤
EmptyState; // 빈 상태
ErrorState; // 에러 상태
LoadingState; // 로딩 상태 (Skeleton 대신 사용 가능)
```

---

## 📦 Import 순서

**규칙:**

1. 외부 라이브러리 (react, axios, zustand 등)
2. 절대 경로 (@ 로 시작)
3. 상대 경로 (./ 또는 ../)
4. import 구문 사이에 빈 줄이나 주석을 넣지 않는다

**예시:**

```typescript
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useUserData } from "@/queries/user.query";
import { API_BASE_URL } from "@/constants/api";
import logoImage from "@/assets/images/logo.png";
import * as S from "./component-name.styles";
import SubComponent from "./sub-component/sub-component";
```

---

## 🎨 스타일 Import 규칙

### ✅ 올바른 방법

```typescript
import * as S from "./component-name.styles";

<S.Container>
  <S.Title>제목</S.Title>
</S.Container>
```

### ❌ 잘못된 방법

```typescript
// 개별 import 금지
import { Container, Title } from "./component-name.styles";

// 컴포넌트 파일 내 직접 정의 금지
import styled from "@emotion/styled";
const Container = styled.div`...`;
```

---

## 🏗️ 컴포넌트 작성 패턴

### 패턴 1: React Query 호출하는 컴포넌트

**규칙:** React Query hooks를 불러오는 컴포넌트 중 가장 root에 있는 컴포넌트는 states 컴포넌트들을 분기 처리해서 렌더링한다.

```typescript
const SomeComponent = () => {
    const { data, isLoading, isError, refetch } = useQueryHook();

    if (isLoading) return <SkeletonState />;
    if (isError) return <ErrorState onRetry={refetch} />;
    if (!data) return <EmptyState />;

    return (
        <S.Container>
            {/* 정상 UI */}
        </S.Container>
    );
};
```

**핵심:**

-   Early return으로 상태별 UI 분기
-   상태 순서: `isLoading` → `isError` → `!data` → 정상 렌더링
-   states 폴더의 컴포넌트들 사용

---

### 패턴 2: Props로 데이터를 받는 컴포넌트

```typescript
import * as S from "./component-name.styles";

export interface UserCardProps {
    name: string;
    avatar: string;
    role: string;
};

const UserCard = ({ name, avatar, role }: UserCardProps) => {
    return (
        <S.Wrapper>
            <S.Avatar src={avatar} alt={name} />
            <S.Name>{name}</S.Name>
            <S.Role>{role}</S.Role>
        </S.Wrapper>
    );
};

export default UserCard;
```

**핵심:**

-   반복문을 통해서 생성되는 컴포넌트들, 데이터는 다르지만 같은 화면을 보여주는 컴포넌트의 경우 props를 전달
-   Props 인터페이스를 export. type 대신 interface로 선언

---

### 패턴 3: 계산 로직이 있는 컴포넌트

```typescript
import { useMemo } from "react";
import * as S from "./match-score.styles";

const MatchScore = ({ homeScore, awayScore }: ScoreProps) => {
    // 간단한 계산: 컴포넌트 상단에 직접
    const totalScore = homeScore + awayScore;

    // 복잡한 계산: useMemo 사용
    const matchResult = useMemo(() => {
        if (homeScore > awayScore) return "win";
        if (homeScore < awayScore) return "loss";
        return "draw";
    }, [homeScore, awayScore]);

    const formattedDate = useMemo(() => {
        const date = new Date();
        return date.toLocaleDateString();
    }, []);

    return (
        <S.Container>
            <S.Score>{totalScore}</S.Score>
            <S.Result>{matchResult}</S.Result>
        </S.Container>
    );
};
```

**핵심:**

-   간단한 계산: 직접 작성
-   복잡한 계산: `useMemo` 사용
-   의존성 배열 정확히 명시

---

### 패턴 4: 에러 상태 컴포넌트

```typescript
import * as S from "./error-state.styles";

interface ErrorStateProps {
    onRetry: () => void;
}

const ErrorState = ({ onRetry }: ErrorStateProps) => {
    return (
        <S.Container>
            <S.Title>데이터를 불러올 수 없습니다</S.Title>
            <S.Description>잠시 후 다시 시도해주세요</S.Description>
            <S.RetryButton onClick={onRetry}>다시 시도</S.RetryButton>
        </S.Container>
    );
};

export default ErrorState;
```

**핵심:**

-   `onRetry` 함수를 props로 받음
-   내부에서 React Query hook 호출 금지
-   순수 Presentational 컴포넌트로 유지

---

## 🎯 React Query 사용 규칙

### ✅ 올바른 사용

```typescript
const DataComponent = () => {
    const { data, isLoading, isError, refetch } = useData();

    if (isLoading) return <SkeletonState />;
    if (isError) return <ErrorState onRetry={refetch} />;
    if (!data) return <EmptyState />;

    return <div>{data.content}</div>;
};
```

### ❌ 잘못된 사용

```typescript
// 에러 컴포넌트에서 hook 호출 금지
const ErrorState = () => {
    const { refetch } = useData();  // ❌ 무한 루프 발생
    return <button onClick={refetch}>재시도</button>;
};
```

**이유:**

-   에러 컴포넌트에서 hook 호출 시 무한 루프 가능
-   상위에서 데이터 가져오고 하위는 표시만
-   명확한 책임 분리

---

## 📁 States 폴더 패턴

로딩/에러/빈상태는 `states/` 폴더로 그룹화

```
component-name/
├── component-name.tsx
├── component-name.styles.tsx
└── states/
    ├── states.stories.tsx
    ├── skeleton-state/
    │   ├── skeleton-state.tsx
    │   └── skeleton-state.styles.tsx
    ├── empty-state/
    │   ├── empty-state.tsx
    │   └── empty-state.styles.tsx
    └── error-state/
        ├── error-state.tsx
        └── error-state.styles.tsx
```

**사용:**

```typescript
import SkeletonState from "./states/skeleton-state/skeleton-state";
import EmptyState from "./states/empty-state/empty-state";
import ErrorState from "./states/error-state/error-state";

const Component = () => {
    if (isLoading) return <SkeletonState />;
    if (isError) return <ErrorState onRetry={refetch} />;
    if (!data) return <EmptyState />;

    return <div>정상 UI</div>;
};
```

---

## 🖼️ 이미지 처리 규칙

### Fallback 이미지 필수

```typescript
import fallbackImage from "@/assets/images/fallback.png";

<S.Image
    src={externalUrl}
    alt={description}
    onError={(e) => (e.currentTarget.src = fallbackImage)}
/>
```

**규칙:**

-   외부 이미지는 항상 `onError` 핸들러 추가
-   fallback 이미지는 `assets/images/`에 저장
-   alt 속성 필수

---

## 📝 타입 정의 규칙

### Props 타입 Export

```typescript
// ✅ Props 타입을 export
export interface UserCardProps {
    name: string;
    email: string;
}

const UserCard = ({ name, email }: UserCardProps) => {
    // ...
};
```

### Interface vs Type

```typescript
// Props는 interface 사용
interface ComponentProps {
    title: string;
    onRetry: () => void;
}

// 유틸리티 타입은 type 사용
export type Status = "loading" | "success" | "error";
export type TeamInfo = ApiResponse["teams"]["home"];
```

---

## ✅ 체크리스트

새 컴포넌트 작성 시:

-   [ ] PascalCase로 컴포넌트명 작성
-   [ ] 파일명과 컴포넌트명 일치 (kebab-case ↔ PascalCase)
-   [ ] Import 순서 준수 (외부 라이브러리 → 절대 경로 → 상대 경로)
-   [ ] 스타일은 `* as S`로 import
-   [ ] React Query 사용 시 early return으로 상태 처리
-   [ ] 에러/로딩 컴포넌트는 `states/` 폴더에
-   [ ] Props 타입 export
-   [ ] 외부 이미지는 fallback 처리
-   [ ] 복잡한 계산은 useMemo
-   [ ] 에러 컴포넌트는 onRetry props로 받기

---

## 🚫 안티패턴

### ❌ 하지 말아야 할 것

```typescript
// 1. 스타일 개별 import
import { Container, Title } from "./styles";  // ❌

// 2. 에러 컴포넌트에서 hook 호출
const ErrorState = () => {
    const { refetch } = useData();  // ❌ 무한 루프
    return <button onClick={refetch}>재시도</button>;
};

// 3. useMemo 없이 복잡한 계산 반복
const Component = () => {
    const result = expensiveCalculation(data);  // ❌ 매 렌더마다 실행
    return <div>{result}</div>;
};

// 4. 이미지 에러 처리 없음
<img src={externalUrl} />  // ❌

// 5. 상태 처리 순서 틀림
if (!data) return <EmptyState />;      // ❌
if (isLoading) return <Skeleton />;    // 순서 바뀜
```

---

## 🏛️ 컴포넌트 계층 구조

### 3단계 레이어

```
1. Container (데이터 레이어)
   - React Query hooks
   - 상태 관리
   - 조건부 렌더링
   ↓
2. Composite (조합 레이어)
   - 여러 하위 컴포넌트 조합
   - 레이아웃 구성
   ↓
3. Presentational (표현 레이어)
   - props로 데이터 수신
   - UI만 렌더링
```

```typescript
// 1. Container
const Dashboard = () => {
    return (
        <S.Container>
            <UserSection />     {/* Composite */}
            <StatsSection />    {/* Composite */}
        </S.Container>
    );
};

// 2. Composite
const UserSection = () => {
    const { data } = useUser();

    return (
        <S.Wrapper>
            <UserCard data={data} />       {/* Presentational */}
            <UserStats data={data.stats} /> {/* Presentational */}
        </S.Wrapper>
    );
};

// 3. Presentational
const UserCard = ({ data }: { data: User }) => {
    return (
        <S.Card>
            <S.Name>{data.name}</S.Name>
        </S.Card>
    );
};
```

---

이 규칙들은 프로젝트의 일관성을 위한 가이드라인입니다.
