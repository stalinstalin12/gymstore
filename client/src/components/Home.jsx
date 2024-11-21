import image1 from '/images/gym1.jpg'
import image2 from '/images/GYM2.jpg'
import './style.css'
export default function Home(){
    const products = [
        {
          id: 1,
          name: 'Dumbbells Set',
          price: '$50',
          image: image1,
        },
        {
          id: 2,
          name: 'Barbells',
          price: '$20',
          image: image2,
        },
        {
            id: 3,
            name: 'Adjustable Gym Bench',
            price: '$20',
            image: '/images/gymbench.png',
          },
          {
            id: 4,
            name: 'Yoga Mat',
            price: '$20',
            image: image2,
          },
          {
            id: 5,
            name: 'Barbells',
            price: '$20',
            image: image2,
          },
    ]
    return(
        <>
        <div className="container w-full">
        <section className=" head-bg bg-cover bg-center h-64 flex items-center justify-center text-white " >
        <h2 className="text-4xl font-bold bg-black  p-4 rounded">Welcome to Flex Fitness</h2>
      </section>


      <div className="container mx-auto my-8 px-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{product.name}</h4>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-4 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
        </>
    )
}