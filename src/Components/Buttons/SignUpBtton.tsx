

function SignUpBtton({text,onclick}) {
  return (
    <div>
      <button onClick={onclick} className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-28 rounded">
    {text}
  </button>
    </div>
  )
}

export default SignUpBtton
