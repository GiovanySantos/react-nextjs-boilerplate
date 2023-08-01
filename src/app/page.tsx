import { Component1, Component2 } from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-24">
      <nav>
        <h1>How to do in react?</h1>
        <h2>
          <a href="https://www.youtube.com/@ComofazEmReact">https://www.youtube.com/@ComofazEmReact</a>
        </h2>
      </nav>
      <main>
        <Component1 ABeautifulProp="Hello World" />
        <Component2 />
      </main>
      <footer>Oh My Foot</footer>
    </div>
  );
}
