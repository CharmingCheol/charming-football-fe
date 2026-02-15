# 프로젝트 폴더 구조 규칙

## 📁 최상위 구조

```
src/
├── app/              # 앱 설정 및 라우팅
├── pages/            # 페이지 컴포넌트
├── components/       # 공통 컴포넌트
├── queries/          # React Query hooks
├── apis/             # API 클라이언트
├── hooks/            # 커스텀 hooks
├── styles/           # 글로벌 스타일
├── constants/        # 상수
├── types/            # TypeScript 타입 정의
├── mocks/            # MSW 목업 데이터
└── test/             # 테스트 유틸리티
```

---

## 🎯 각 폴더의 역할

### `app/` - 애플리케이션 설정

앱의 핵심 설정과 라우팅을 관리합니다.

```
app/
├── App.tsx              # 앱 진입점 (QueryClient, ErrorBoundary 설정)
├── router.tsx           # 라우터 설정
├── error-boundary.tsx   # 전역 에러 처리
└── layouts/             # 레이아웃 컴포넌트
    ├── layout.tsx
    └── layout.styles.tsx
```

**규칙:**

-   `App.tsx`에는 전역 Provider 설정 (QueryClient, Router, ErrorBoundary)
-   `router.tsx`에서 모든 라우트 정의
-   레이아웃은 `layouts/` 폴더에 분리
    -   레이아웃이 여러 개 일 경우 폴더별로 분류

---

### `pages/` - 페이지 단위 컴포넌트

라우트와 1:1 매핑되는 페이지 컴포넌트입니다.

```
pages/
└── [페이지명]/
    ├── [페이지명].tsx                 # 페이지 진입점
    └── hooks/                        # 해당 페이지에서만 사용하는 hooks
    └── stores/                       # 해당 페이지에서만 사용하는 스토어
    └── components/                   # 해당 페이지에서만 사용하는 컴포넌트
        └── [컴포넌트명]/
            ├── [컴포넌트명].tsx
            ├── [컴포넌트명].styles.tsx
            ├── [컴포넌트명].stories.tsx (필요시)
            └── [하위컴포넌트]/
                ├── [하위컴포넌트].tsx
                └── [하위컴포넌트].styles.tsx
                └── [하위컴포넌트].stories.tsx (필요시)
```

**예시:**

```
pages/
└── main/
    ├── main.tsx
    └── components/
        └── match-overview-panel/
            ├── match-overview-panel.tsx
            ├── match-overview-panel.styles.tsx
            ├── match-overview-panel.stories.tsx
            ├── next-match-info/
            │   ├── next-match-info.tsx
            │   ├── next-match-info.styles.tsx
            │   ├── next-match-info.stories.tsx
            │   ├── match-info-card/
            │   │   ├── match-info-card.tsx
            │   │   ├── match-info-card.styles.tsx
            │   │   └── match-info-card.stories.tsx
            │   ├── team-card/
            │   │   ├── team-card.tsx
            │   │   ├── team-card.styles.tsx
            │   │   └── team-card.stories.tsx
            │   └── states/              # 상태별 UI 컴포넌트 그룹
            │       ├── states.stories.tsx
            │       ├── skeleton-state/
            │       │   ├── skeleton-state.tsx
            │       │   └── skeleton-state.styles.tsx
            │       ├── empty-state/
            │       │   ├── empty-state.tsx
            │       │   └── empty-state.styles.tsx
            │       └── error-state/
            │           ├── error-state.tsx
            │           └── error-state.styles.tsx
            └── recent-match-result/
                ├── recent-match-result.tsx
                ├── recent-match-result.styles.tsx
                ├── recent-match-result.stories.tsx
                ├── recent-match-result-item/
                │   ├── recent-match-result-item.tsx
                │   └── recent-match-result-item.styles.tsx
                └── states/
                    ├── state.stories.tsx
                    ├── skeleton/
                    │   ├── skeleton.tsx
                    │   └── skeleton.styles.tsx
                    └── error-state/
                        ├── error-state.tsx
                        └── error-state.styles.tsx
```

**규칙:**

-   페이지명은 kebab-case 사용
-   각 컴포넌트는 전용 폴더에 위치
-   같은 depth의 파일들: `.tsx`, `.styles.tsx`, `.stories.tsx`
-   `states/` 폴더: loading, error, empty 등 상태별 UI 그룹화
-   페이지 전용 컴포넌트는 `pages/[페이지명]/components/`에만 위치

---

### `components/` - 공통 컴포넌트

여러 페이지에서 재사용되는 컴포넌트입니다.

```
components/
└── common/
    └── [컴포넌트명]/
        ├── [컴포넌트명].tsx
        ├── [컴포넌트명].styles.tsx
        ├── [컴포넌트명].stories.tsx
        └── [컴포넌트명].store.ts (필요시)
```

