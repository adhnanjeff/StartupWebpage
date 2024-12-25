import React from 'react'
import { experiences } from '../constants/index';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const ProjectSection = () => {
  return (
    <section className=' bg-[#00031D] text-white'>
        <div className='py-16'>
            <h1 className='head-text'>What We Have Cooked</h1>
            <div className='mt-12 flex'>
                <VerticalTimeline>
                    {experiences.map((experience) => (
                        <VerticalTimelineElement
                            key={experience.company_name}
                            date={experience.date}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img 
                                        src={experience.icon}
                                        alt={experience.date}
                                        className='w-[60%] h-[60%] object-contain'
                                    />
                                </div>
                            }
                            iconStyle={{
                                background: experience.iconBg
                            }}
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: 'solid',
                                borderBottomColor: experience.iconBg,
                                boxShadow: 'none'
                            }}
                        >
                            <div>
                                <h3 className='text-black text-xl font-semibold'>
                                    {experience.title}
                                </h3>
                                <p className='text-gray-800 font-medium font-base'
                                style={{margin:0}}>
                                    {experience.company_name}
                                </p>
                            </div>
                            <ul className='my-5 text-black list-disc ml-5 space-y-2'>
                                {experience.points.map((point, index) => (
                                    <li key={index} className='pl-1 text-small'>{point}</li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>

    </section>
  )
}

export default ProjectSection
