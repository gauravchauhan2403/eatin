const Contact = () => {
  return (
    <div className="contact_us">
      <h1>Contact Us</h1>
      <p>This is our contact us page.</p>
      <p> Email: xxxxx@gmail.com</p>
      <form>
        <input className="inputContact p-2 m-2 cursor-pointer" placeholder="Name" />
        <input className="inputContact p-2 m-2 cursor-pointer" placeholder="message" />
        <button className="ContactButon p-2" >Submit</button>
      </form>
    </div>
  )
}

export default Contact