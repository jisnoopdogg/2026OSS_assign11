// 페이지 전체 레이아웃
import CourseList from "./components/CourseList.jsx";

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="topline">OPEN SOURCE STUDIO · WEEK 11</p>
          <h1>Jinsoo's 26-2 Courses</h1>
          <p className="subtitle">Course Plan and Progress Update</p>
        </div>
        <span className="tag">FALL 2026</span>
      </header>
      <CourseList />
      <footer className="bottom">
        <span>OSS Week 11 · 22100310 박진수</span>
        <span>Built with React</span>
      </footer>
    </main>
  );
}