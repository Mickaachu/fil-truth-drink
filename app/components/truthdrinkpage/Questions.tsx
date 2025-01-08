'use client';

import {useState} from 'react'

type QuestionProps = {
    onSendData : (data:string) => void
    closeModal: () => void
    questions: string[]
}

const Question: React.FC<QuestionProps> = ({onSendData, closeModal, questions}) => {
    const [question, setQuestion] = useState<string>('')
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        onSendData(question)
        setQuestion('')
    }


  return (
    <div className='absolute bg-slate-300 w-96 p-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <p onClick={closeModal} className='cursor-pointer'>close</p>
        <div>
            {questions?.map((question) => (
                <p key={question}>{question}</p>
            ))}
        </div>
        <form onSubmit={handleSubmit}>
            <label>Question: <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} /></label>
            <button>Add Question</button>
        </form>
    </div>
  )
}

export default Question