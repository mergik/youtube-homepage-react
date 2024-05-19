import React from 'react';
import { TEAMMEMBERS } from './teamMembers';

export const Contact = () => {
  return (
    <div className='flex flex-col items-center font-roboto bg-white'>
        <section className='m-10 w-screen items-center'>
            <h1 className='text-[72px] font-[700]'>
                Meet the team making great stuff.
            </h1>
            <p className='text-[32px] font-thin'>
                We are a complete team comprising of individuals specializing in different aspects of a project lifecycle.
            </p>
        </section>

        <section className='flex flex-wrap m-5 justify-between p- max-w-[1024px] '>
            {
                TEAMMEMBERS.map((member) => (
                    <div key={member.key} className='w-[300px] h-[450px] rounded-lg'>
                        <img className='w-[300px] h-[300px] rounded-xl rounded-b-none bg-green-950' src={`https://avatars.githubusercontent.com/${member.github}`} alt='avatar' />
                        <h2 className='mx-2 font-thin text-[32px]'>{member.name}</h2>
                        <p className='mx-2 mb-2 font-[700] text-[20px]'>{member.role}</p>
        
                        <ul className='flex px-5 justify-between'>
                            <a href={`https://github.com/${member.github}`}><img className='h-5' src="https://img.icons8.com/?size=80&id=dQUAwwnconR8&format=png" alt="Github Logo"/></a>
                            <a href={member.weblink}><img className='h-5' src="https://img.icons8.com/?size=50&id=7867&format=png" alt="Link"/></a>
                            <a href={`mailto:${member.email}`}><img className='h-5' src="https://img.icons8.com/?size=48&id=LPcVDft9Isqt&format=png" alt="Email"/></a>
                            <a href={`https://wa.me/${member.whatsapp}`}><img className='h-5' src="https://img.icons8.com/?size=80&id=Jneo9ShAzJw7&format=png" alt="WhatsApp Logo"/></a>
                            <a href={`https://x.com/${member.twitter}`}><img className='h-5' src="https://img.icons8.com/?size=50&id=phOKFKYpe00C&format=png" alt="Twitter Logo"/></a>
                            <a href={`https://www.linkedin.com/in/${member.linkedin}`}><img className='h-5' src="https://img.icons8.com/?size=48&id=13930&format=png" alt="LinkedIn Logo"/></a>
                        </ul>
                    </div>
                ))
            }
        </section>
    </div>
  )
}