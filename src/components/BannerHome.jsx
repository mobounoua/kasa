import img from '../assets/images/bannerHome.png'

const BannerHome = () => {
    return(
        <div className='banner'>              
            <img src={img} alt="banner"/>
            <div className="dark-filter-home"></div>
            <h1>
                Chez vous, 
                partout et ailleurs
            </h1>
        </div>
    ) 
}
export default BannerHome