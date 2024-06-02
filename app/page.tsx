import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen bg-[url('/bg.png')] bg-opacity-10 bg-cover bg-center p-24">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Image
          className="drop-shadow-[35px_35px_35px_rgba(0,0,0,45.25)] brightness-130"
          src="/IMSLogo.png"
          alt="IMS Logo"
          width={280}
          height={90}
          priority
        />
        <p className="font-montserrat text-[24px] font-semibold text-white">
          Notre site web est
        </p>
        <p className="font-arial font-extrabold text-[38px] text-orange-500">
          EN COURS DE CONSTRUCTION
        </p>
        <p className="font-montserrat font-thin text-[28px] max-w-[650px] text-center text-white">
          Nous préparons quelque chose d'extraordinaire et d'exitant pour vous.
        </p>
      </div>
      <div className="flex items-end space-x-2 font-montserrat font-thin text-[18px] text-center text-white border-t-2 border-t-white pt-4">
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
  );
}
