import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full justify-between bg-gradient-to-r from-indigo-400 h-screen p-24">
      <div className="flex flex-col justify-between items-center w-1/2">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Image
            className="drop-shadow-[0px_1px_1px_rgba(0,0,0,45.25)] brightness-130"
            src="/IMSLogo.png"
            alt="IMS Logo"
            width={280}
            height={90}
            priority
          />
          <p className="font-montserrat text-[24px] font-semibold text-white">
            Notre site web est
          </p>
          <p className="font-arial font-extrabold text-[38px] text-indigo-900 text-center">
            EN COURS DE CONSTRUCTION
          </p>
          <p className="font-montserrat font-thin text-[28px] max-w-[650px] text-center text-white">
            Nous préparons quelque chose d'extraordinaire et d'exitant pour vous
          </p>
        </div>
        <div className="flex items-end space-x-2 font-montserrat font-thin text-[18px] text-center text-blue-900 border-t-2 border-t-blue-900 pt-4">
          <p>Contacts:</p>
          <Image
            src="/email.svg"
            alt="email Logo"
            width={32}
            height={32}
            priority
          />
          <p>contact@i-medsystem.com</p>
          <p>|</p>
          <Image
            src="/phone.svg"
            alt="email Logo"
            width={32}
            height={32}
            priority
          />
          <p> +21698226026</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-fit">
        <Image
          src="/IRM.png"
          alt="bg image"
          width={600}
          height={400}
          priority
        />
      </div>
    </div>
  );
}
