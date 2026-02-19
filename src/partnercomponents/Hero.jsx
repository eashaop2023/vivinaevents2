import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';


const Hero = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center text-white relative
        bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]">
      <div className="max-w-[900px] px-5 py-16 text-center">

        {/* TOP BADGE */}
        <div className="flex justify-center mb-8">
          <span className="px-4 py-1 text-sm rounded-full bg-red-500/10
              border border-white/20 backdrop-blur-sm">
             <AutoAwesomeOutlinedIcon className="text-red-500"/> Join as a ProShooter
          </span>
        </div>

        {/* HEADING */}
        <h1
          className="text-4xl md:text-[56px] font-semibold leading-tight mb-6">
          Turn Your iPhone Into <br />
          <span className="text-[#ff4d4d]">
            an Income Machine
          </span>
        </h1>

        {/* BUTTON */}
        <button
          className="inline-flex items-center justify-center mx-auto mb-7 px-6 py-1.5
            rounded-full bg-red-500/20 border border-white/20 text-white ">
          <CameraAltOutlinedIcon className="text-red-500"/>Who Are ProShooters?
        </button>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-base leading-relaxed max-w-[760px] mx-auto">
          ProShooters are trained iPhone creators who shoot, edit, and deliver professional Instagram
          reels in just 10 minutes. Whether you're a student, hustler, or creative explorer--ProShoot
          helps you earn through content creation using nothing but your phone. We're live across India,
          Kochi--and growing fast. Join our expanding network of creators worldwide.
        </p>

      </div>
    </section>
  );
};
export default Hero;
