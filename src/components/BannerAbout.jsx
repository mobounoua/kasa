import img from '../assets/images/bannerAbout.png'

const BannerAbout = () => {
    return(
        <div className='banner'>              
            <img src={img} alt="banner"/>
            <div className="dark-filter-about"></div>
        </div>
    ) 
}
export default BannerAbout