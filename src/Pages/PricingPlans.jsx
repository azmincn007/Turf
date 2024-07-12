import React from 'react'

function PricingCard({ price, plan, icon, features, colorScheme }) {
  return (
    <div className='card bg-white rounded-lg shadow-md overflow-hidden'>
      <div className="price text-[40px] font-semibold flex justify-center py-4 text-black">${price}</div>
      <div className={`plan ${colorScheme.bgColor} p-4 flex flex-col items-center justify-center`}>
        <img src={icon} alt={plan} className="w-16 h-10 mb-2" />
        <h3 className="text-xl font-semibold text-white">{plan}</h3>
      </div>
      
      <div className="p-4">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <p className="py-2 flex justify-center">{feature}</p>
            {index < features.length - 1 && <div className='bg-gray-200 w-full h-[1px]'></div>}
          </React.Fragment>
        ))}
      </div>
      
      <div className="p-4 flex justify-center">
        <button className={`rounded-xl before: ${colorScheme.buttonColor} text-white py-2 rounded-md hover:opacity-90 transition-opacity`}>
          Buy Now
        </button>
      </div>
    </div>
  )
}

function PricingPlans() {
  const pricingData = [
    {
      price: 17,
      plan: "Basic",
      icon: "https://gnodesign.com/templates/swimmerland/images/icons/basic.svg",
      features: [
        "Up to 6 hours in our pool",
        "Access to basic facilities",
        "Locker rental",
        "Swimming lessons (beginner)",
        "Weekday access only"
      ],
      colorScheme: {
        bgColor: "bg-blue-300",
        buttonColor: "bg-blue-500"
      }
    },
    {
      price: 25,
      plan: "Standard",
      icon: "https://gnodesign.com/templates/swimmerland/images/icons/pro.svg",
      features: [
        "Unlimited pool access",
        "Access to all facilities",
        "Locker rental",
        "Swimming lessons (all levels)",
        "Weekend access included"
      ],
      colorScheme: {
        bgColor: "bg-[#f69504]",
        buttonColor: "bg-[#f69504]"
      }
    },
    {
      price: 39,
      plan: "Premium",
      icon: "https://gnodesign.com/templates/swimmerland/images/icons/basic.svg",
      features: [
        "Unlimited pool access",
        "Access to all facilities",
        "Personal locker",
        "Private swimming lessons",
        "24/7 access + guest passes"
      ],
      colorScheme: {
        bgColor: "bg-[#9f76ab]",
        buttonColor: "bg-[#9f76ab]"
      }
    }
  ];

  return (
    <div className='bg-[#ededed] flex justify-center flex-col items-center p-8'>
      <h2 className='text-3xl font-bold mb-4'>Pricing Plans</h2>
      <img className="w-[70px] mb-4" src="https://gnodesign.com/templates/swimmerland/images/shapes/wave-blue.svg" alt="" />
      <p className='w-[70%] mx-auto text-center mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus orci. Nulla dictum semper leo. Suspendisse dui magna, tincidunt et nisi id, aliquam ultrices odio. Nunc non ipsum ac mauris facilisis placerat a quis magna.</p>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-[70%] mx-auto'>
        {pricingData.map((card, index) => (
          <PricingCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default PricingPlans