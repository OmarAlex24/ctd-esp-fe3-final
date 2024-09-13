import Form from '../Components/Form'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-center text-xl mb-10 md:text-3xl'>
        <h2>Want to know more?</h2>
        <p className='text-wrap px-6'>Send us your questions and we will contact you</p>
      </div>
      <Form />
    </div>
  )
}

export default Contact