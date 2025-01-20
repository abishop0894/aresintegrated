'use client';


const images = [
  'https://aresintegrated.s3.us-east-1.amazonaws.com/low-angle-shot-high-residential-buildings-cloudy-sky.jpg',
  'https://aresintegrated.s3.us-east-1.amazonaws.com/low-angle-shot-texas-capitol-building-blue-beautiful-sky-austin-city-texas.jpg',
  'https://aresintegrated.s3.us-east-1.amazonaws.com/washington-dc-city-aerial-view.jpg'
];

export default function SmallHeader() {
  return (
    <section className="absolute top-0 h-[35vh] -mt-[10vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(${images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dimmed overlay */}
      <div className="absolute inset-0 bg-black/50 z-20" />
    </section>
  );
}