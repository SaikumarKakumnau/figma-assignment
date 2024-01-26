import './index.css'

const DiscoverContainer = (props) => {
    const {sendData} = props;
    const {time} = sendData;
    // console.log(time);
    let date = new Date(`${time}`)
    console.log(date)
    return(
        <div className='card-container'>
            <div className='top'>
                <h3>Discover how this is perfect to you</h3>
                <div className='content-container'>
                    <div className='image-container'>
                        <img src='https://res.cloudinary.com/dyss1em2x/image/upload/v1706266259/hiring1professor_s_fpdfb2.png' alt='professor' />
                        <p className='para'>online training for professionals</p>
                    </div>
                    <div className='image-container'>
                        <h2>{date.getHours()}</h2>
                        <p className='para'>on-job support for professionals</p>
                    </div>
                    <div className='image-container'>
                        <h2>{date.getMinutes()}</h2>
                        <p className='para'>online training for job seekers or Students</p>
                    </div>
                </div>
            </div>
            <div className='bottom'></div>
        </div>
    )
}

export default DiscoverContainer