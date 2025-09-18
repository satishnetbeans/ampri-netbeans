const SocialIcons = ({ isAdmin }) => (
  <div className={`flex justify-center gap-6 `}>
    <div className='h-7 w-[2.3rem] rounded-full bg-white  overflow-hidden flex items-center justify-center'>
      <a href="https://www.facebook.com/csirampri"><img src="https://ampri.res.in/wp-content/uploads/2020/11/download-260x191.png" alt="Facebook" className="h-7 cursor-pointer " /> </a>
    </div>

    <div className='h-7 w-[2.3rem] rounded-full bg-white overflow-hidden flex items-center justify-center'>
      <a href="https://www.youtube.com/c/CSIRAMPRIBhopal"><img src="https://www.interstellarrift.com/wiki/images/d/d8/Youtube-logo-png-photo-0.png" alt="YouTube" className="h-12  cursor-pointer " /></a>
    </div>

    <div className='h-7 w-[2.3rem] rounded-full bg-white overflow-hidden flex items-center justify-center'>
      <a href="https://x.com/csirampribhopal"><img src="https://ampri.res.in/wp-content/uploads/2020/11/Twitter-featured-300x244.png" alt="Twitter" className="h-8  cursor-pointer rounded-full" /></a>
    </div>

    <div className='h-7 w-[2.3rem] rounded-full bg-white overflow-hidden flex items-center justify-center'>
      <a href="https://www.instagram.com/csirampribhopal/#"><img src="https://ampri.res.in/wp-content/uploads/2025/06/InstaLogo.jpg" alt="Instagram" className="h-8  cursor-pointer  rounded-full" /></a>
    </div>

  </div>
);

export default SocialIcons

