import Image from "next/image";
import '../globals.css';

export const metadata = {
  title: 'EcoVista Location',
  description: 'Environment and Climate Change dashboard',
};

export default function RootLayout({
  children,
  aqi,
  temperature,
  weather,
  wind,
}) {
  return (
    <div className="wrapper">
      <div className="overlay"></div>
      <Image
        src="/background.png"
        alt="bg-image"
        className="bg-img"
        width={700}
        height={1200}
      />
      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {temperature}
            {aqi}
            {wind}
          </div>
        </div>
      </main>
    </div>
  );
}
