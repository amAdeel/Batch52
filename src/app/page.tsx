// function HomePage() {
//   return <div>
//     <h1>اَلسَّلَامُ عَلَیْکُمْ</h1>
//     <p>Hello World i am Adeel</p>
//     </div>;
// }

// export default HomePage;
// pages/index.tsx
function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl text-blue-600 mb-4">اَلسَّلَامُ عَلَیْکُمْ</h1>
      <p className="text-center text-gray-800">Hello World i am Adeel</p>
    </div>
  );
}

export default HomePage;
