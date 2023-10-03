import React from 'react'
import "./Footer.css"
function Footer() {
  return (
   <>
    <div className="container my-5 justify-content-center">
  <div className=" justify-content-center">
    <div className="col-lg-9">
      <h1 className="cform mb-3">Your Contact Info</h1>
      <form>
        <div className="row">
          <div className="col">
            <label htmlFor="your-name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="your-name" name="your-name" required/>
          </div>
         <br/>
          <div className="col">
            <label htmlFor="your-email" className="form-label">Your Email</label>
            <input type="email" className="form-control" id="your-email" name="your-email" required/>
          </div>
          <br/>
          <div className="col-12">
            <label htmlFor="your-message" className="form-label">Your Message</label>
            <textarea className="form-control" id="your-message" name="your-message" rows="5" required></textarea>
          </div>
          <br/>
          <div className="col-12 my-5">
            <div className="row">
              <div className="col-md-6">
                <button data-res="<?php echo $sum; ?>" type="submit" className="btn btn-dark w-100 fw-bold" >Send</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>


</>
  )
}

export default Footer