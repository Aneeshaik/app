import cubeIcon from '../assets/cube.svg'

const Card = ({ title, description }) => {
    return (
        <div className='flex flex-col items-start gap-4 bg-[#FFF] text-left p-5 w-[350px] h-[300px]'>
            <img src={cubeIcon} alt='icon' />
            <h2 className='text-[#28B30E] font-[700] text-[18px]'>{title}</h2>
            <p className='text-[#2D2D2D]'>{description}</p>
        </div>
    )
}

export default Card