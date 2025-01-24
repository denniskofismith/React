import profilepic from '../assets/Flux_Dev_create_images_for_this_scenes_for_african_graduate_st_1(1).jpeg'

function Card(){

    return(
        <div className="card">

            <img src={profilepic} alt="My Profile picture "  className='cardImage'/>
            <h2 className='card-title'> Dennis Smith</h2>
            <p className='card-text'>
                I'm a Student at University of Cape Coast 
            </p>

        </div>
    )

}

export default Card