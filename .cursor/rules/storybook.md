# Storybook 스토리 작성 규칙

## 파일 명명 규칙

-   스토리 파일은 `*.stories.tsx` 패턴으로 명명
-   컴포넌트와 같은 디렉토리에 위치

## Import 순서

**규칙:**

1. Storybook 타입
2. 외부 라이브러리 (필요시)
3. 내부 모듈 (API, 상수, 유틸 등)
4. 컴포넌트

```typescript
import type { Meta, StoryObj } from "@storybook/react-vite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, HttpResponse } from "msw";
import { getNextMatchApi } from "@/apis/teams";
import { MANCHESTER_UNITED } from "@/constants/team";
import Builder from "@/test/builder";
import TeamCard from "./team-card";
```

## 기본 구조

### Meta 정의

```typescript
const meta: Meta<typeof ComponentName> = {
    title: "pages/main/component-name", // 계층 구조 반영
    component: ComponentName,
    parameters: {
        layout: "centered", // centered로 권장
    },
};

export default meta;
```

### Story 타입

```typescript
// Story 타입을 재사용할 때
type Story = StoryObj<typeof ComponentName>;

export const 기본: Story = {
    // ...
};
```

## Story 명명 규칙

-   **한글 네이밍 사용** (이모지 없음)
-   설명적이고 명확한 이름 사용

```typescript
// ✅ GOOD
export const 기본: StoryObj<typeof Component> = {
    /* ... */
};
export const 팀_이름_긴_경우: StoryObj<typeof Component> = {
    /* ... */
};
export const 이미지_로드_실패: StoryObj<typeof Component> = {
    /* ... */
};

// ❌ BAD
export const Default: StoryObj<typeof Component> = {
    /* ... */
};
export const Story1: StoryObj<typeof Component> = {
    /* ... */
};
```

## Decorators 패턴

### 레이아웃 Decorator

컴포넌트 크기를 제한하거나 레이아웃을 조정할 때:

```typescript
decorators: [
    (Story) => (
        <div style={{ width: "min(700px, 90vw)" }}>
            <Story />
        </div>
    ),
],
```

### Provider Decorator

React Query, Context 등이 필요한 경우:

```typescript
decorators: [
    (Story) => {
        const queryClient = new QueryClient({
            defaultOptions: {
                queries: {
                    retry: false,  // 스토리북에서는 재시도 비활성화
                },
            },
        });
        return (
            <QueryClientProvider client={queryClient}>
                <Story />
            </QueryClientProvider>
        );
    },
],
```

## MSW 핸들러 패턴

### API 응답 모킹

```typescript
export const 기본: StoryObj<typeof Component> = {
    parameters: {
        msw: {
            handlers: [
                http.get(`*/${apiEndpoint.path}`, () => {
                    return HttpResponse.json({
                        response: [
                            Builder<DataType>()
                                .field1({ value: "data" })
                                .field2({ value: "data" })
                                .build(),
                        ],
                    });
                }),
            ],
        },
    },
    render: () => <Component />,
};
```

### Query Parameter 처리

```typescript
http.get(`*/${apiEndpoint.path}`, ({ request }) => {
    const url = new URL(request.url);
    const param = url.searchParams.get("paramName");

    if (param) {
        return HttpResponse.json({ response: [] });
    }
});
```

## Builder 패턴 사용

테스트 데이터 생성 시 Builder 패턴 활용:

```typescript
Builder<DataType>()
    .field1({ key: "value" })
    .field2({ key: "value" })
    .nested({
        nestedKey: "value",
    })
    .build();
```

## Edge Case 스토리

UI가 깨지거나 예상치 못한 동작이 발생할 수 있는 케이스를 테스트:

```typescript
// 긴 텍스트 케이스
export const 팀_이름_긴_경우: StoryObj<typeof TeamCard> = {
    render: () => {
        const data = Builder<TeamCardProps>()
            .name("AAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
            .build();
        return <TeamCard data={data} />;
    },
};

// 에러 케이스
export const 이미지_로드_실패: StoryObj<typeof Component> = {
    render: () => {
        const data = Builder<Props>()
            .logo("https://invalid-url.com/broken-image.png")
            .build();
        return <Component data={data} />;
    },
};

// 최대/최소 경계값
export const 날짜_최대_길이: StoryObj<typeof Component> = {
    render: () => {
        const data = Builder<Props>()
            .date(new Date("9999-12-31 23:59:59").toString())
            .build();
        return <Component data={data} />;
    },
};
```

## 상태별 스토리 (States)

컴포넌트의 다양한 상태를 별도 스토리로 분리:

```typescript
export const 스켈레톤: StoryObj = {
    render: () => <SkeletonState />,
};

export const 빈상태: StoryObj = {
    render: () => <EmptyState />,
};

export const 에러: StoryObj = {
    render: () => <ErrorState onRetry={() => console.log("Retry clicked")} />,
};
```

## 스토리 구조 체크리스트

-   [ ] Meta 설정 (title, component, parameters)
-   [ ] Story 이름은 한글로 작성
-   [ ] 필요한 Decorator 추가 (layout, provider)
-   [ ] MSW 핸들러로 API 모킹 (필요시)
-   [ ] Builder 패턴으로 테스트 데이터 생성
-   [ ] Edge case 스토리 작성 (긴 텍스트, 에러 등)
-   [ ] 각 Story에 적절한 render 함수 구현
