function Portfolio() {

    return(
        <main>

            <div id='projects' className='album py-4 bg-body-tertiary'>
           
            </div> 

           <div className='container'>

         <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
        
         <div className='col'>
        
         <div className='card shadow-sm'>
        
         <div className='card-body'>
                               
         <p className='card-text'>My First Portflio, using HTML, CSS and JS!</p>
                                
        <div className='d-flex justify-content-between align-items-center'>
        
        <div className='btn-group'>
        
           <button id='viewbutton' className='btn btn-primary w-100 py-2 align-items-center' target='_blank' rel='noreferrer'><a href="https://github.com/kenneth-hass/kennys-magnificent-blog">View</a></button>
                                    
            </div>
           </div>
          </div>
        </div>
        </div>
        </div>
            
        <section className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
        
         <div className='col'>
                        
        <div className='card shadow-sm'>

        <div className='card-body'>
                                
        <p className='card-text'>Employee tracker Challenge Using n.js, JS and SQK</p>
                                
        <div className='d-flex justify-content-between align-items-center'>
                                   
         <div className='btn-group'>
                                       
         <button id='viewbutton' className='btn btn-primary w-100 py-2 align-items-center' target='_blank' rel='noreferrer'><a href="https://github.com/kenneth-hass/employeetrack">View</a></button>
        
        </div>
         </div>
         </div>
         </div>
        </div>
         </section>
              
            </div>
        </main>

    )
}

export default Portfolio