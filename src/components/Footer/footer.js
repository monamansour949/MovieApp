const Footer = () => {
    return (
        <>
       
<footer className="bg-dark text-center text-white">
  
  <div className="container p-4">
   
    <section className="mb-4">
     
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fa fa-facebook-f"></i></a>

     
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fa fa-twitter"></i></a>

    
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fa fa-google"></i></a>

  
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fa fa-instagram"></i></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fa fa-linkedin-in"></i></a>

    
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fa fa-github"></i></a>
    </section>

    <section className="">
      <form action="">
      
        <div className="row d-flex justify-content-center">
     
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
    
          <div className="col-md-5 col-12">
            
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" />
              <label className="form-label" for="form5Example21">Email address</label>
            </div>
          </div>
       
          <div className="col-auto">
     
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
       
        </div>
        
      </form>
    </section>
 
    <section className="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>
    
  
  
  </div>
  
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>

</footer>





         {/*    <footer classNameName="bg-dark text-center text-white">

                <div classNameName="container p-4 pb-0">

                    <section classNameName="mb-4">

                        <a classNameName="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i classNameName="fa fa-facebook-f"></i ></a>

                        <a classNameName="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i classNameName="fa fa-twitter"></i></a>


                        <a classNameName="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i classNameName="fa fa-google"></i></a>

                        <a classNameName="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i classNameName="fa fa-instagram"></i></a>


                    </section>

                </div>

                <div classNameName="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2020 Copyright:
                    <a classNameName="text-white" href="">MDBootstrap.com</a>
                </div>

            </footer> */}
        </>
    );
}
export default Footer;