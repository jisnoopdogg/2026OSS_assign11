22100310 박진수
# Assignment 11


## Project Information
**프로젝트 소개**:

**주요 기능**
1.
2.
3.

**Original Project**
| 항목 | 내용 |
| --- | --- |
| 원본 Sample Project URL | |
| 원본 README | README_ORIGINAL.md에서 확인 가능 |


## Installation
<!-- week10 참고 시작 -->
```bash
git clone https://github.com/2026-2-OSS/assign11-c02-22100310
cd assign11-c02-22100310
npm install
npm run dev
```
프로젝트를 clone하고 실행하는 절차를 README.md에서 확인하여 실행합니다. package.json의 scripts 부분에서 실행에 대한 정보를 확인하고 해당 방법으로 실행합니다.
<!-- week10 참고 끝 -->

**실행 화면**
![실행화면](./img/playscreen.png)


## Source Code Exploration
**Project Structure** <br>
CourseList.jsx 파일은 useState로 상태 관리, 그리고 삭제/추가 등의 핵심 기능을 담당합니다. 
CourseItem.jsx는 Props를 전달받아 과목 한 줄의 내용을 그리는 컴포넌트입니다.
courses.js는 초기 데이터가 담겨 DB를 대신하는 배열을 관리합니다.

**Component & Props** <br>
CourseList가 부모, CourseItem이 자식 역할을 합니다. CourseList에서 .map으로 과목 수만큼 자식을 만들어 props를 통해 자식에게 정보를 넘깁니다. CourseItem은 props로 받은 데이터를 사용하고, 콜백을 통해 이벤트는 부모로 다시 올라갑니다.

**State & Event** <br>
상태 관리는 map을 사용하여 render를 할 때마다 새 배열을 만들어 관리합니다.
삭제 버튼에서 onClick을 통해 이벤트가 발생하면 prev => prev.filter를 통해 누른 id를 제외한 새 배열을 만드는 방식으로 동작합니다.

**Code Analysis** <br>

```
function handleDelete(id) {
  if (!window.confirm("이 과목을 삭제하시겠습니까?")) return;
  setCourses((previous) => previous.filter((course) => course.id !== id));
}
```
Delete 함수입니다. filter를 사용하여 누른 과목을 제외한 다른 과목들을 남긴 새 배열을 생성합니다.

```
{courses.map((course) => (
  <CourseItem key={course.id} course={course}
    onDelete={handleDelete} onToggle={handleToggle} />
))}
```
렌더링과 props 전달을 담당합니다. map으로 배열을 컴포넌트 목록으로 바꾸고, key를 사용하여 함수를 props로 자식에 보냅니다.


## Customizing
| 구분 | 수정 파일 | 수정 내용 |
| --- | --- | --- |
| 초기 과목 데이터 변경 | data/courses.js | 아래 사진과 같이 내가 수강하는 과목으로 데이터 변경|
| 프로젝트 제목 및 설명 변경 | App.jsx | 제목: Jinsoo's 26-2 Courses <br> 설명: Course Plan and Progress Update <br> 우측 상단 태그: FALL 2026 <br> Footer: OSS Week 11 · 22100310 박진수/Built with React|
| CSS Style | App.css | - delete 버튼 색상 및 hover시 글씨와 버튼 색상 변경 <br>  - 전체 background color 색상 변경 <br> - 완료 및 진행 중 칸 background color 추가|

**수정화면**
![수정화면](./img/editscreen.png)


## Feature Extension
### ① Course Registration (Create)
```jsx

```
**동작 결과**


### ② Course Completion (Update)
```jsx

```
**동작 결과**


### ③ 선택 기능
```jsx

```
**동작 결과**



## Deployment
| 항목 | URL |
| --- | --- |
| GitHub | https://github.com/2026-2-OSS/assign11-c02-22100310 |
| Vercel | |


## Weekly Review - Week 11

### Key Learning
1.
2.
3.

### Problem & Solution
- **Problem**:
- **Solution**:

### AI 활용 및 느낀 점
<!-- week10 참고 시작 (이번 주 내용으로 수정 필요) -->
파일을 읽으며 모르는 기능들을 AI에게 물어봐가며 코드 구조를 이해하였습니다. 이외의 모든 README 작성과 코드 수정은 직접 했습니다.
<!-- week10 참고 끝 -->
