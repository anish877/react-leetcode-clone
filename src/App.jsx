import { Check, CircleXIcon, FilterIcon, GitForkIcon, Lock, LockIcon, PanelLeftDashed, PlayIcon, RotateCcwIcon } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import randomSentence from 'random-sentence'

const App = () => {
  const [showSideBar,setShowSideBar] = useState(true)
  return (
    <div className='flex w-full bg-gray-950 overflow-visible'>
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <MainContent showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
    </div>
  )
}

function SideBar({showSideBar,setShowSideBar}){
  return(
    <div className={`md:h-screen h-full transition-all opacity-100 duration-700 bg-gray-800 ${!showSideBar?"w-0 p-0 [&>*:nth-child(even)]:opacity-0 [&>*:nth-child(odd)]:opacity-0":"w-96"} flex flex-col p-5 gap-5 md:relative fixed z-10`}>
      <div className='flex justify-between items-center text-white'>
        <h1>My Lists</h1>
        <button onClick={()=>setShowSideBar(!showSideBar)}>
          <PanelLeftDashed className='h-5'></PanelLeftDashed>
        </button>
      </div>
      <p className='text-white text-md'>Create By Me</p>
      <div className='flex justify-between text-white bg-gray-600 p-3 rounded-lg text-sm items-center'>
        <div className='flex gap-2'>
          <img src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" className='bg-white h-6 rounded-md' />
          <p>Favourite</p>
        </div>
        <Lock className='h-5'/>
      </div>
    </div>
  )
}

