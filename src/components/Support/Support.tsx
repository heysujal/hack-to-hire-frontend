import GradualSpacing from '../GradualSpacing/GradualSpacing'

const Support = () => {
  return (
    <div>
<GradualSpacing
      className="mt-6 mb-10 font-display text-center text-4xl font-bold tracking-[-0.1em]  text-indigo-900"
      text="Support"
    />

<div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
       <h6>
            For any project related queries
       </h6>
       <p>
        Email : 
        <a target='_blank' className='text-blue-800' href="mailto:sujalgupta6100@gmail.com">sujalgupta6100@gmail.com</a>

       </p>
        <p >
            GitHub(frontend) : <a target='_blank' className='text-blue-800' href="https://github.com/heysujal/hack-to-hire-frontend">https://github.com/heysujal/hack-to-hire-frontend</a>
        </p>
        <p>
            GitHub(backend) : <a target='_blank' className='text-blue-800' href="https://github.com/heysujal/hack-to-hire-backend">https://github.com/heysujal/hack-to-hire-backend</a>
        </p>
      </div>

    </div>
  )
}

export default Support