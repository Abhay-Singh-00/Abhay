import React from 'react';


const CodingProfiles = () => {
  return (
    <div className="bg-black text-white py-10 ">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">💻 Coding Profiles</h2>

        <div className="fa-laptop-code flex flex-col md:flex-row items-center justify-center gap-10 my-10">
          {/* LeetCode */}
          <div className="w-full md:w-2/3 my-10">
            <a
              href="https://leetcode.com/u/Abhay_Singh_02/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://leetcode.card.workers.dev/Abhay_Singh_02?theme=dark&ext=contest"
                alt="LeetCode Stats"
                className="rounded-lg shadow-lg w-full"
              />
            </a>
          </div>

         
         <div className="w-full md:w-2/3">
        {/* GitHub Stats */}
        <a href='https://github.com/Abhay-Singh-00' target='blank' className='w-full '>
        <img
          src="https://github-readme-stats.vercel.app/api?username=Abhay-Singh-00&show_icons=true&theme=tokyonight&count_private=true"
          alt="GitHub Stats"
          className="rounded-lg shadow-lg w-full "
        />
        </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;
