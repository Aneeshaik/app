import Card from "./Card";
import image from '../assets/Rectangle 4403.svg'

const Body = () => {
    const cardData = [
        {
          title: "Automated Data Collection",
          description: "Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting."
        },
        {
          title: "Monitoring & Reporting",
          description: "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting."
        },
        {
          title: "Monitoring & Reporting",
          description: "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting."
        },
        {
          title: "Simplified Certification Process",
          description: "Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance."
        },
        {
          title: "AI-Driven Insights",
          description: "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making."
        },
        {
          title: "AI-Driven Insights",
          description: "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making."
        }
      ];
      
    return (
        <div>
            <p className="text-[#28B30E] font-[700]">FEATURES</p>
            <h1 className="text-[#2D2D2D] font-[700]">Why Carbon Crunch?</h1>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
                {cardData.map((card) => (
                    <Card 
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-4 mx-auto relative">
                <img className="h-[90vh]" src={image} alt="image" />
                <div className="">
                    {/* Green Box - Top */}
                    <div className="absolute top-[150px] right-[150px] bg-[#28B30E] z-30 p-2 rounded-lg w-52 text-left">
                        <p className="text-4xl font-[700] text-[#222222]">3X</p>
                        <p className="text-sm text-[#2D2D2D]">
                            ESG High Performers Deliver A Higher Total Shareholder Return
                        </p>
                    </div>

                    {/* Black Box - Middle */}
                    <div className="absolute top-[250px] right-[240px] z-20 bg-[#3A3A3A] text-white p-2 rounded-lg w-64 text-left">
                        <p className="text-3xl font-bold">98%</p>
                        <p className="text-sm">
                            Of CEOs Agree Sustainability Is Their Responsibility
                        </p>
                    </div>

                    {/* Black Box - Bottom Right */}
                    <div className="absolute top-[330px] right-[160px] z-10 bg-[#2D2D2D] text-white text-right p-2 rounded-lg w-48">
                        <p className="text-3xl font-bold">18%</p>
                        <p className="text-xs">
                            Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By
                            2050
                        </p>
                    </div>

                    {/* White Box - Bottom Left */}
                    <div className="absolute top-[410px] right-[250px] bg-white text-[#28B30E] text-left p-4 rounded-lg w-64 shadow-lg">
                        <p className="text-3xl font-bold">37%</p>
                        <p className="text-sm">
                            Of The World’s Largest Companies Have A Public Net Zero Target.
                            Nearly All Are Off Track
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body