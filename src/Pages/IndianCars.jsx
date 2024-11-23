
import Card from '../Components/Cards/card';
import Buttons from './Buttons';
function IndianCars() {
  const carData = [
    {
      img: 'https://th.bing.com/th/id/OIP.eRPz5a4fxAuGpAOfApG7cgHaEI?rs=1&pid=ImgDetMain',
      name: 'XUV300',
    },
    {
      img: 'https://wallpaperaccess.com/full/94336.jpg',
      name: 'Tata Punch',
    },
    {
      img: 'https://th.bing.com/th/id/OIP.Jb23N5V4T35wC1t-epy4ZAAAAA?rs=1&pid=ImgDetMain',
      name: 'Tata Safari',
    },
    {
      img: 'https://www.foxpublication.com/wp-content/uploads/2022/10/maruti-suzuki-ignis-1280x720-min.webp',
      name: 'Wagon R',
    },
    {
      img: 'https://mediacloud.carbuyer.co.uk/image/private/s--guRM1Lfa--/v1603277599/carbuyer/2020/10/Hyundai%20i20%20hatchback%20official%20UK%20CB%202020-14.jpg',
      name: 'Hyundai I20',
    },
    {
      img: 'https://static.javatpoint.com/top10-technologies/images/top-10-hatchback-cars-in-india6.png',
      name: 'Hyundai',
    },
  ];

  return (
    <div className='container m-auto'>
      <Buttons/>
      <div className="main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-[84rem] m-auto ">
        {carData.map((car, index) => (
          <Card key={index} img={car.img} name={car.name} />
        ))}
        <button className="bg-black relative left-[33rem] w-52 text-white px-6 py-2 rounded-lg mt-8 mb-4transform hover:scale-105 transition duration-300 ease-in-out">
          See all Cars
        </button>
      </div>
    </div>
  );
}

export default IndianCars;
