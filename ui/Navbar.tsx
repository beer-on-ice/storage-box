'use client'; // use router must be used in client component
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const path = usePathname(); // i think there's no that type thing :))
  return <>
    <nav
      className='w-[100%] h-[100%] backdrop-blur-md sm:backdrop-blur-none bg-mobile-bg-nav dark:bg-mobile-nav-dark  sm:bg-nav sm:dark:bg-nav-dark flex flex-row sm:flex-col justify-center items-center'>
      <Link href={'/'} prefetch={false}
            className={'flex items-center justify-center sm:justify-start cursor-default w-1/3 sm:w-5/6 px-2 py-2 rounded-md select-none text-gray-700 dark:text-gray-200 ' + (path !== '/about' ? 'nav-active' : '')}>
        <svg className='fill-gray-600 dark:fill-zinc-400' version='1.1' xmlns='http://www.w3.org/2000/svg'
             xmlnsXlink='http://www.w3.org/1999/xlink'
             width='18.4453' height='15'>
          <g>
            <path
              d='M6.99219 10.6328C6.99219 10.875 7.17969 11.0703 7.42969 11.0703C7.66406 11.0703 7.85938 10.875 7.85938 10.6328L7.85938 9.01562C7.85938 8.78125 7.66406 8.58594 7.42969 8.58594C7.17969 8.58594 6.99219 8.78125 6.99219 9.01562ZM8.78125 10.6328C8.78125 10.875 8.97656 11.0703 9.22656 11.0703C9.46094 11.0703 9.65625 10.875 9.65625 10.6328L9.65625 9.01562C9.65625 8.78125 9.46094 8.58594 9.22656 8.58594C8.97656 8.58594 8.78125 8.78125 8.78125 9.01562ZM10.5781 10.6328C10.5781 10.875 10.7734 11.0703 11.0156 11.0703C11.2578 11.0703 11.4531 10.875 11.4531 10.6328L11.4531 9.01562C11.4531 8.78125 11.2578 8.58594 11.0156 8.58594C10.7734 8.58594 10.5781 8.78125 10.5781 9.01562ZM12.375 10.6328C12.375 10.875 12.5625 11.0703 12.8125 11.0703C13.0547 11.0703 13.2422 10.875 13.2422 10.6328L13.2422 9.01562C13.2422 8.78125 13.0547 8.58594 12.8125 8.58594C12.5625 8.58594 12.375 8.78125 12.375 9.01562ZM14.1719 10.6328C14.1719 10.875 14.3594 11.0703 14.6094 11.0703C14.8438 11.0703 15.0391 10.875 15.0391 10.6328L15.0391 9.01562C15.0391 8.78125 14.8438 8.58594 14.6094 8.58594C14.3594 8.58594 14.1719 8.78125 14.1719 9.01562ZM0 9.82812C0 11.8125 1.53906 13.3516 3.71094 13.3516L14.7344 13.3516C16.9062 13.3516 18.4453 11.8125 18.4453 9.82812C18.4453 9.24219 18.2734 8.71875 18.0703 8.22656L15.4375 1.90625C14.9219 0.65625 13.8594 0.015625 12.4609 0.015625L5.98438 0.015625C4.58594 0.015625 3.52344 0.65625 3.00781 1.90625L0.367188 8.22656C0.171875 8.71094 0 9.24219 0 9.82812ZM1.25781 9.82812C1.25781 8.53906 2.23438 7.5625 3.71094 7.5625L14.7344 7.5625C16.2109 7.5625 17.1875 8.53906 17.1875 9.82812C17.1875 11.2734 16.2109 12.0938 14.7344 12.0938L3.71094 12.0938C2.23438 12.0938 1.25781 11.1172 1.25781 9.82812ZM2.52344 6.50781L4.22656 2.22656C4.52344 1.48438 5.16406 1.10938 6.04688 1.10938L12.3984 1.10938C13.2812 1.10938 13.9297 1.48438 14.2188 2.22656L15.9219 6.50781C15.5547 6.375 15.1641 6.30469 14.7344 6.30469L3.71094 6.30469C3.28125 6.30469 2.88281 6.375 2.52344 6.50781Z'
            />
          </g>
        </svg>
        <span className='text-xs px-2'>/dev/disk0</span>
      </Link>
      <Link href='/about'
            className={'flex items-center justify-center sm:justify-start cursor-default w-1/3 sm:w-5/6 px-2 py-2 rounded-md select-none text-gray-700 dark:text-gray-200 ' + (path === '/about' ? 'nav-active' : '')}>
        <div>
          <svg className='fill-gray-600 dark:fill-zinc-400' version='1.1' xmlns='http://www.w3.org/2000/svg'
               xmlnsXlink='http://www.w3.org/1999/xlink'
               width='18.4453' height='17'>
            <g>
              <path
                d='M7.96875 15.9375C12.3281 15.9375 15.9375 12.3203 15.9375 7.96875C15.9375 3.60938 12.3203 0 7.96094 0C3.60938 0 0 3.60938 0 7.96875C0 12.3203 3.61719 15.9375 7.96875 15.9375ZM7.96875 14.6094C4.28125 14.6094 1.33594 11.6562 1.33594 7.96875C1.33594 4.28125 4.27344 1.32812 7.96094 1.32812C11.6484 1.32812 14.6094 4.28125 14.6094 7.96875C14.6094 11.6562 11.6562 14.6094 7.96875 14.6094ZM6.60156 12.3438L9.78125 12.3438C10.1016 12.3438 10.3516 12.1094 10.3516 11.7891C10.3516 11.4844 10.1016 11.2422 9.78125 11.2422L8.8125 11.2422L8.8125 7.26562C8.8125 6.84375 8.60156 6.5625 8.20312 6.5625L6.73438 6.5625C6.41406 6.5625 6.16406 6.80469 6.16406 7.10938C6.16406 7.42969 6.41406 7.66406 6.73438 7.66406L7.57031 7.66406L7.57031 11.2422L6.60156 11.2422C6.28125 11.2422 6.03125 11.4844 6.03125 11.7891C6.03125 12.1094 6.28125 12.3438 6.60156 12.3438ZM7.89844 5.26562C8.46875 5.26562 8.91406 4.8125 8.91406 4.24219C8.91406 3.67188 8.46875 3.21875 7.89844 3.21875C7.33594 3.21875 6.88281 3.67188 6.88281 4.24219C6.88281 4.8125 7.33594 5.26562 7.89844 5.26562Z'
              />
            </g>
          </svg>

        </div>
        <span className='text-xs px-2'>/dev/about</span>
      </Link>
    </nav>
  </>;
}