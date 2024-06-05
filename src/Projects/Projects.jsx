import React from 'react'
import './Project.css'
import Photo1 from '../Assets/HomePage/set-illustrations-business-office-people-working-table-with-laptop-issues-solving-missing-files-job-is-done-unread-messages-process-work-icons-men-women_188928-41.avif'
import Photo2 from '../Assets/HomePage/download.jpeg'
import Photo3 from '../Assets/HomePage/download (1).jpeg'
import Photo4 from '../Assets/HomePage/images (1).jpeg'
import Photo5 from '../Assets/HomePage/images (2).jpeg'
const Projects = () => 
    {                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  return (
    <div className='Main'>
        <div className='heading'>

            <h1>Hello,Bharath</h1>
            <h3>Lets Make the Most od the day</h3>
                <div className='console'>
                <ul className='table'>
                    <li><a href="#Inbox">Inbox</a></li>
                    <li><a href="#onboarding">Onboarding</a></li>
                    <li><a href="#Leads">Leads</a></li>
                    <li><a href="#Finance">Finance</a></li>
                    <li><a href="#Create">Create    </a></li>
                    <li><a href="WorkFlows">Workflows</a></li>
                    <li><a href="Calender">Calender</a></li>
                </ul>  
                </div>                  
                    </div>

                    <div className='sections'>
                        <div className='Suggested-actions'>
                            <h5>Suggested Actions</h5>
                        </div>
                        <div className='PhotoSections'>
                            <div>
                                <section className='photoblog1'>
                                    <h5>Update</h5>
                                    <h2>12 Unread Messages </h2>
                                    <img src={Photo1} alt="Photo1" />
                                </section>
                                
                            </div>
                            <div>
                                <section className='photoblog2'>
                                    <h5>Update</h5>
                                    <h2>2 New Leads </h2>
                                    <img src={Photo2} alt="Photo2" />
                                </section>
                                
                            </div>
                            <div>
                                <section className='photoblog3'>
                                    <h5>Update</h5>
                                    <h2>1 step left for onboarding </h2>
                                    <img src={Photo3} alt="Photo3" />
                                </section>
                                
                            </div>
                            <div>
                                <section className='photoblog4'>
                                    <h5>Update</h5>
                                    <h2>16 New Finace Updates </h2>
                                    <img src={Photo4} alt="Photo4" />
                                </section>
                                
                            </div>
                            <div>
                                <section className='photoblog5'>
                                    <h5>Update</h5>
                                    <h2>99+ Proposals Sent </h2>
                                    <img src={Photo5} alt="Photo5" />
                                </section>
                                
                            </div>
                        </div>
                </div>

        
    </div>
  )
}

export default Projects
