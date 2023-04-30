import logoGoogle from "../../assets/Google__G__Logo.svg.webp"
import logoApple from '../../SVGs/AppleIcon.svg';

export const Buttons = (logo) => {

  const logoGenerator=()=>{    
    if(logo.logo==="Google"){      
      return logoGoogle;
    }else{
      return logoApple;
    }
  }

  return (
    <>
      <button className="bg-white mt-5 pt-2 text-button rounded-lg">
        <div className="flex justify-center w-48">
          <img src={logoGenerator()} className="p-1 h-7 ml-1 mb-2"></img>
          <p className=" ml-2 mr-2 mb-1 text-sm">Sign in with {logo.logo}</p>
        </div>
      </button>
    </>
  );
};
