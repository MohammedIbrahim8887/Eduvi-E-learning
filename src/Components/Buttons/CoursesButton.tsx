

function CoursesButton({text, onClick}) {
  return (
    <div>
      <button onClick={onClick} className="bg-slate-100 text-blue-700 hover:bg-orange-700 hover:text-white py-3 px-3 rounded">
    {text}
  </button>
    </div>
  )
}

export default CoursesButton
