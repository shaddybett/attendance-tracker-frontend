

import { Card, TextInput} from 'flowbite-react';
import { HiMail, HiUser,HiPhone } from 'react-icons/hi';
function Component() {
  return (
    <>
    
    <div style={{  flexDirection: 'column', marginBottom:'100px',marginLeft: '200px',marginRight:'200px', alignItems: 'center', marginTop: '-30px' }}>
     <Card className="max-wl-sm"  style={{ height:'600px',display: 'flex', backgroundColor: "lightblue", marginBlockStart: '60px'}}
     >
     <div className="flex justify-end px-14 pt-3">
       
      </div>
     
      <div className="flex flex-col items-center pb-10" style= {{marginTop:'-80px',flexDirection: 'column',marginBlockStart: '1px',marginBlockEnd:'40px', marginRight: '700px', alignItems: 'center'}}>
        <img
          alt="Bonnie image"
          height="96"
          backgroundColor="white"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-white" style={{ marginTop: '-5px' }}>Moringa Stud...</h5>
        <span className="mb-1  mt  ms-4 text-sm text-gray-500 dark:text-gray-400" style={{ marginTop: '-10px' }} href='#' >Name
        <TextInput id="text4" type="text" rightIcon={HiUser} placeholder="Moringa " required />
        </span>
        <span className="mb-1  space-x- m ms-4 text-sm text-gray-500 dark:text-gray-400" style={{ marginBottom: '-130px' }} href='#' >Email
        <TextInput id="email4" type="email" rightIcon={HiMail} placeholder="name@flowbite.com" required />
        </span>
        <span className="mb-1 mt- ms-4  text-sm text-gray-500 dark:text-gray-400" style={{ marginTop: '-115px' }} href='#' > Phone Number
        <TextInput id="number4" type="number" rightIcon={HiPhone} placeholder="+2547200020" required />
        </span>
        
        
        <h4 className="mb-1" >
           <div className="mt-6 ms-40  flex space-x-20 lp:mt-1">
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Edit
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-cyan-500 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-cyan-600 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-500 dark:focus:ring-gray-700"
          >
            Delete
          </a>
        </div>
        </h4>
      </div>
      
    </Card>
    </div>
    
    </>
  );
}

export default Component;



// import { Card, Dropdown, DarkThemeToggle, Flowbite } from 'flowbite-react';
// function Component() {
//   return (
//     <>
    
//     <div style={{  flexDirection: 'column', marginLeft: '200px',marginRight:'200px', alignItems: 'center', marginTop: '20px' }}>
//     <Card className="max-wl-sm"  style={{ display: 'flex', backgroundColor: "lightblue", marginBlockStart: '40px'}}
//    >
     
     
//       <div className="flex flex-col items-center pb-10" style= {{flexDirection: 'column',marginBlockStart: '-90px',marginBlockEnd:'40px', marginRight: '700px', alignItems: 'center', marginTop: '40'}}>
//         <img
//           alt="Bonnie image"
//           height="96"
//           backgroundColor="white"
//           src="/images/people/profile-picture-3.jpg"
//           width="96"
//           className="mb-3 rounded-full shadow-lg"
//         />
//         <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Moringa Stud...</h5>
//         <span className="mb-1 text-xl text-sm text-gray-500 dark:text-gray-400" href='#' >@outlook.com</span>
//         <h4 className="mb-1" >
//            <div className="mt-4 flex space-x-4 lg:mt-6">
//           <a
//             href="#"
//             className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
//           >
//             Edit
//           </a>
//           <a
//             href="#"
//             className="inline-flex items-center rounded-lg border border-gray-300 bg-cyan-500 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-cyan-600 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-500 dark:focus:ring-gray-700"
//           >
//             Delete
//           </a>
//         </div>
//         </h4>
//       </div>
      
//     </Card>
//     </div>
    
//     </>
//   );
// }

// export default Component;