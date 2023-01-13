import React from 'react'

export default function Home() {

  const onmouseover=(e) => {
    e.currentTarget.style.transform="scale(1.1)"
  }
  const onmouseout=(e) => {
     e.currentTarget.style.transform="scale(1)"
   }
  return (
    <>
      <div className='text-center'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5">
              <hr></hr>
            </div>
            <div className="col-2">
              <h1>Services</h1>
            </div>
            <div className="col-5">
              <hr></hr>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 g-4  my-2 ">
            <div className="col" onMouseOver={onmouseover} onMouseOut={onmouseout}>
              <div className="card shadow">
                <img loading='lazy' width={200} height={250} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs6svVG0vNnM1qMy2JD57YQ0nFGQRuMdCEKg&usqp=CAU" className="card-img-top border-bottom border-2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Spring Boot</h5>
                  <p className="card-text">I have good grip on Java Back-end Development using spring and spring boot framework which includes Spring Security , Hibernate , Spring JPA and Spring Microservices.</p>
                </div>
              </div>
            </div>

            <div className="col" onMouseOver={onmouseover} onMouseOut={onmouseout}>
              <div className="card shadow">
                <img loading='lazy' width={200} height={250} src="https://i.ibb.co/bBbh9LJ/node.png" className="card-img-top border-bottom border-2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Node JS</h5>
                  <p className="card-text">As a  developer, I have expertise in building rest API, API documentation ,
                    API authentication and authorization ,API Testing ,Database connection.</p>
                </div>
              </div>
            </div>

            <div className="col" onMouseOver={onmouseover} onMouseOut={onmouseout}>
              <div className="card shadow">
                <img loading='lazy' width={200} height={250} src="https://i.ibb.co/jJLrrcL/flask.jpg" className="card-img-top border-bottom border-2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Flask</h5>
                  <p className="card-text">I can do Backend programming in python flask,Database integration using different database engines out there,
                    Restful APIs development,Write and test APIs on Postman</p>
                </div>
              </div>
            </div>

            <div className="col" onMouseOver={onmouseover} onMouseOut={onmouseout}>
              <div className="card shadow">
                <img loading='lazy' width={200} height={250} src="https://i.ibb.co/HThg9Tc/React.jpg" className="card-img-top border-bottom border-2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">React Native</h5>
                  <p className="card-text">I will develop your app myself from scratch to end, APIs integrations (Node.js/Firebase/Python).React JS, React Native, Redux, any database & other cool libraries to make your app awesome.</p>
                </div>
              </div>
            </div>

            <div className="col" onMouseOver={onmouseover} onMouseOut={onmouseout}>
              <div className="card shadow">
                <img loading='lazy' width={200} height={250} src="https://i.ibb.co/rpSY46P/solidity.png" className="card-img-top border-bottom border-2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Solidity</h5>
                  <p className="card-text">
                    I will develop efficient and well tested smart contracts for your project. Whether it's an NFT Collectible or a DeFi project, I got your back!.</p>
                </div>
              </div>
            </div>

            <div className="col" onMouseOver={onmouseover} onMouseOut={onmouseout}>
              <div className="card shadow">
                <img loading='lazy' width={200} height={250} src="https://i.ibb.co/3WSV2xY/web3.webp" className="card-img-top border-bottom border-2" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">WEB 3</h5>
                  <p className="card-text">I will develop web3 dapps in solidity smart contracts, react, node and integrate wallet.</p>
                </div>
              </div>
            </div>

            
          </div>

          <div className="container my-3 ">
            <div className="row align-items-center">
              <div className="col-4">
                <hr></hr>
              </div>
              <div className="col-4">
                <h1>Other Tech</h1>
              </div>
              <div className="col-4">
                <hr></hr>
              </div>
            </div>
          </div>


          <div className="container shadow">
            <div className="row my-3">
              <div className="col-3">
                <img loading='lazy' width={100} height={100} src="https://i.ibb.co/my8ppZr/mongodb.jpg" className="card-img-top border-bottom border-2" alt="..." onMouseOver={onmouseover} onMouseOut={onmouseout}/>
              </div>
              <div className="col-3">
                <img loading='lazy' width={100} height={100} src="https://i.ibb.co/yycZncZ/mysql.jpg" className="card-img-top border-bottom border-2" alt="..." onMouseOver={onmouseover} onMouseOut={onmouseout}/>
              </div>
              <div className="col-3">
                <img loading='lazy' width={100} height={100} src="https://i.ibb.co/nz3b1G0/python.png" className="card-img-top border-bottom border-2" alt="..." onMouseOver={onmouseover} onMouseOut={onmouseout}/>
              </div>
              <div className="col-3">
                <img loading='lazy' width={100} height={100} src="https://i.ibb.co/0JWGRMd/java.jpg" className="card-img-top border-bottom border-2" alt="..." onMouseOver={onmouseover} onMouseOut={onmouseout}/>
              </div>
              <div className="row my-3 justify-content-center">
                <div className="col-3 align-self-center">
                  <img loading='lazy' width={100} height={100} src="https://i.ibb.co/n07d4j3/firebase.png" className="card-img-top border-bottom border-2" alt="..." onMouseOver={onmouseover} onMouseOut={onmouseout}/>
                </div>
                <div className="col-3 align-self-center">
                  <img loading='lazy' width={100} height={100} src="https://i.ibb.co/tJp3SNC/html5.png" className="card-img-top border-bottom border-2" alt="..." onMouseOver={onmouseover} onMouseOut={onmouseout}/>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </>

  )
}