**예시:**

```
components/
└── common/
    └── toast/
        ├── toast.tsx
        ├── toast.styles.tsx
        └── toast.store.ts
```

**규칙:**

-   2개 이상의 페이지에서 사용되는 컴포넌트만 여기에 위치
-   단일 책임 원칙 준수
-   페이지 종속적인 로직 포함 금지

---

### `queries/` - React Query Hooks

서버 상태 관리를 위한 커스텀 hooks입니다.

```
queries/
└── [도메인].query.ts
```

**예시:**

```
queries/
├── fixtures.query.ts    # useNextMatch, useRecentMatches
├── teams.query.ts
└── players.query.ts
```

**규칙:**

-   파일명: `[도메인].query.ts`
-   Hook명: `use[데이터명]` (예: `useNextMatch`, `useRecentMatches`)
-   queryKey는 배열로 명시적 작성: `["fixtures", "getNextMatchApi", teamId]`
-   같은 도메인의 쿼리는 한 파일에 그룹화

---

### `apis/` - API 클라이언트

백엔드 API 통신 로직입니다.

```
apis/
├── instance.ts          # Axios 인스턴스 설정
└── [도메인].ts          # 도메인별 API 함수
```

**예시:**

```
apis/
├── instance.ts
├── teams.ts             # getNextMatchApi, getRecentMatchesApi
└── players.ts
```

**규칙:**

-   `instance.ts`에서 공통 Axios 설정
-   각 도메인별로 파일 분리
-   API 함수는 명확한 이름 사용 (예: `getNextMatchApi`)

---

### `hooks/` - 커스텀 Hooks

여러 페이지에서 공통으로 재사용 가능한 hooks입니다.

```
hooks/
└── use[기능명].tsx
```

**예시:**

```
hooks/
└── useDebounce.tsx
```

**규칙:**

-   파일명: `use[기능명].tsx` (camelCase)
-   React hooks 규칙 준수 (use로 시작)
-   서버 상태는 `queries/`에, 페이지에서 공통으로 재사용하는 로직은 `hooks/`에

---

### `styles/` - 글로벌 스타일

프로젝트 전체에서 사용하는 스타일 관련 파일입니다.

```
styles/
├── index.tsx              # 글로벌 스타일 export
├── colors.styles.tsx      # 색상 팔레트
├── typography.styles.tsx  # 타이포그래피
└── functions.styles.tsx   # 스타일 유틸 함수
```

**규칙:**

-   Emotion styled-components 사용
-   컴포넌트별 스타일은 해당 컴포넌트 폴더에 위치
-   파일명: `[용도].styles.tsx`

---

### `constants/` - 상수

하드코딩된 값들을 관리합니다.

```
constants/
├── team.ts
├── errors.ts
└── [도메인].ts
```

**규칙:**

-   파일명: kebab-case
-   상수명: UPPER_SNAKE_CASE
-   도메인별로 파일 분리

---

### `types/` - TypeScript 타입

프로젝트 전체에서 사용하는 타입 정의입니다.

```
types/
└── api.d.ts             # API 응답 타입
```

**규칙:**

-   전역 타입은 `.d.ts` 확장자 사용
-   API 응답 타입은 `api.d.ts`에 정의
-   컴포넌트 전용 타입은 해당 파일 내부에 정의

---

### `mocks/` - MSW Mock 데이터

개발/테스트용 목업 데이터입니다.

```
mocks/
├── browser.ts           # 브라우저용 MSW 설정
├── server.ts            # Node.js용 MSW 설정
├── setup.ts             # 테스트 환경 MSW 설정
└── handlers.ts          # API mock handlers
```

**규칙:**

-   실제 API 구조와 동일하게 작성
-   Storybook과 개발 환경에서 공유

---

### `test/` - 테스트 유틸리티

테스트에서 사용하는 헬퍼 함수들입니다.

```
test/
├── setup.ts             # 테스트 환경 설정
└── builder.ts           # 테스트 데이터 빌더
```

---

## 📝 파일 네이밍 규칙

### 컴포넌트 파일

```
[컴포넌트명]/
├── [컴포넌트명].tsx              # 컴포넌트
├── [컴포넌트명].styles.tsx       # 스타일 (Emotion)
├── [컴포넌트명].stories.tsx      # Storybook (필요시)
└── [컴포넌트명].test.tsx         # 테스트 (필요시)
```

### 기타 파일

-   **Query hooks**: `[도메인].query.ts` (예: `fixtures.query.ts`)
-   **API 파일**: `[도메인].ts` (예: `teams.ts`)
-   **Custom hooks**: `use[기능명].tsx` (예: `useDebounce.tsx`)
-   **Constants**: `[도메인].ts` (예: `team.ts`)
-   **Styles**: `[용도].styles.tsx` (예: `colors.styles.tsx`)

---
