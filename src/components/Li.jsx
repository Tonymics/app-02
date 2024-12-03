function Li(demo) {


  return (
    <li className="contact-card">
      <h2>{demo.name}</h2>
      <dl>
        <dt>Job</dt>
        <dd>{demo.job}</dd>
        <dt>Email</dt>
        <dd>{demo.email}</dd>
      </dl>
    </li>

    
  )
}

 

export default Li;
