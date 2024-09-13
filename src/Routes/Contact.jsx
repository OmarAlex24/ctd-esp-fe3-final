import Form from '../Components/Form'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-center text-3xl mb-10'>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
      </div>

      <Form />
    </div>
  )
}

export default Contact