function MainContent({showSideBar,setShowSideBar}){
  const typeArray = ["Easy","Med.","Hard"]
  const [checkedType,setCheckedType] = useState(["Easy","Med.","Hard"]) 
  const easyRef = useRef()
  const medRef = useRef()
  const hardRef = useRef()
  const wrapperRef = useRef()
  const [questionArray,setQuestionArray] = useState([])
  const [filterDivIsShowing,setFilterDivIsShowing] = useState(false)
  useEffect(()=>{
    const array = Array(11).fill().map(()=>({
      number: Math.floor(Math.random()*100),
      name: randomSentence({words:5}),
      type: typeArray[Math.floor(Math.random()*3)]
    }))
    setQuestionArray(array)
  },[])

  const handleChecking = ()=>{
    const array = [easyRef.current.checked?"Easy":null,hardRef.current.checked?"Hard":null,medRef.current.checked?"Med.":null]
    if(!(easyRef.current.checked || hardRef.current.checked || medRef.current.checked)){
    setCheckedType(["Easy","Med.","Hard"])
    }
    else{
      setCheckedType(array)
    }
  }

  const handleReset = ()=>{
    setCheckedType(["Easy","Med.","Hard"])
    easyRef.current.checked = false
    hardRef.current.checked = false
    medRef.current.checked = false
  }

  useEffect(()=>{
    function handleClickOutsideEvent(event){
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)){
        setFilterDivIsShowing(false)
      }
    }
    document.addEventListener("mousedown",handleClickOutsideEvent)
    return ()=>{
      document.removeEventListener("mousedown", handleClickOutsideEvent)
    }
  },[wrapperRef])

  return(
    <div className='md:grid flex flex-col md:grid-cols-12 h-full pt-10 pb-36 pr-10 pl-24 gap-10 w-full'>
      <div className='col-span-5 bg-gray-800 mb-10 rounded-2xl pb-5'>
        {!showSideBar&&
          <PanelLeftDashed onClick={()=>setShowSideBar(!showSideBar)} className='text-white -translate-x-10 translate-y-3 z-50 absolute'></PanelLeftDashed>}
        <img src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" className='bg-white rounded-xl p-2 ml-8 mr-8 mt-5 mb-5' />
        <div className='flex-col gap-5 flex ml-8 mr-8'>
          <h1 className='text-white text-4xl'>Favourite</h1>
          <div className='flex gap-3 text-white sm:text-lg text-sm'>
            <p>Anish</p>
            <p>19 question</p>
            <div className='flex gap-0.5'>
              <LockIcon className='h-5'/>
              <p>Private</p>
            </div>
          </div>
          <div className='flex text-white gap-5 items-center pb-8 sm:p-0'>
              <button className='flex gap-1 items-center justify-center bg-white text-black rounded-3xl py-1 px-4'>
                <PlayIcon className='h-5 fill-black' />
                Practice
              </button>
              <GitForkIcon className='h-5 rounded-full border-white' />
          </div>
          <hr className=' text-gray-500 mt-3 hidden sm:block'/>
          <div className='hidden sm:block'>
            <div className='flex justify-between mt-1 text-gray-400 text-sm'>
              <p>Progress</p>
              <RotateCcwIcon className='h-4'/>
            </div>
            <div className='grid grid-cols-12 gap-3 h-full mt-5'>
              <div className='col-span-8 flex justify-center items-center flex-col bg-gray-600 pt-5 text-white rounded-lg'>
                <div className='flex flex-col justify-center items-center rounded-full border-green-500 border-l-8 border-r-8 border-t-8 border-b-8 h-20 w-20 p-20'>
                  <p><span className='text-4xl'>19</span>/19</p>
                  <p className='flex justify-center items-center'><Check className='text-green-400 h-5' />Solved</p>
                </div>
                <p className='-translate-y-7 py-1 px-2 bg-gray-600 text-gray-400 border-none text-sm'>0 Attempting</p>
              </div>
              <div className='col-span-4 flex flex-col gap-2 text-white'>
                <div className='bg-gray-600 h-full flex flex-col justify-center items-center rounded-md'>
                  <p className='text-green-400'>Easy</p>
                  <p className='text-sm'>11/11</p>
                </div>
                <div className='bg-gray-600 h-full flex flex-col justify-center items-center rounded-md'>
                  <p className='text-yellow-400'>Med.</p>
                  <p className='text-sm'>7/7</p>
                </div>
                <div className='bg-gray-600 h-full flex flex-col justify-center items-center rounded-md'>
                  <p className='text-red-400'>Hard</p>
                  <p className='text-sm'>1/1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-7 [&>*:nth-child(odd)]:bg-gray-950 [&>*:nth-child(even)]:bg-gray-800'>
        <div className='pb-3 flex gap-3'>
          <button className='flex gap-1 p-2 bg-white justify-center items-center rounded-2xl px-3 py-1.5' onClick={()=>setFilterDivIsShowing(!filterDivIsShowing)}>
            <FilterIcon className='h-5 fill-black'/>
            Filter
          </button>
          {easyRef.current?.checked?
          <div className='text-white inline-block border border-gray-500 w-auto rounded-2xl'>
            <div className='flex flex-row px-3 py-1 gap-2 items-center'>
              <p>Easy</p>
              <CircleXIcon className='fill-gray-500 text-gray-900 h-5' onClick={()=>{
                easyRef.current.checked=false
                handleChecking()
              }}/>
            </div>
          </div>:null}
          {medRef.current?.checked?
          <div className='text-white inline-block border border-gray-500 w-auto rounded-2xl'>
            <div className='flex flex-row px-3 py-1 gap-2 items-center'>
              <p>Medium</p>
              <CircleXIcon className='fill-gray-500 text-gray-900 h-5' onClick={()=>{
                medRef.current.checked=false
                handleChecking()
              }}/>
            </div>
          </div>:null}
          {hardRef.current?.checked?
          <div className='text-white inline-block border border-gray-500 w-auto rounded-2xl'>
            <div className='flex flex-row px-3 py-1 gap-2 items-center'>
              <p>Hard</p>
              <CircleXIcon className='fill-gray-500 text-gray-900 h-5' onClick={()=>{
                hardRef.current.checked=false
                handleChecking()
              }}/>
            </div>
          </div>:null}
        </div>
          <div className={`text-white bg-gray-700 p-5 flex flex-col gap-7 rounded-xl mt-2 absolute z-50 w-auto text-sm ${!filterDivIsShowing?"hidden":null}`} ref={wrapperRef}>
            <div className='flex flex-col gap-2'>
              <h1 className='text-lg'>Status</h1>
              <div className='flex gap-6 items-center'>
                <div className='flex gap-2'>
                  <input type="checkbox" id='todo'/>
                  <label for="todo">Todo</label>
                </div>
                <div className='flex gap-2 items-center'>
                  <input type="checkbox"id='todo'/>
                  <label for="todo">Solved</label>
                </div>
                <div className='flex gap-2 items-center'>
                  <input type="checkbox" id='todo'/>
                  <label for="todo">Attempted</label>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-lg'>Difficulty</h1>
              <div className='flex gap-6 items-center'>
                <div className='flex gap-2'>
                  <input type="checkbox" id='easy' onChange={()=>handleChecking()} ref={easyRef}/>
                  <label for="easy" className='text-green-400' >Easy</label>
                </div>
                <div className='flex gap-2 items-center'>
                  <input type="checkbox"id='medium'onChange={()=>handleChecking()} ref={medRef}/>
                  <label for="medium" className='text-yellow-400'>Medium</label>
                </div>
                <div className='flex gap-2 items-center'>
                  <input type="checkbox" id='hard'onChange={()=>handleChecking()} ref={hardRef}/>
                  <label for="hard" className='text-red-400'>Hard</label>
                </div>
              </div>
            </div>
            <button className='flex gap-1 w-full bg-gray-500 rounded-xl justify-center items-center py-2 px-5 text-sm' onClick={handleReset}><RotateCcwIcon className='h-5'/>Reset</button>
          </div>
      
        {questionArray.map(item=>{
          return checkedType.includes(item.type)?
          (
            <div className='p-4 text-white rounded-2xl flex justify-between'>
              <div className='flex gap-2 items-center justify-start'>
                <Check className='h-5 text-green-400'/>
                <p>{item.number}. {item.name}</p>
              </div>
              <div>
                <p className={
                  `${item.type==="Easy"?"text-green-400":item.type==="Hard"?"text-red-400":"text-yellow-400"}`
                  }>{item.type}</p>
              </div>
            </div>
          ):null
        })}
        
      </div>
    </div>
  )
}

export default App
