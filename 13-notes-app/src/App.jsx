import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    console.log(task);
    // here the console is a little slow more like one step behind
    settitle('');
    setDetails('');
  }

  const deleteNote=(index)=>{
    const copyTask=[...task];
    copyTask.splice(index,1);
    // index se delete krna chalu krna aur ek element delete krna
    setTask(copyTask);
  }

  return (
    <div className="min-h-screen bg-black lg:flex text-white">
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className="flex flex-col lg:w-1/2 items-start gap-4 mt-5 ml-5">
        <h1 className="font-medium text-2xl">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          className="px-5 py-2 w-120 font-medium border-2 rounded outline-none"
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Enter Details"
          value={details}
          className="px-5 py-2 w-120 font-medium h-30 items-start border-2 rounded outline-none"
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button
          className="px-5 py-2 font-medium active:scale-95 bg-white text-black border-2 rounded outline-none"
        >Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-4 p-5'>
        <h1 className='text-2xl font-medium mb-2'>Recent Notes</h1>
        <div id='right' className='flex flex-wrap overflow-auto gap-5 mt-5 h-full'>
          {task.map(function (elem, index) {
            return <div key={index} className='flex flex-col justify-center rounded-2xl h-60 w-45 bg-cover text-black p-5 overflow-hidden bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
              <div>
              <h1 className='pt-2 text-xl font-bold mb-3 truncate'>{elem.title}</h1>
              <p className='text-sm leading-relaxed overflow-y-auto h-36'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(index);
              }} className='bg-red-400 w-full text-white rounded active:scale-95 font-medium'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
